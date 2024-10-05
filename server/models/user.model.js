const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs'); // Correct import
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, { timestamps: true }); 

// Hash the password before saving the user
userSchema.pre("save", async function (next) {
    // Only hash the password if it's new or modified
    if (this.isModified('password')) {
        const salt = await bcryptjs.genSalt(10);
        // Set hashed password on the user object
        const hash = await bcryptjs.hash(this.password, salt);
        this.password = hash;
    }
    next();
});

/**
 * Verifying User Password
 * step no.1 password will come as input
 * step no.2 this.password 
 * step no.3 compare both using bcryptjs; if it matches, it returns true
 * and shows the message that the user has successfully logged in
 */

userSchema.methods.verifyPassword = function(password) {
    return bcryptjs.compare(password, this.password);
};

userSchema.methods.generateToken = async function(){
    try {
        return  jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn:"30d"
            }
        );
    } catch (error) {
        console.log("error in generating the access tokens:",error);
    }
}

const User = mongoose.model('User', userSchema);

module.exports = User;

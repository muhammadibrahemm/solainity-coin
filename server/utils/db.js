const mongoose = require('mongoose');

const URI = process.env.MONGO_DB_URI

const connectDB = async()=>{
    try {
        
        await mongoose.connect(URI);
        console.log("Connection gets successful",URI);
    } catch (error) {
        console.error("Connection failed");
        process.exit(0);
    }
}

module.exports = connectDB
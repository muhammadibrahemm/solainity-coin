const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema(
    {
        totalScore:{
            type: Number,
            default:0,
        },
        mathScore:{
            type: Number,
            default:0
        },
        referalScore:{
            type: Number,
            default:0
        },
        videoScore:{
            type: Number,
            default:0
        },
        user: { 
            type: mongoose.Schema.Types.ObjectId, // Reference to the User model
            ref: 'User',
            required: true
        }
    }
)

const score = mongoose.model('Score',scoreSchema);

module.exports = score
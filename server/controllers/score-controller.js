const scoreModel = require('../models/score.model');
const userModel = require("../models/user.model");

async function coins(req, res) {
    try {
        const email = req.body.email;
        const keyword = req.body.keyword;
        console.log('keyword',keyword);
        console.log('email',email);
        
        // Find the user by email
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        // Find the score associated with the user
        let score = await scoreModel.findOne({ user: user._id });

        // Initialize scores
        let mathScore = 0;
        let referalScore = 0;
        let videoScore = 0;
        let totalScore = 0;

        // If the score document doesn't exist, create a new one
        if (!score) {
            // Use the create function to create a new score document
            score = await scoreModel.create({
                user: user._id, // Embed user ID
                mathScore,
                referalScore,
                videoScore,
                totalScore
            });
        } else {
            // Get existing scores from the score document
            mathScore = score.mathScore; 
            referalScore = score.referalScore;
            videoScore = score.videoScore;
            totalScore = score.totalScore || 0; // Initialize totalScore if it doesn't exist
        }

        // Update scores based on the keyword
        if (keyword === 'math') {
            mathScore += 1; // Increment by 1 or your logic here
        } else if (keyword === 'referal') {
            referalScore += 1;
        } else if (keyword === 'video') {
            videoScore += 1;
        }

        else{
            return res.status(400).json({
                msg: "Incorrect keyword"
            })
        }

        // Update the total score based on the individual scores
        totalScore = mathScore + referalScore + videoScore; // Calculate total score

        // Set the updated scores in the score document
        score.mathScore = mathScore;
        score.referalScore = referalScore;
        score.videoScore = videoScore;
        score.totalScore = totalScore; // Set the updated total score

        // Save the score document (this will create a new document if score is new or update it if it exists)
        await score.save();

        // Return success response
        return res.status(200).json({ msg: "Score updated successfully", score });
    } catch (error) {
        console.log("error in score controller", error);
        return res.status(500).json({
            msg: "error in score controller"
        });
    }
}

module.exports = coins;

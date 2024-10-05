const usermodel = require('../models/user.model');
const scoremodel = require("../models/score.model");
const jwt = require('jsonwebtoken');

const registeration = async (req,res) => {
    console.log(req.body);
    const {email, username, password} = req.body;
    try {

       const existedUser =  await usermodel.findOne({
            $or: [{username, email}]
        });
        
        if(existedUser){
            return res.status(409).json({
                message: 'user with this email or username already exists'
            });
        }

        const userCreated = await usermodel.create({
            username,
            email,
            password
        });

        console.log("user created",userCreated);

        return res.status(201).json({
            msg: "user has been created successfully"
        });

    } catch (error) {
        console.log("error in registration",error);
    }
}

const login = async (req,res) => {
    const {email, password} = req.body;

    // check whether user email exists or not
   try {
     const userExists = await usermodel.findOne({email});
     console.log("User Exists",userExists);
 
     
     if(!userExists){
         return res
         .status(401)
         .json({
            msg: 'invalid credentials'
         });
     }
     
     const verifyUserPassword = await userExists.verifyPassword(password);
     
     if(!verifyUserPassword){
         return res
         .status(401)
         .json({msg: "Invalid Credentials"});
     }
 
     return res
     .status(200)
     .json({
         msg:"user has been successfully logged in",
         accessToken: await userExists.generateToken(),
        userId: userExists._id.toString()
     });
   } catch (error) {
        return res.status(500).json({error})
   }

}


const fetchUserDataFromJWTToken = async (req, res) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: "Unauthorized HTTP, Token not provided" });
    }

    // Check if the token starts with "Bearer "
    if (!token.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized HTTP, Token format is invalid" });
    }

    const jwtToken = token.replace("Bearer ", "").trim();

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        const userData = await usermodel.findOne({ email: isVerified.email }).select({ password: 0 });

        if (!userData) {
            return res.status(401).json({ message: "Unauthorized. Invalid token." });
        }

        const scoreData = await scoremodel.findOne({ user: userData._id });

        // Initialize scores to 0 if scoreData is not found
        const necessaryData = {
            id: userData._id,
            email: userData.email,
            username: userData.username,
            createdAt: userData.createdAt,
            updatedAt: userData.updatedAt,
            totalScore: scoreData ? scoreData.totalScore : 0,
            mathScore: scoreData ? scoreData.mathScore : 0,
            referalScore: scoreData ? scoreData.referalScore : 0,
            videoScore: scoreData ? scoreData.videoScore : 0,
        };

        return res.status(200).send({ necessaryData });

    } catch (error) {
        console.error("Error in fetching user data:", error); // Log the error for debugging
        return res.status(401).json({ message: "Unauthorized. Invalid token." });
    }
};

module.exports = fetchUserDataFromJWTToken; // Ensure to export the function


module.exports = {
    registeration,
    login,
    fetchUserDataFromJWTToken
}
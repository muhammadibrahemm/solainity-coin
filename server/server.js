require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
const codeVerificationRoute = require('./routes/emailVerification-router')
app.use(express.json());
const connectDB = require('./utils/db');
const userRouter = require('./routes/user-router');
const scoreRouter = require('./routes/score-router');


const corsOptions = {
    origin: "http://localhost:5173",
    method: "GET, POST, PUT, PATCH, DELETE, HEAD",
    Credential:true
}

app.use(cors(corsOptions))

// defining the routes
app.use("/api/msgcode",codeVerificationRoute);
app.use('/api/auth',userRouter);
app.use('/api/activity/',scoreRouter);


connectDB().then(()=>{
    app.listen(process.env.PORT, () => {
        console.log(`server is started on ${process.env.PORT}`);  
    })
})
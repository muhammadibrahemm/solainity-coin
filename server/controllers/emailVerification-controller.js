const nodemailer = require('nodemailer');



// Sending the email function
const sendingCode = async (req, res) => {
    console.log(req.body);
    const registrationEmail = req.body.email;
    const verificationCode = req.params.code

    // Create transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        port: 465,
        auth: {
            user: 'muhammadibraheem8567@gmail.com', // Store this in environment variable
            pass: 'qact xnnz oiqj jcdx'  // Store this in environment variable
        }
    });

    // Mail options
    const mailOptions = {
        from: 'muhammadibraheem8567@gmail.com', // Sender's email address
        to: registrationEmail, // Receiver's email address
        subject: 'Your Verification Code',
        text: `Your verification code is: ${verificationCode} \n Do not Share your code with anyone`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Failed to send email' });
        }
        console.log('Email sent: ' + info.response);
        return res.status(200).json({ message: 'Verification code sent successfully', code: verificationCode });
    });
};

module.exports = sendingCode;

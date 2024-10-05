import React, { useState } from 'react';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import SmsCheck from '../SMSCheck/SMSCheck';

const Signup = () => {
    const navigate = useNavigate()
    const [userRegistrationData, setUserRegistrationData] = useState(
        {
            email:'',
            username:'',
            password:'',
            confirmPassword:''
        }
    )

    const setUserData = (e) => {
        const {name,value} = e.target;
        setUserRegistrationData({
            ...userRegistrationData,[name]:value
        });
    }

    // Function to generate a random 6-digit code
    const generateVerificationCode = () => {
      return Math.floor(100000 + Math.random() * 900000); // 6-digit code
    };

    const handleSubmitData = async(e) => {
      e.preventDefault();
      console.log(userRegistrationData);
      const { password, confirmPassword ,email, username} = userRegistrationData;

  // Check for empty fields before proceeding
  if (!email || !username || !password || !confirmPassword) {
    toast.error("Please fill in all required fields.");
    return; // Exit the function if there are empty fields
  }
  
      if (password !== confirmPassword) {
          toast.error("Both passwords are not matching, please re-enter the password.");
      } else {
        const verificationCode = generateVerificationCode();
        navigate('/verification-code', { state: { code: verificationCode, email, username, password} });
        
          const res = await fetch(`http://localhost:5000/api/msgcode/verification/${verificationCode}`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(userRegistrationData)
          });
  
          if (res.ok) {
              
              const data = await res.json();
              console.log(data);
              
          } else {
              toast.error("Something went wrong. Please try again.");
          }
      }
  };
  
  return (
    <div className="flex flex-col lg:flex-row bg-black">

      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center lg:w-1/2 bg-black text-white p-8">
        <h2 className="text-3xl font-bold text-blue-500 mb-6">Get Started Now</h2>
        <p className="text-sm mb-4">
          If you already have an account register, you can{' '}
          <a href="/login" className="text-blue-400 underline">Login here!</a>
        </p>
        <form className="w-full max-w-sm space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm mb-1">Email</label>
            <input type="email" id="email" placeholder="Enter your email address" className="p-2 bg-gray-800 border border-gray-700 rounded-md" required
                name='email'
                value={userRegistrationData.email}
                onChange={(e) => {setUserData(e)}}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm mb-1">Username</label>
            <input type="text" id="username" placeholder="Enter your username" className="p-2 bg-gray-800 border border-gray-700 rounded-md" required
                name='username'
                value={userRegistrationData.username}
                onChange={(e) => {setUserData(e)}}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm mb-1">Password</label>
            <input type="password" id="password" placeholder="Enter your password" className="p-2 bg-gray-800 border border-gray-700 rounded-md" required
                name='password'
                value={userRegistrationData.password}
                onChange={(e) => {setUserData(e)}}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirm-password" className="text-sm mb-1">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password" className="p-2 bg-gray-800 border border-gray-700 rounded-md" required
                value={userRegistrationData.confirmPassword}
                name='confirmPassword'
                onChange={(e) => {setUserData(e)}}
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition duration-300 ease-in-out"
            onClick={handleSubmitData}
          >
             Register
            </button>
        </form>
      </div>
      
      {/* Right Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <img src="Registration Images/Group 5951.png" alt="Maths Adventurer" className="w-2/3 h-auto"/>
      </div>
    </div>
  );
};

export default Signup;

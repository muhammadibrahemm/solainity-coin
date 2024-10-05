import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'


const SmsCheck = () => {
    const location = useLocation();
    const [emailCode,setEmailCode] = useState("");
    const navigate = useNavigate();
    const { code, email, username, password} = location.state || {};  // Access the passed code
    console.log(code , email, username, password);

    const handleSubmitEmailCode = async () => {

        if(code != emailCode){
          console.log("you have entered incorrect code");
        }


        console.log("you have entered correct code");

        const body = {
          username,
          email,
          password
        }

        try {
          
          const res = await fetch("http://localhost:5000/api/auth/register",{
            method: "POST",
            headers : {
              "Content-Type" : "application/json"
          },
            body: JSON.stringify(body)
          });

          const data = await res.json();
            console.log(data);

          if(res.ok){
            toast.success("user has been successfully registered.")
            navigate('/login')
          }
          else{
            console.log(data); 
            toast.error(data.message)
            navigate('/SignUp')
          }

        } catch (error) {
          console.log("error while sending request to backend",error);
        }
    } 
    
  return (
    <div className=" bg-black flex flex-col items-center justify-center">
      {/* Container for the image and form */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10">
        {/* Image Section */}
        <img
          src="SMS Images/icons(3).png"
          alt="Security Shield"
          className="hidden md:block w-[200px] lg:w-[250px]" // Hidden on small devices, visible on medium (md) and up
        />

        {/* Right Side - Form */}
        <div className="text-center text-white">
          <h2 className="text-blue-400 text-lg font-bold mb-4">Check Email</h2>
          <p className="text-gray-400 mb-6">Please check your Email and register yourself.</p>

          {/* Input Field and Button Container */}
          <div className="flex justify-center items-center space-x-4">
            <input
              type="text"
              placeholder="Enter your code"
              className="w-[250px] md:w-[300px] px-6 py-2 rounded-full outline-none text-black text-center"
              value={emailCode}
              onChange={(e) => setEmailCode(e.target.value)}
            />
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-lg font-semibold transition-transform transform hover:scale-105"
              onClick={handleSubmitEmailCode}
            >
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmsCheck;

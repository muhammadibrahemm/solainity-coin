import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify'
import { Navigate, useNavigate , NavLink} from "react-router-dom";
import { UseTokenContext } from '../Context/useContext';

export const Login = () => {

  const {isloggedIn, setIsLoggedIn} = UseTokenContext();
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserCredentials(
      {
        ...userCredentials,[name]:value
      }
    );
  }

  const handleFormSubmissionData = async (e) => {
    e.preventDefault();
    try {
      
     const response =  await fetch('http://localhost:5000/api/auth/login',{
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userCredentials)
      })

      if(response.ok){
        const data = await response.json();
        console.log(data);
        const token = data.accessToken
        console.log(token);
        setIsLoggedIn(true)
        localStorage.setItem('ACCESSTOKEN',token);
        navigate('/user')
        toast.success(data.msg);
        
      }

      
      else{
        const data = await response.json();
        console.log(data);
        toast.error("Invalid Credentials");
      }

    } catch (error) {
      console.log(error);
      toast.error("Error while making request to backend");
    }
    
  }

  return (
    <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center bg-gray-900 text-white p-4">
      {/* Left Section - Image & Text */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-400 mb-4">
          Welcome to Your Math Adventure!
        </h1>
        <h2 className="text-2xl text-purple-400 mb-8">Let's Get Started</h2>
        <button className="hidden md:inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Get Started Now
        </button>
        {/* Image - Hidden on Mobile */}
        <img
          src="Login Images/login.png"
          alt="Gift Box"
          className="hidden md:block mx-auto md:mx-0 w-48 md:w-64 mt-8"
        />
      </div>

      {/* Right Section - Form */}
      <div className="md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Sign in</h2>
        <p className="mb-4">
          If you don't have an account, you can{" "}
          <NavLink to={'/signup'} className="text-blue-400 hover:underline">
            Register here!
          </NavLink>
        </p>

        {/* Form */}
        <form onSubmit={handleFormSubmissionData}> 
          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full p-2 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              name="email"
              value={userCredentials.email}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Enter your Password"
              className="w-full p-2 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              value={userCredentials.password}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>


          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Login
          </button>

         
        </form>
      </div>
    </div>
  );
};


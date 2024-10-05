import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UseTokenContext } from '../Context/useContext';

export const HeaderComponent = () => {
    const {isloggedIn, setIsLoggedIn} = UseTokenContext();

    useEffect(() => {
        // Check for token on page load/reload
        const token = localStorage.getItem("Token");
        if (token) {
            setIsLoggedIn(true); // Set to true if token is present
        } else {
            setIsLoggedIn(false);
        }
    }, []);


  return (
    <header className="w-full bg-black p-4">
      <div className="w-5/6 mx-auto flex justify-between items-center border-2 border-blue-500 rounded-full py-2 px-4">
        <div className="flex items-center">
          <img src="Home Images/Group 5950(1).png" alt="" />
          <span className="text-white text-lg lg:text-xl font-semibold ml-2">Solainity Coin</span>
        </div>

        {/* Buttons Section */}
        <div className="flex space-x-4">
          {isloggedIn ? (
            <>
              <button className="bg-transparent text-white border border-white py-2 px-4 rounded-full hover:bg-white hover:text-black transition duration-300">
                <NavLink to={'user'} className={({ isActive }) => `block rounded ${isActive ? 'underline' : 'hover:bg-blue-700'}`}>
                  User
                </NavLink>
              </button>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                <NavLink to={'/logout'}>
                  Logout
                </NavLink>
              </button>
            </>
          ) : (
            <>
              <button className="bg-transparent text-white border border-white py-2 px-4 rounded-full hover:bg-white hover:text-black transition duration-300">
                <NavLink to={'login'}>
                  Sign in
                </NavLink>
              </button>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                <NavLink to={'signup'}>
                  Sign up
                </NavLink>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Import the user icon
import { UseTokenContext } from '../Context/useContext'; // Import the context

function UserProfile() {
  const { userData, loading } = UseTokenContext(); // Get user data from context
  useEffect(()=>{

  },[loading])

  // Check for loading state
  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or loading animation
  }

  // Destructure user data
  const { username = 'Han Ji Pyeong', email = 'hanjipyeong@example.com', profilePictureUrl, totalEarnings = 0, joinedDate = 'June 22, 2020', totalScore = 0 } = userData?.necessaryData || {};

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg max-w-md mx-auto sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl mt-6">
      <div className="flex flex-col items-center justify-center mb-6">
        {/* Profile Picture */}
        <img
          src={profilePictureUrl || 'https://via.placeholder.com/150'} // Fallback to placeholder if no profile picture
          alt={`${username}'s profile`}
          className="rounded-full w-24 h-24 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover mb-2"
        />
        <h2 className="text-3xl font-bold sm:text-2xl md:text-4xl lg:text-5xl">{username}</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm sm:text-xs md:text-base lg:text-lg">
        <div className="text-gray-400">Joined</div>
        <div>{joinedDate}</div>

        <div className="text-gray-400">Email</div>
        <div>{email}</div>

        <div className="text-gray-400">Total Earnings</div>
        <div>{totalScore.toLocaleString()} Coins</div>
      </div>

      <div className="mt-6 flex justify-center">
        <Link to="/user" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-sm md:text-base lg:text-lg">
          Dashboard
        </Link>
      </div>
    </div>
  );
}

export default UserProfile;

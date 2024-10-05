import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UseTokenContext } from '../Context/useContext';

export const User = () => {
  const { loading, userData } = UseTokenContext(); // Get loading and userData from context
  const [data, setData] = useState(null); // State to hold user data

  const [score, setScore] = useState({
    mathScore: 0,
    referalScore: 0, // Ensure consistency in spelling
    videoScore: 0,
    totalScore: 0
  });

  // Removed extra closing bracket here

  useEffect(() => {
    // Removed undefined function getCurrentUser()

    // Update state from userData after loading completes
    if (!loading && userData) {
      const { mathScore = 0, referalScore = 0, videoScore = 0, totalScore = 0 } = userData?.necessaryData || {};
      setScore({
        mathScore,
        referalScore,
        videoScore,
        totalScore
      });
    }

    console.log("User data in component", userData); // Log user data for debugging
  }, [loading, userData]); // Added userData as dependency

  // Loading state handling
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Sidebar Section */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col justify-between p-4">
        <div>
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">Solainity Coin</h1>
          <nav>
            <ul>
              <li className="mb-4">
                <NavLink
                  to="/user/profile"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded ${isActive ? 'underline' : 'hover:bg-blue-700'}`
                  }
                >
                  Profile
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/user/account"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded ${isActive ? 'underline' : 'hover:bg-blue-700'}`
                  }
                >
                  Accounts
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/user/activity"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded ${isActive ? 'underline' : 'hover:bg-blue-700'}`
                  }
                >
                  Activity
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded ${isActive ? 'underline' : 'hover:bg-blue-700'}`
                  }
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <NavLink
            to={'logout'}
            className="block py-2 px-4 rounded bg-red-600 text-white hover:bg-red-500 text-center"
          >
            Logout
          </NavLink>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Score Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-800 p-4 rounded">
            <h3 className="text-xl">Maths Task</h3>
            <p className="text-2xl font-bold">{score.mathScore} Coins</p>
          </div>
          <div className="bg-blue-800 p-4 rounded">
            <h3 className="text-xl">Video Task</h3>
            <p className="text-2xl font-bold">{score.videoScore} Coins</p>
          </div>
          <div className="bg-blue-800 p-4 rounded">
            <h3 className="text-xl">Referral</h3>
            <p className="text-2xl font-bold">{score.referalScore} Coins</p>
          </div>
          <div className="bg-blue-800 p-4 rounded">
            <h3 className="text-xl">Account Balance</h3>
            <p className="text-2xl font-bold">{score.totalScore} Coins</p>
          </div>
        </section>

        {/* Activity Section */}
        <section>
          <h2 className="text-2xl mb-4">Activity</h2>
          <div className="bg-blue-800 p-6 rounded mb-6">
            <h3 className="text-xl">Earned</h3>
            <ul>
              <li className="flex justify-between py-2">
                <span>Videos</span>
                <span>{score.videoScore} Coins</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Maths Task</span>
                <span>{score.mathScore} Coins</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Referrals Task</span>
                <span>{score.referalScore} Coins</span>
              </li>
            </ul>
          </div>
          <div className="bg-blue-800 p-6 rounded">
            <h3 className="text-xl">Withdrawal</h3>
            <ul>
              <li className="flex justify-between py-2">
                <span>Videos</span>
                <span>0 Coins</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Maths Task</span>
                <span>0 Coins</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Referrals Task</span>
                <span>0 Coins</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

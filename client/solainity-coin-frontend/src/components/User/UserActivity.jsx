import React from 'react';
import { useNavigate } from 'react-router-dom';
import referalImage from '../../../public/User Images/referals.avif';
import videoImage from '../../../public/User Images/video add.jpg';
import quizImage from '../../../public/User Images/math quiz.jpg';

function Activity() {
  const navigate = useNavigate();

  // Handlers for navigation to different pages
  const handleQuizClick = () => navigate('/user/activity/math-quiz');
  const handleVideoClick = () => navigate('/user/activity/video-ad');
  const handleBackClick = () => navigate('/user'); // Navigate back to the user page

  const handleReferralClick = async () => {
    const referralLink = 'https://www.youtube.com'; // YouTube link for testing
    const message = `Check out this awesome video on YouTube! ${referralLink}`;

    // Share on WhatsApp
  const shareOnWhatsApp = async (message) => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    const win = window.open(url, '_blank');

    // Simple simulation for share success or failure
    if (win) {
      // Simulate checking if 3 shares happened
      const userConfirmed = window.confirm("Did you share with 3 friends?");
      return userConfirmed;
    }
    return false;
  };

  // Use WhatsApp API to share
  const shareSuccess = await shareOnWhatsApp(message);

  if (shareSuccess) {
    // Call backend API to add 5 score points
    // addReferralScore();
    // i will add my own logic
    console.log("You have sucessfully got 5 coins");
  } else {
    alert('Failed to share with 3 friends.');
  }
  }

  return (
    <div className="container mx-auto mb-8 mt-8">
      <h1 className="text-3xl font-bold text-center mb-4">Earn Clever Coins & Level Up Your Math Skills!</h1>
      <p className="text-center mb-8">Choose from a variety of engaging activities and watch your coin balance grow!</p>

      <div className="flex flex-col gap-4">
        {/* Math Quiz Module */}
        <div className="p-4 bg-blue-500 rounded-lg text-white">
          <div className="flex justify-center items-center h-60">
            <img src={quizImage} alt="Math Quiz" className="w-72 object-cover rounded-lg" />
          </div>
          <h2 className="text-xl font-semibold mt-4 text-center">Math Quiz</h2>
          <p className="text-lg mt-2 text-center">Solve math problems and earn clever coins.</p>
          <div className="flex justify-center mt-4">
            <button onClick={handleQuizClick} className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-lg hover:bg-blue-100">
              Start Math Quiz
            </button>
          </div>
        </div>

        {/* Video Ad Module */}
        <div className="p-4 bg-green-500 rounded-lg text-white">
          <div className="flex justify-center items-center h-60">
            <img src={videoImage} alt="Video Ad" className="w-72 object-cover rounded-lg" />
          </div>
          <h2 className="text-xl font-semibold mt-4 text-center">Video Ad</h2>
          <p className="text-lg mt-2 text-center">Watch videos and earn clever coins.</p>
          <div className="flex justify-center mt-4">
            <button onClick={handleVideoClick} className="bg-white text-green-500 font-semibold py-2 px-6 rounded-lg hover:bg-green-100">
              Watch Videos
            </button>
          </div>
        </div>

        {/* Referral Module */}
        <div className="p-4 bg-yellow-500 rounded-lg text-white">
          <div className="flex justify-center items-center h-60">
            <img src={referalImage} alt="Referral" className="w-72 object-cover rounded-lg" />
          </div>
          <h2 className="text-xl font-semibold mt-4 text-center">Referral</h2>
          <p className="text-lg mt-2 text-center">Invite friends and earn clever coins.</p>
          <div className="flex justify-center mt-4">
            <button onClick={handleReferralClick} className="bg-white text-yellow-500 font-semibold py-2 px-6 rounded-lg hover:bg-yellow-100">
              Invite Friends
            </button>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-4 bg-blu">
          <button onClick={handleBackClick} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-sm md:text-base lg:text-lg">
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Activity;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function VideoAd() {
  const [coinsEarned, setCoinsEarned] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const navigate = useNavigate();

  // List of video ads (You can replace these URLs with actual video ad links)
  const videoAds = [
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/movie.mp4',
    'https://www.w3schools.com/html/mov_c.mp4', // Add more video links as needed
  ];

  // Select a random video ad when the component loads
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * videoAds.length);
    setVideoUrl(videoAds[randomIndex]);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const handleVideoEnd = () => {
    setCoinsEarned(true);
    // Call backend API to add 5 score points
    // addVideoScore();
    console.log("You have successfully earned 5 coins from watching the video.");
  };

  const handleBackClick = () => {
    navigate('/user/activity');
  };

  return (
    <div className="container mx-auto mb-8 mt-8">
      <h1 className="text-3xl font-bold text-center mb-4">Watch Video to Earn Coins</h1>
      <div className="flex justify-center">
        {videoUrl && (
          <video
            width="600"
            controls
            onEnded={handleVideoEnd}
            className="rounded-lg"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      {coinsEarned && (
        <p className="text-center text-green-500 font-semibold mt-4">
          You have successfully earned 5 coins!
        </p>
      )}
      <div className="flex justify-center mt-4">
        <button onClick={handleBackClick} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full">
          Back
        </button>
      </div>
    </div>
  );
}

export default VideoAd;

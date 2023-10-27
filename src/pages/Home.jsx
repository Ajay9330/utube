// Home.jsx

import React, { useState, useEffect } from 'react';

// Sample data for video thumbnails (you should replace this with actual API data)
const videoData = [
  {
    id: 1,
    title: 'Sample Video 1',
    thumbnailUrl: 'https://example.com/thumbnail1.jpg',
  },
  {
    id: 2,
    title: 'Sample Video 2',
    thumbnailUrl: 'https://example.com/thumbnail2.jpg',
  },
  // Add more video objects here
];

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch video data from an API and update the state
    // Here, we're using the sample data defined above
    setVideos(videoData);
  }, []);

  return (
    <div className=''>
      <h1 className="text-2xl font-semibold mb-4">Home</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="bg-white shadow-md rounded-lg">
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{video.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

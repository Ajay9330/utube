// Music.jsx

import React, { useState, useEffect } from 'react';

// Sample data for music videos (you should replace this with actual API data)
const musicData = [
  {
    id: 1,
    title: 'Music Video 1',
    artist: 'Artist Name 1',
    thumbnailUrl: 'https://example.com/music1.jpg',
  },
  {
    id: 2,
    title: 'Music Video 2',
    artist: 'Artist Name 2',
    thumbnailUrl: 'https://example.com/music2.jpg',
  },
  // Add more music video objects here
];

const Music = () => {
  const [musicVideos, setMusicVideos] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch music video data from an API and update the state
    // Here, we're using the sample data defined above
    setMusicVideos(musicData);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Music</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {musicVideos.map((video) => (
          <div key={video.id} className="bg-white shadow-md rounded-lg">
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{video.title}</h2>
              <p className="text-gray-600">{video.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;

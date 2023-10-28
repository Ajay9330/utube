// Trending.jsx

import React, { useState, useEffect } from 'react';
import Video from '../components/Video';

// Sample data for trending videos (you should replace this with actual API data)
const trendingData = [
  {
    id: 1,
    title: 'Trending Video 1',
    thumbnailUrl: 'https://example.com/trending1.jpg',
  },
  {
    id: 2,
    title: 'Trending Video 2',
    thumbnailUrl: 'https://example.com/trending2.jpg',
  },
  // Add more trending video objects here
];

const Trending = () => {
  const [trendingVideos, setTrendingVideos] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch trending video data from an API and update the state
    // Here, we're using the sample data defined above
    setTrendingVideos(trendingData);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Trending</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {trendingVideos.map((video) => (
          <Video videoData={video}/>
        ))}
      </div>
    </div>
  );
};

export default Trending;

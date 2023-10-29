import React, { useState, useEffect } from 'react';
import Video from '../components/Video';
import { fetchYouTubeVideos } from '../services/api';

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

];

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
  
    async function fetchHomeVideos() {
      try {
        const videoData = await fetchYouTubeVideos('', 5); 
        setVideos(videoData);
      } catch (error) {
        console.error('Error fetching home videos', error);
      }
    }

    fetchHomeVideos();
  }, []);

  return (
    <div className="">
      <h1 className="text-2xl text-white text-center  font-semibold mb-4">Home</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <Video videoData={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;

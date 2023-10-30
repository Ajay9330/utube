import React, { useEffect, useState } from 'react';
import Video from '../components/Video';
import { fetchPopularVideos } from '../services/api';

const Trending = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch trending videos
    async function fetchTrendingVideos() {
      try {
        const videoData = await fetchPopularVideos( 20); 
        setVideos(videoData);
      } catch (error) {
        console.error('Error fetching trending videos', error);
      }
    }

    fetchTrendingVideos();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Trending</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <Video key={video.id.videoId} videoData={video} />
        ))}
      </div>
    </div>
  );
};

export default Trending;

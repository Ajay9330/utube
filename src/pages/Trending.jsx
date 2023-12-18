import React, { useEffect, useState } from 'react';
import Video from '../components/Video';
import { fetchPopularVideos } from '../services/api';
import ProfessionalSkeleton from '../components/ProfessionalSkeleton';

const Trending = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch trending videos
    async function fetchTrendingVideos() {
      try {
        const videoData = await fetchPopularVideos(20);
        setVideos(videoData);
      } catch (error) {
        console.error('Error fetching trending videos', error);
        // alert("Error:"+error);
      } finally {
        setLoading(false);
      }
    }

    fetchTrendingVideos();
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-green-500 underline text-center text-zxl font-semibold mb-4">Trending</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading ? (
          // Display skeleton when loading
          Array.from({ length: 12 }).map((_, index) => <ProfessionalSkeleton key={index} color="bg-gray-800 rounded-lg" />)
        ) : (
          // Display videos when not loading
          videos.map((video) => (
            <Video key={video.id} k={video.id} videoData={video} />
          ))
        )}
      </div>
    </div>
  );
};

export default Trending;

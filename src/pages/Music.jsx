import React, { useState, useEffect } from 'react';
import Video from '../components/Video';
import { fetchPlaylistItems } from '../services/api';
import ProfessionalSkeleton from '../components/ProfessionalSkeleton'; // Import the skeleton component

const Music = () => {
  const [musicVideos, setMusicVideos] = useState([]);
  const [loading, setIsLoading] = useState(true);
  

  useEffect(() => {
    // Fetch playlist items
    fetchPlaylistItems('PL_yIBWagYVjwYmv3PlwYk0b4vmaaHX6aL')
      .then((playlistItems) => {
        setMusicVideos(playlistItems);
      })
      .catch((error) => {
        console.error('Error fetching playlist items:', error);
        // alert("Error:"+error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-green-500 underline text-center text-zxl font-semibold mb-4">Music</h1>

      <div className="grid grid-cols-1  xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading ? (
          // Display skeleton when loading
          Array.from({ length: 12 }).map((_, index) => <ProfessionalSkeleton key={index} color="bg-gray-900 rounded-lg  -z-50" />)
        ) : (
          // Display videos when not loading
          musicVideos.map((video) => (
            <Video key={video.snippet.resourceId.videoId} k={video.snippet.resourceId.videoId} videoData={video} />
          ))
        )}
      </div>
    </div>
  );
};

export default Music;

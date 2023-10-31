import React, { useState, useEffect } from 'react';
import Video from '../components/Video';
import {fetchPlaylistItems} from '../services/api';

const Music = () => {
  const [musicVideos, setMusicVideos] = useState([]);

  useEffect(() => {
 

    // Fetch playlist items
    fetchPlaylistItems('PL_yIBWagYVjwYmv3PlwYk0b4vmaaHX6aL')
      .then((playlistItems) => {
        setMusicVideos(playlistItems);
      })
      .catch((error) => {
        console.error('Error fetching playlist items:', error);z
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-white text-center font-semibold mb-4">Music</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {musicVideos.map((video) => (
          <Video  key={video.snippet.resourceId.videoId} videoData={video} />
        ))}
      </div>
    </div>
  );
};

export default Music;

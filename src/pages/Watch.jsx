// Watch.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Watch() {
  const { videoId } = useParams();

  // Sample video data (you should replace this with actual API data)
  const videoData = {
    id: videoId,
    title: 'Sample Video Title',
    description: 'This is a sample video description.',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">{videoData.title}</h1>

      {/* Video Player */}
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          title={videoData.title}
          src={videoData.videoUrl}
          allowFullScreen
        />
      </div>

      <p className="text-gray-600 mt-4">{videoData.description}</p>
    </div>
  );
}

export default Watch;

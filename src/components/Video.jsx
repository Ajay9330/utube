// Video.jsx

import React from 'react';

function Video({ videoData }) {
  return (
    <div className="bg-white shadow-md rounded-xl m-4">
      <img
        src={videoData.thumbnailUrl}
        alt={videoData.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{videoData.title}</h2>
      </div>
    </div>
  );
}

export default Video;

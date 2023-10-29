import React from 'react';

function Video({ videoData }) {
  return (
    <div className="bg-white shadow-md rounded-xl m-4">
      <img
        src={videoData.snippet.thumbnails.medium.url}
        alt={videoData.snippet.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{videoData.snippet.title}</h2>
        <p className="text-gray-600">{videoData.snippet.channelTitle}</p>
        <p className="text-gray-600">{videoData.snippet.publishedAt}</p>
      </div>
    </div>
  );
}

export default Video;

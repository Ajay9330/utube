// Video.js
import React from 'react';
import { useVideoContext } from '../VideoContext'; // Import useVideoContext

function Video({ videoData ,k}) {
  const { playVideo } = useVideoContext(); // Use the video context
  videoData.videoId=k;
  const handleVideoClick = () => {
    alert(k);

    playVideo(videoData);
  }

  return (
    <div className=" bg-slate-400 shadow-md rounded-xl m-4 bg-transparent text-white hover:text-blue-500 border-slate-50" >
   
      <img
        src={videoData.snippet.thumbnails.medium.url}
        alt={videoData.snippet.title}
        className="w-full h-48 object-cover hover:cursor-pointer  shadow-2xl

        hover:scale-x-105 hover:translate-y-1.5 transition-all duration-300"
        onClick={handleVideoClick}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{videoData.snippet.title}</h2>
        <p className="text-gray-200 ">{videoData.snippet.channelTitle}</p>
        <p className="text-gray-200">{videoData.snippet.publishedAt}</p>
      </div>
    </div>
  );
}

export default Video;

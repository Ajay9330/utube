// Video.js
import React from 'react';
import { useVideoContext } from '../VideoContext'; // Import useVideoContext

function Video({ videoData ,k}) {
  const { playVideo } = useVideoContext(); // Use the video context
  videoData.videoId=k;
  const handleVideoClick = () => {
    // alert(k);

    playVideo(videoData);
  }

  return (
    <div className=" hero container max-w-screen-lg mx-auto pb-10 bg-slate-400 shadow-md rounded-xl m-4 bg-transparent text-white hover:text-blue-500 border-slate-50 transition-all duration-300" >
   
      <img
        src={videoData.snippet.thumbnails.medium.url}
        alt={videoData.snippet.title}
        className="mx-auto object-scale-down h-48 w-96 hover:cursor-pointer rounded-2xl shadow-md shadow-indigo-500
         hover:shadow-sm hover:shadow-orange-100 transition-all duration-300"
        onClick={handleVideoClick}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{videoData.snippet.title}</h2>
        <p className="text-gray-200 pt-4">{videoData.snippet.channelTitle}</p>
        <p className="text-gray-200">{videoData.snippet.publishedAt}</p>
      </div>
    </div>
  );
}

export default Video;

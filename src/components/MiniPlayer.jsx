import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useVideoContext } from '../VideoContext';
import "react-loading-skeleton/dist/skeleton.css";
import ProfessionalSkeleton from './ProfessionalSkeleton';

function MiniPlayer() {
  const { miniPlayerData, clearMiniPlayer } = useVideoContext();
  const [videoUrl, setVideoUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      if (miniPlayerData && miniPlayerData.videoId) {
        const videoId = miniPlayerData.videoId;

        try {
          setIsLoading(true);
          setVideoUrl(null); // Reset video URL

          const response = await fetch(`http://localhost:3300/video?vid=${videoId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch video URL');
          }

          const data = await response.json();
          setVideoUrl(data.url);
        } catch (error) {
          setError(JSON.stringify(""+error));
          setVideoUrl("E");
          console.error('Error fetching video URL:', error);
        } finally {
          // setIsLoading(false);
        }
      }
    };

    fetchVideoUrl();
  }, [miniPlayerData]);

  if (!miniPlayerData) {
    return null;
  }

  return (
    <div className={`fixed bottom-0 right-0 bg-blue-100 shadow-2xl shadow-white rounded-ss-3xl ${videoUrl !== "E" && videoUrl !== null ? 'minplayer' : ''}`}>
      <i
        className="material-icons text-4xl text-gray-100 hover:cursor-pointer focus:outline-none hover:text-black z-10 absolute transition-transform duration-300 hover:bg-neutral-600 rounded-2xl opacity-90"
        onClick={() => { setVideoUrl(null); clearMiniPlayer(); }}
      >
        close
      </i>
      <div className=" w-64 h-36 sm:w-66 sm:h-66 md:w-80 md:h-60 lg:w-96 lg:h-64 xl:w-128 xl:h-72 2xl:w-144 2xl:h-81">
        {isLoading ? (
          < >
          
            
            <Skeleton
              className=" z-50 absolute    text-blue-800 bg-blue-200 rounded-ss-3xl animate-ping
               dark:bg-blue-900 dark:text-blue-200
              bg-gradient-to-r from-gray-300 to-black h-full mx-auto"
          
            />
    <ProfessionalSkeleton/>
         
          </>
        ) : (
          videoUrl !== "E" && (
            <video
              controls
              autoPlay
              disablePictureInPicture
              controlslist="nodownload noplaybackrate"
              className="w-full h-full"
              src={videoUrl}
            />
          )
        )}
        {error && (
  <div className="flex items-center justify-center h-full text-red-500">
    {error}
  </div>
)}

      </div>
    </div>
  );
}

export default MiniPlayer;

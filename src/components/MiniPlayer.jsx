import React from 'react';
import { useVideoContext } from '../VideoContext';

function MiniPlayer() {
  const { miniPlayerData, clearMiniPlayer } = useVideoContext();

  if (!miniPlayerData) {
    return null;
  }

  const videoId = miniPlayerData.videoId;

  return (
    <div className="fixed bottom-0 right-0 p-2 bg-white shadow-md rounded-tl-md">
      <i className="material-icons text-4xl text-gray-500 hover:cursor-pointer focus:outline-none hover:text-black transform hover:scale-110 transition-transform duration-300" onClick={clearMiniPlayer}>
        close
      </i>

      <div className="w-64 h-36 sm:w-96 sm:h-54 md:w-80 md:h-45 lg:w-96 lg:h-54 xl:w-128 xl:h-72 2xl:w-144 2xl:h-81">
        <iframe
          title={miniPlayerData.title}
          src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&showinfo=0&autohide=1&wmode=transparent`}
          allowFullScreen
          className="w-full h-full"
        />
        
      </div>
      
    
    </div>
    
  );
}

export default MiniPlayer;

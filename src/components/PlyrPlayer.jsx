import React, { useRef, useEffect } from 'react';
import plyr from 'plyr';
import { useVideoContext } from '../VideoContext';

const PlyrPlayer = () => {
  const { miniPlayerData } = useVideoContext();
  const playerContainerRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!miniPlayerData) {
      return;
    }

    const { videoId } = miniPlayerData;

    // Destroy the existing Plyr instance
    if (playerRef.current) {
      playerRef.current.destroy();
    }

    // Create a new Plyr instance
    playerRef.current = new plyr(playerContainerRef.current, {
      // Plyr options go here if needed
    });

    // Load the new video
    playerRef.current.source = {
      type: 'video',
      sources: [
        {
          src: `https://www.youtube.com/watch?v=${videoId}`,
          type: 'video/youtube',
        },
      ],
    };
  }, [miniPlayerData]);

  return (
    <div className="w-64 h-36 sm:w-96 sm:h-54 md:w-80 md:h-45 lg:w-96 lg:h-54 xl:w-128 xl:h-72 2xl:w-144 2xl:h-81 mx-auto my-4">
      <div ref={playerContainerRef} className="plyr-container relative" />
    </div>
  );
};

export default PlyrPlayer;

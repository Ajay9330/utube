// VideoContext.js
import React, { createContext, useContext, useState } from 'react';

const VideoContext = createContext();

export const useVideoContext = () => {
  return useContext(VideoContext);
};

export const VideoProvider = ({ children }) => {
  const [miniPlayerData, setMiniPlayerData] = useState(null);

  const playVideo = (videoData) => {
    setMiniPlayerData(videoData);
  };

  const clearMiniPlayer = () => {
    setMiniPlayerData(null);
  };

  return (
    <VideoContext.Provider value={{ miniPlayerData, playVideo, clearMiniPlayer }}>
      {children}
    </VideoContext.Provider>
  );
};

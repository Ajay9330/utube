// YouTubePlayer.jsx

import React from 'react';
import ReactPlayer from 'react-player';

const YouTubePlayer = ({ videoUrl, quality }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={videoUrl}
        playing={true}
        controls={true}
        width="100%"
        height="100%"
        config={{
          youtube: {
            playerVars: {
              autoplay: 1,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
              iv_load_policy: 3,
              fs: 1,
              playsinline: 1,
              autohide: 1,
              cc_load_policy: 0,
              color: 'white',
              disablekb: 0,
              loop: 0,
              fs: 1,
              hl: 'en',
              playsinline: 1,
              theme: 'dark',
              vq: quality, // Set the video quality parameter
            },
          },
        }}
      />
    </div>
  );
};

export default YouTubePlayer;

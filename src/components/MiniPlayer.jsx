import React from 'react';

function MiniPlayer({ videoData, clearMiniPlayer }) {
  if (!videoData) {
    return null;
  }

  return (
    <div className="fixed bottom-0 right-0 p-2 bg-white shadow-md rounded-tl-md cursor-pointer" onClick={clearMiniPlayer}>
      <h3 className="text-xl font-semibold">{videoData.title}</h3>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          title={videoData.title}
          src={videoData.videoUrl}
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default MiniPlayer;

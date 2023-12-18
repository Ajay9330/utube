import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useVideoContext } from '../VideoContext';
import { createYouTubeVideoIframe } from '../services/videoService';

function Watch() {
  const { videoId } = useParams();
  const { playVideo, miniPlayerData } = useVideoContext();

  useEffect(() => {
    // Fetch additional data for the video (title, description, etc.) if needed
    // For demonstration purposes, using a placeholder data
    const videoData = {
      id: videoId,
      title: 'Sample Video Title',
      description: 'This is a sample video description.',
    };

    // Play the video in the mini-player
    playVideo(videoData);
  }, [videoId, playVideo]);

  return (
    <div className="flex flex-col space-y-4">
      {/* Video Player */}
      <div className="aspect-w-16 aspect-h-9">
        {createYouTubeVideoIframe(videoId)}
      </div>

      {/* Video Details */}
      <div>
        <h1 className="text-2xl font-semibold mb-4">{miniPlayerData?.title}</h1>
        <p className="text-gray-600">{miniPlayerData?.description}</p>
      </div>

      {/* Suggestions or Related Videos */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Up Next</h2>
        {/* Render a list of suggested videos or related videos */}
        {/* You can use a separate component for each suggestion */}
        {/* For simplicity, using placeholder data here */}
        <div className="flex space-x-4">
          <SuggestedVideo videoId="abc123" title="Suggested Video 1" />
          <SuggestedVideo videoId="def456" title="Suggested Video 2" />
          <SuggestedVideo videoId="ghi789" title="Suggested Video 3" />
        </div>
      </div>
    </div>
  );
}

// Separate component for suggested videos
const SuggestedVideo = ({ videoId, title }) => {
  const { playVideo } = useVideoContext();

  const handleSelect = () => {
    // Fetch additional data for the selected video if needed
    // For demonstration purposes, using a placeholder data
    const videoData = {
      id: videoId,
      title: `Selected: ${title}`,
      description: 'This is a sample video description.',
    };

    // Play the selected video in the mini-player
    playVideo(videoData);
  };

  return (
    <div className="cursor-pointer" onClick={handleSelect}>
      <div className="aspect-w-16 aspect-h-9">
        {createYouTubeVideoIframe(videoId)}
      </div>
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default Watch;

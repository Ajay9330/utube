import React, { useState, useEffect } from 'react';
import Video from '../components/Video';
import { searchYouTubeVideos } from '../services/api';
import ProfessionalSkeleton from '../components/ProfessionalSkeleton';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHomeVideos() {
      try {
        const videoData = await searchYouTubeVideos('');
        setVideos(videoData);
      } catch (error) {
        console.error('Error fetching home videos', error);
        // alert("Error:"+error);
      } finally {
        setLoading(false);
      }
    }

    fetchHomeVideos();
  }, []);

  return (
    <>
      <div className="">
        <h1 className="text-2xl text-green-500 underline text-center text-zxl font-semibold mb-4">Home</h1>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg">
          {loading ? (
            // Display skeleton when loading
            Array.from({ length: 12 }).map((_, index) => (
              <ProfessionalSkeleton key={index} color="bg-slate-900 rounded-lg -z-50" />
            ))
          ) : (
            // Display videos when not loading
            videos.map((video) => (
              <Video key={video.id.videoId} k={video.id.videoId} videoData={video} />
            ))
          )}
        </div>
        {/* <div  className="plyr__video-embed" id="player">
        <iframe src="https://www.youtube.com/embed/bTqVqk7FSmY" ></iframe>
    </div> */}
      </div>
    </>
  );
};

export default Home;

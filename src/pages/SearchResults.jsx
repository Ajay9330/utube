import React, { useState, useEffect } from 'react';
import Video from '../components/Video';
import { searchYouTubeVideos } from '../services/api';
import ProfessionalSkeleton from '../components/ProfessionalSkeleton';

const SearchResults = ({ query }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // alert("hi");
    async function fetchSearchResults() {
      try {
        const videoData = await searchYouTubeVideos(query);
        setVideos(videoData);
      } catch (error) {
        console.error('Error fetching search results', error);
        // alert("Error:"+error);
      } finally {
   
        setLoading(false);
      }
    }

    fetchSearchResults();
  }, [query]);

  return (
    <>
      <div className="">
        <h1 className="text-2xl text-green-500 underline text-center text-zxl font-semibold mb-4">
          Search Results for "{query}"
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading ? (
            // Display skeleton when loading
            Array.from({ length: 12 }).map((_, index) => (
              <ProfessionalSkeleton key={index} color="bg-blue-200" />
            ))
          ) : (
            // Display videos when not loading
            videos.map((video) => (
              <Video key={video.id.videoId} k={video.id.videoId} videoData={video} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults;

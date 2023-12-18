import React, { useState, useEffect } from 'react';
import Video from '../components/Video';
import { searchYouTubeVideos } from '../services/api';
import ProfessionalSkeleton from '../components/ProfessionalSkeleton';
import { useParams } from 'react-router-dom';

const SearchResults = ({ }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { query } = useParams();
  useEffect(() => {
    // alert(query);
    setLoading(true);
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

        <div className="grid grid-cols-1   xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {loading ? (
            // Display skeleton when loading
            Array.from({ length: 12 }).map((_, index) => (
              <ProfessionalSkeleton key={index} color="bg-blue-200 rounded-2xl -z-50" />
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

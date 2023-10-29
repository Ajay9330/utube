import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchYouTubeVideos } from '../services/api'; 

function Search({ setSearchResults }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const videos = await fetchYouTubeVideos(searchTerm);
      setSearchResults(videos);
      navigate(`/search-results`); 
    } catch (error) {
      console.error('Error fetching videos', error);
    }
  }

  useEffect(() => {
    if (location.search) {
      const searchParams = new URLSearchParams(location.search);
      const query = searchParams.get('q');
      if (query) {
        setSearchTerm(query);
        handleSearch();
      }
    }
  }, [location.search]);

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for videos"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;

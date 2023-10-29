import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

const Header = () => {
  const [searchQuery, setSearchQuery] = useState(''); 
  const navigate = useNavigate(); 

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <header className="sticky top-0 bg-gray-700 border-b border-dashed border-red-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-semibold">
            Logo
          </Link>
          <nav className="ml-6">
            <Link to="/" className="text-gray-400 hover:text-white px-3 py-2">
              Home
            </Link>
            <Link
              to="/trending"
              className="text-gray-400 hover:text-white px-3 py-2"
            >
              Trending
            </Link>
            <Link to="/music" className="text-gray-400 hover:text-white px-3 py-2">
              Music
            </Link>
          </nav>
        </div>

        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center mt-4 sm:mt-0"
        >
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-l-md focus:outline-none bg-gray-800 text-white focus:bg-black border-b-blue-500"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button
            type="submit"
            className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-r-md"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;

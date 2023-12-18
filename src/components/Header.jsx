import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/ut1.png';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
 
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()=="" || searchQuery==null){
      searchQuery("");
      return;
    }else{
  
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <header className="sticky top-0 bg-gray-700 border-b border-dashed border-red-500 text-white p-3 shadow-md">
     
      
     



      <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="block w-20 text-2xl font-semibold sm:block ">
          <img src={logo} alt="Logo" className="block w-20 :  fill-black  sm:block " />
        </Link>    
        <nav className="hidden sm:flex space-x-4">
  
          <Link to="/" className="text-gray-400 hover:text-white">
            Home
          </Link>
          <Link to="/trending" className="text-gray-400 hover:text-white">
            Trending
          </Link>
          <Link to="/music" className="text-gray-400 hover:text-white">
            Music
          </Link>
          
        </nav>
        <form onSubmit={handleSearchSubmit} className="flex items-center sm:ml-4">
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-2 flex w-2/3  rounded-l-md focus:outline-none bg-gray-800 text-white focus:bg-black border-b-blue-500 sm:w-auto"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button
            type="submit"
            className="bg-gray-600 hover:bg-gray-700 px-2 py-2 rounded-r-md"
          >
<span className=" justify-center align-middle material-icons">
search
</span>
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;

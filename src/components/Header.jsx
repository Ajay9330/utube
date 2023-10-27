import React from 'react';

const Header = () => {
  // Function to handle search input changes
  const handleSearchInputChange = (event) => {
    const searchQuery = event.target.value;
    // You can handle the search input here
  };

  // Function to handle search form submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // You can perform the search here
  };

  return (
    <header className=" bg-gray-700 border-b border-dashed border-red-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo or App Title */}
          <a href="/" className="text-2xl font-semibold">Logo</a>

          {/* Navigation Links */}
          <nav className="ml-6">
            <a href="/" className="text-gray-400 hover:text-white px-3 py-2">Home</a>
            <a href="/trending" className="text-gray-400 hover:text-white px-3 py-2">Trending</a>
            <a href="/music" className="text-gray-400 hover:text-white px-3 py-2">Music</a>
          </nav>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-l-md focus:outline-none bg-gray-800 text-white"
            onChange={handleSearchInputChange}
          />
          <button
            type="submit"
            className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-r-md">
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      className={` bg-gray-990 shadow-sm shadow-white p-4 h-screen ${
        sidebarOpen

        
          ? 'w-64 transition-all duration-300 ease-in-out'
          : 'w-16 transition-all duration-300 ease-in-out'
      }`}
    >
      <button onClick={toggleSidebar} className=" text-white hover:underline ">
        {sidebarOpen ? (
          <i className="material-icons text-4xl mb-8">close</i>
        ) : (
          <i className="material-icons text-4xl mb-8">menu</i>
        )}
      </button>
      {/* <h2
        className={`text-lg font-semibold ${
          sidebarOpen ? 'mb-3' : 'mb-0'
        }`}
        style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        Categories
      </h2> */}
      <ul className='flex flex-col space-y-2'>
        <li
          className={`mb-3 rounded-lg p-1  hover:bg-blue-50 transition duration-300   ${location.pathname === '/' ? 'bg-white hover:bg-white transition duration-300' : ''}`}
        >
          <Link
           to="/"
           className={`text-blue-600 hover:bg-white transition duration-300 ${
             location.pathname === '/' ? 'text-blue-800 ' : ''
           }`}
          >
            {sidebarOpen ? (
              <span className='flex gap-5' >
                <i className="material-icons md-dark md-inactive ">home</i> Home
              </span>
            ) : (
              <i className="material-icons">home</i>
            )}
          </Link>
        </li>
        <li
          className={`mb-3 rounded-lg p-1 hover:bg-white transition duration-300  ${
            location.pathname === '/trending' ? 'bg-blue-100' : ''
          }`}
        >
          <Link
            to="/trending"
            className={`text-blue-600  ${
              location.pathname === '/trending' ? 'text-blue-800' : ''
            }`}
          >
            {sidebarOpen ? (
              <span className='flex gap-5'>
                <i className="material-icons">trending_up</i> Trending
              </span>
            ) : (
              <i className="material-icons">trending_up</i>
            )}
          </Link>
        </li>
        <li
          className={`mb-2 rounded-lg p-1 hover:bg-blue-50 transition duration-300 ${location.pathname === '/music' ? 'bg-blue-100' : ''}`}
        >
          <Link
            to="/music"
            className={`text-blue-600  ${
              location.pathname === '/music' ? 'text-blue-800' : ''
            }`}
          >
            {sidebarOpen ? (
              <span className='flex gap-5'>
                <i className="material-icons">music_note</i> Music
              </span>
            ) : (
              <i className="material-icons">music_note</i>
            )}
          </Link>
        </li>
        {/* Add more navigation links or categories here */}
      </ul>
    </div>
  );
}

export default Sidebar;

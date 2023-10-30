import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Trending from './pages/Trending';
import Music from './pages/Music';
import Watch from './pages/Watch';
import Search from './pages/SearchResults';
import MiniPlayer from './components/MiniPlayer';

function App() {
  const [miniPlayerData, setMiniPlayerData] = useState(null);

  const handleVideoSelect = (videoData) => {
    setMiniPlayerData(videoData);
  };

  const clearMiniPlayer = () => {
    setMiniPlayerData(null);
  };

  useEffect(() => {

  }, []);

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ">
          <Header />
          <MiniPlayer videoData={miniPlayerData} clearMiniPlayer={clearMiniPlayer} />
          <div className="overflow-y-auto h-auto"> {/* Add this container for scrolling content */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/music" element={<Music />} />
              <Route path="/watch/:videoId" element={<Watch />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

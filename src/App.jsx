import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import the necessary components
import Header from './components/Header';
import Sidebar from './components/Sidebar'; // Import the Sidebar component
import Home from './pages/Home';
import Trending from './pages/Trending';
import Music from './pages/Music';
import Watch from './pages/Watch';
import Search from './pages/Search'; // Import the Search component
import MiniPlayer from './components/MiniPlayer';

function App() {
  const [miniPlayerData, setMiniPlayerData] = useState(null);

  // Example: Set mini player data when a video is selected
  const handleVideoSelect = (videoData) => {
    setMiniPlayerData(videoData);
  };

  // Clear mini player data when not needed (e.g., when video playback ends)
  const clearMiniPlayer = () => {
    setMiniPlayerData(null);
  };

  useEffect(() => {
    // Listen for events that trigger the MiniPlayer
    // Example: When a user selects a video, call handleVideoSelect
  }, []);

  return (
    <Router>
      <div className="flex ">
        <Sidebar /> {/* Add the Sidebar component */}
        <div className="flex-1">
          <Header />
          <MiniPlayer videoData={miniPlayerData} clearMiniPlayer={clearMiniPlayer} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/music" element={<Music />} />
            <Route path="/watch/:videoId" element={<Watch />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

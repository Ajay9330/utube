import axios from 'axios';
import { getUserLocation } from './ip';

const API_KEY=import.meta.env.VITE_API_K;
// alert(import.meta.env.VITE_API_K);
// Function to fetch the user's location
const fetchUserLocation = async () => {
  const userLocation = await getUserLocation();
  return userLocation;
};

// Function to fetch YouTube videos
export const fetchYouTubeVideos = async (searchQuery, maxResults = 5) => {
  try {
    const userLocation = await fetchUserLocation();
    const API_URL = 'https://www.googleapis.com/youtube/v3/search';
    console.log(API_KEY);
    const response = await axios.get(API_URL, {
      params: {
        key: API_KEY,
        part: 'snippet',
        maxResults,
        q: searchQuery,
        // location: `${userLocation.latitude},${userLocation.longitude}`,
        // locationRadius: '10mi', // Set your desired radius
      },
    });

    return response.data.items;
  } catch (error) {
    throw error;
  }
};

// Function to fetch popular or trending videos
export const fetchPopularVideos = async (maxResults = 5) => {
  try {
    const userLocation = await fetchUserLocation();
    const API_URL = 'https://www.googleapis.com/youtube/v3/videos';

    const response = await axios.get(API_URL, {
      params: {
        part: 'snippet, contentDetails, statistics',
        chart: 'mostPopular',
        regionCode: userLocation.country, // Use user's region code
        location: `${userLocation.latitude},${userLocation.longitude}`,
        maxResults,
        key: API_KEY,
      },
    });

    return response.data.items;
  } catch (error) {
    throw error;
  }
};

// Function to search for videos in a specific location
export const searchVideosByLocation = async (latitude, longitude, radius, query) => {
  try {
    const API_URL = 'https://www.googleapis.com/youtube/v3/search';

    const response = await axios.get(API_URL, {
      params: {
        key: API_KEY,
        part: 'snippet',
        location: `${latitude},${longitude}`,
        locationRadius: `${radius}mi`,
        q: query,
        type: 'video',
      },
    });

    return response.data.items;
  } catch (error) {
    throw error;
  }
};

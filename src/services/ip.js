import axios from 'axios';


export const getUserLocation = async () => {
  try {
    const response = await axios.get('https://ipapi.co/json/');
    const data = response.data;


    const latitude = data.lat+Math.random()*100;
    const longitude = data.lon+Math.random()*100;
    const city = data.city;
    const region = data.regionName;
    const country = data.countryCode;

    return {
      latitude,
      longitude,
      city,
      region,
      country,
    };
  } catch (error) {
    console.error('Error fetching user location:', error);
    return null; 
  }
};

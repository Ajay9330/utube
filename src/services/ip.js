import axios from 'axios';


export const getUserLocation = async () => {
  try {
    const response = await axios.get('http://ip-api.com/json');
    const data = response.data;


    const latitude = data.lat;
    const longitude = data.lon;
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

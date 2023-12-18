import axios from 'axios';


export const getUserLocation = async () => {
  try {
    const response = await axios.get('https://ipapi.co/json/');
    const data = response.data;

    console.log(data);
// Assuming data.latitude and data.longitude are the center coordinates of the country

// Define a range for latitude and longitude (adjust as needed)
const latitudeRange = { min: data.latitude - 5, max: data.latitude + 5 };
const longitudeRange = { min: data.longitude - 5, max: data.longitude + 5 };

// Generate random latitude and longitude within the specified range
// const latitude = latitudeRange.min + Math.random() * (latitudeRange.max - latitudeRange.min);
// const longitude = longitudeRange.min + Math.random() * (longitudeRange.max - longitudeRange.min);
const latitude=data.latitude;
const longitude=data.longitude;

// Now, latitude and longitude are random coordinates within the specified range

    const city = data.city;
    const region = data.region;
    const country = data.country_code;

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

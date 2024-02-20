// src/App.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationList from './components/LocationList';

const App = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {

      const options = {
        method: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=50&location="NewYork&term="food"',
        headers: {
          accept: 'application/json',
          "x-requested-with": "xmlhttprequest",
          "Access-Control-Allow-Origin": "*",
          Authorization: 'Bearer AY7uLF5-BapMJ8JDrkY0kfruTVYx7_rTOBktIxuoxPNGMv8w5YLcDEoO8Y-_9FEO7gJz_3PPWIXuG8ePvr8DEBAC7JKp3luQUGCKPtVLpeydhQljbmKHWljmSvKEYnYx'
        },
      };
      

      try {
        const response = await axios.request(options);
        console.log(response.data)
        setLocations(response.data.businesses);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className='location-container'>
      <LocationList locations={locations} />
    </div>
  );
};

export default App;

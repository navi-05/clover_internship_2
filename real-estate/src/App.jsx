// src/App.js

import React, { useState } from 'react';
import PropertyList from './components/PropertyList';
import { useEffect } from 'react';
import axios from 'axios'

const App = () => {

  const [properties, setProperties] = useState([])
  
  useEffect(() => {
    const fetchProperties = async () => {
      const options = {
        method: 'GET',
        url: 'https://zoopla.p.rapidapi.com/properties/v2/list',
        params: {
          locationValue: 'Oxford, Oxfordshire',
          locationIdentifier: 'oxford',
          furnishedState: 'Any',
          sortOrder: 'newest_listings',
          page: '1'
        },
        headers: {
          'X-RapidAPI-Key': 'dcbc879a96mshd3f8dbe552e4c45p1465fdjsn1265f315913c',
          'X-RapidAPI-Host': 'zoopla.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        setProperties(response.data.data.listings.regular)
      } catch (error) {
        console.error(error);
      }
    }

    fetchProperties();
  }, [])

  return (
    <div>
      <PropertyList properties={properties} />
    </div>
  );
};

export default App;

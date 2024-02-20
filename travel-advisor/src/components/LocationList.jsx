// src/components/LocationList.js

import React from 'react';

const LocationList = ({ locations }) => {
  return (
    <div>
      <h2>Travel Advisor</h2>
      <ul>
        {locations?.map((location) => (
          <li key={location.id}>
            <strong>{location.name}</strong>
            <p>Rating: {location.rating}</p>
            <p>Reviews: {location.review_count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;

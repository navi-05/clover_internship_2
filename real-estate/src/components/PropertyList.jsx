// src/components/PropertyList.js

import React from 'react';

const PropertyList = ({ properties }) => {
  return (
    <div>
      <h2>Real Estate Listings</h2>
      <ul className='list-container'>
        {properties.map((property) => (
          <li key={property.id}>
            <strong>{property.title}</strong>
            <p>Price: ${property.pricing.value}</p>
            <p>Address: {property.address}</p>

            <p>Attributes:</p>
            <p>Bathrooms: {property.attributes.bathrooms}</p>
            <p>Bedrooms: {property.attributes.bedrooms}</p>
            <p>Livingrooms: {property.attributes.livingrooms}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;

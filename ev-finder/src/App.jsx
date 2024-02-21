// src/App.js

import React from 'react';
import StationMap from './components/StationMap';

const App = () => {
  const googleMapsApiKey = 'AIzaSyBxda24fiJESIi6L7xtEMFtiXnXtoNH7LI';

  return (
    <div className="App">
      <h1>EV Station Finder</h1>
      <StationMap apiKey={googleMapsApiKey} />
    </div>
  );
};

export default App;

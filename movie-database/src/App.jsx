// src/App.js

import React from 'react';
import MovieList from './components/MovieList';

const App = () => {
  const tmdbApiKey = '6a52f6891ed0495d1cb78f9ab2c4a964';

  return (
    <div className="App">
      <h1>Movie Database</h1>
      <MovieList apiKey={tmdbApiKey} />
    </div>
  );
};

export default App;

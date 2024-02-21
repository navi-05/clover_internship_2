// src/components/MovieList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = ({ apiKey }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [apiKey]);

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <div>
              <strong>{movie.title}</strong>
              <p>{movie.overview}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

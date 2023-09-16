import { useState } from "react";

// const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovies = async () => {
  const [topRated, setTopRated] = useState([]);
    try{
      const response = await fetch(`${BASE_URL}/movie/top_rated/?api_key=${API_KEY}`);
      const movies = await response.json();
      console.log(movies);
      setTopRated(movies.results.slice(0, 10));
    } catch (error) {
      console.log(error);
    }
  };
  getMovies();

//  
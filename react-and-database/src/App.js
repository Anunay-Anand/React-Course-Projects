import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import axios from "axios";

function App() {
  // State to manage the api data
  const [movies, setMovies] = useState([]);
  // State to manage data loaded or not from API
  const [isLoading, setIsLoading] = useState(false);

  // Making get request with axios
  const fetchMoviesHandler = async () => {
    // set Loading State to true
    setIsLoading(true);
    const res = await axios.get("https://swapi.dev/api/films/");
    // Mapping all incoming data
    // All the data will be stored in transformed array as an array of objects
    const transformedMovies = res.data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });

    // Updating the Movies State
    setMovies(transformedMovies);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;

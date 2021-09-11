import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";
import axios from "axios";

function App() {
  // State to manage the api data
  const [movies, setMovies] = useState([]);
  // State to manage data loaded or not from API
  const [isLoading, setIsLoading] = useState(false);
  // State to manage Error
  const [error, setError] = useState(null);

  // Making get request with axios
  const fetchMoviesHandler = useCallback(async () => {
    // set Loading State to true
    setIsLoading(true);
    // setting error to null again to remove previous erorr if any before request
    setError(null);
    try {
      const res = await axios.get(
        "https://react-http-63562-default-rtdb.firebaseio.com/movies.json"
      );

      //Mapping JSON data or object in object coming from firebase
      const loadedMovies = [];
      // Loop through all the keys in data
      // Here each key id contains a movie object with title, release data.. We store this entire thus keys: value in array
      for (let key in res.data) {
        loadedMovies.push({
          id: key,
          title: res.data[key].title,
          openingText: res.data[key].openingText,
          releaseDate: res.data[key].releaseDate,
        });
      }

      // Mapping all incoming data
      // All the data will be stored in transformed array as an array of objects
      // const transformedMovies = res.data.results.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });

      // Updating the Movies State
      setMovies(loadedMovies);
      // set Loading State to false
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  // Use Effect to load or call API as side effect
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  // handler for adding Movie
  const addMovieHandler = async (movie) => {
    // setting error to null to remove any existing error
    setError(null);
    // Converting movie object into JSON
    movie = JSON.stringify(movie);
    try {
      // Sending data to the url
      const res = await axios.post(
        "https://react-http-63562-default-rtdb.firebaseio.com/meals.json",
        movie
      );
    } catch (error) {
      setError(error.message);
    }
  };

  // Different conditions for rendering content
  let content = <p>Found no Movies</p>;

  if (isLoading) {
    content = <p>is Loading...</p>;
  }

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* When not loading and movies are fetched
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {/* When loading failed or not requested. Check for error as well*/}
        {/* {!isLoading && movies.length === 0 && (
          <p>{error !== null ? error : "Found No Movies"}</p>
        )} */}
        {/* When request is being made to it's completion */}
        {/* {isLoading && <p>is Loading...</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://react-http-ac094-default-rtdb.firebaseio.com/movies.json');
      console.log(response);
      console.log(response);
      const data = await response.data;

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError('Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    const response = await axios.post('https://react-http-ac094-default-rtdb.firebaseio.com/movies.json', {
      title: movie.title,
      openingText: movie.openingText,
      releaseDate: movie.releaseDate,
    });
    const data = await response.data;
    console.log(data);
  }

  let content = <p>No Movies Found.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section> {content}</section>
    </React.Fragment>
  );
}

export default App;
import MovieList from 'components/MovieList/MovieList';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovieByQuery } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const searchMovie = async () => {
      if (!searchQuery) {
        return;
      }

      try {
        const data = await searchMovieByQuery(searchQuery);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    searchMovie();
  }, [searchQuery]);

  const hendleSubmit = evt => {
    evt.preventDefault();
    const searchValue = evt.target.children.search.value;
    setSearchParams({
      query: searchValue,
    });
  };
  return (
    <main>
      <h1>Movies</h1>
      <form onSubmit={hendleSubmit}>
        <input
          type="text"
          name="search"
          required
          value={searchQuery}
          onChange={e => updateQueryString(e.target.value)}
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>

      {movies.length > 0 && <MovieList movies={movies} />}
    </main>
  );
};

export default Movies;

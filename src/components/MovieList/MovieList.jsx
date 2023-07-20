import MovieListItem from 'components/MovieListItem/MovieListItem';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <MovieListItem key={id} id={id} title={title} poster={poster_path} />
        );
      })}
    </ul>
  );
};

export default MovieList;

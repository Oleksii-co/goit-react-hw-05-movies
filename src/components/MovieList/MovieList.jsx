import MovieListItem from 'components/MovieListItem/MovieListItem';

const MovieList = ({ movies }) => {
  return (

    <ul>
      {movies.map(({ id, title }) => {
        return (
          <MovieListItem key={id} id={id} title={title} />
        );
      })}
    </ul>
  );
};

export default MovieList;

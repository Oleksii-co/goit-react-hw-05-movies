import MovieListItem from 'components/MovieListItem/MovieListItem';

import PropTypes from 'prop-types';

import movieListStyle from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <ul className={movieListStyle.list}>
      {movies.map(({ id, title }) => {
        return <MovieListItem key={id} id={id} title={title} />;
      })}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

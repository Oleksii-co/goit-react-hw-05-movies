import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';


const MovieListItem = ({ id, title }) => {
  const location = useLocation();
  return (
    <li> 
      <Link state={{ from: location }} to={`/movies/${id}`}>
        {title}
      </Link>
    </li>
  );
};

export default MovieListItem;

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

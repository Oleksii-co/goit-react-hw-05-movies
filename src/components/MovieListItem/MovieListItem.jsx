import { Link, useLocation } from 'react-router-dom';

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

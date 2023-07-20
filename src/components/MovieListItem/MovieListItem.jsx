import { Link, useLocation } from 'react-router-dom';

const MovieListItem = ({ id, title, poster }) => {

    const location = useLocation();
    console.log('location :>> ', location);
  return (
    <li>
      <Link state={{from: location}} to={`/movies/${id}`}>{title}</Link>
    </li>
  );
  
};

export default MovieListItem;

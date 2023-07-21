import { Link, Outlet, useLocation } from 'react-router-dom';

const MovieDetailsPage = ({ data, backLink }) => {
  const location = useLocation();
  return (
    <div>
      <Link to={backLink}>Go Back</Link>
      <div>
        <img
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w300${data.poster_path}`
              : `https://www.tgv.com.my/assets/images/404/movie-poster.jpg}`
          }
          alt=""
        />

        <div>
          <h1>{`${data.title} (${data.release_date.slice(0, 4)})`}</h1>
          <p>{`User Score: ${Math.round(data.vote_average * 10)}%`}</p>
        </div>
        <div>
          <h2>Overview</h2>
          <p>{data.overview}</p>
        </div>
        <div>
          <h2>Genres</h2>
          <p>
            {data.genres
              .map(genre => {
                return genre.name;
              })
              .join(', ')}
          </p>
        </div>
        <div>
          <h3>Addictional Information</h3>
          <ul>
            <li>
              <Link state={location.state} to="cast">
                Cast
              </Link>
            </li>
            <li>
              <Link state={location.state} to="reviews">
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;

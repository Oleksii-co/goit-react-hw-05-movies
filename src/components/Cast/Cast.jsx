import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCreditsById } from 'services/api';

const Cast = () => {
  const { moviesId } = useParams();
  const [credits, setCredits] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieCreditsById(moviesId).then(data => {
      if (data.length === 0) {
        setError('We don`t have any cast for this movie');
        return;
      }
      setCredits(data);
    });
  }, [moviesId]);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {credits.map(inf => {
            return (
              <li key={inf.id}>
                <img
                  src={
                    inf.profile_path
                      ? `https://image.tmdb.org/t/p/w200${inf.profile_path}`
                      : `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/No-image-available.jpg/200px-No-image-available.jpg`
                  }
                  alt=""
                />
                <p>Name: {inf.name}</p>
                <p>Character: {inf.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;

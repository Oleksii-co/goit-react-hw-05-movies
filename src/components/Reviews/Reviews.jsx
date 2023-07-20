import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsById } from 'services/api';

const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieReviewsById(moviesId).then(data => {
      if (data.length === 0) {
        setError('We don`t have any reviews for this movie');
        return;
      }
      setReviews(data);
    });
  }, [moviesId]);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {reviews.map(inf => {
            return (
              <li key={inf.id}>
                <div>
                  <h3>Author: {inf.author}</h3>
                  <p>{inf.content}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;

import MovieDetailsPage from 'components/MovieDetailsPage/MovieDetailsPage';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetailsById } from 'services/api';


const MovieDetails = () => {
  const { moviesId } = useParams();
  const [detailInfo, setDetailInfo] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const detailInfo = async () => {

      try {
        const data = await getMovieDetailsById(moviesId);
        setDetailInfo(data);
      } catch (error) {
        setError(error.message);
      }
    };

    detailInfo();
  }, [moviesId, setDetailInfo]);

  return(
    <main>
   { detailInfo && <MovieDetailsPage data={detailInfo}/>}
    </main>
  )
};

export default MovieDetails;

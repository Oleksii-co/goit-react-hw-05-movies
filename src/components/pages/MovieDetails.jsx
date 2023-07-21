import MovieDetailsPage from 'components/MovieDetailsPage/MovieDetailsPage';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieDetailsById } from 'services/api';


const MovieDetails = () => {
  const { moviesId } = useParams();
  const [detailInfo, setDetailInfo] = useState();

  const location = useLocation();
  const backLink = useRef(location?.state?.from ?? '/');


  useEffect(() => {
    const detailInfo = async () => {

      try {
        const data = await getMovieDetailsById(moviesId);
        setDetailInfo(data);
      } catch (error) {
      }
    };

    detailInfo();
  }, [moviesId, setDetailInfo]);

  return(
    <main>
   { detailInfo && <MovieDetailsPage backLink={backLink.current} data={detailInfo}/>}
    </main>
  )
};

export default MovieDetails;

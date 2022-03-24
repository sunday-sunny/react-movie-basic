import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MovieDetail from "../components/MovieDetail";

/* Styled-Component */
const DetailPage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  position: relative;
`;

const Layer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* React Component */
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  /* API fetch : Get Movie */
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?with_cast=true&movie_id=${id}`
      )
    ).json();

    // Set Movie Object
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? null : (
        <DetailPage bgImg={movie.background_image}>
          <Layer>
            <MovieDetail
              key={movie.id}
              id={movie.id}
              bgImg={movie.background_image}
              coverImg={movie.large_cover_image}
              title={movie.title}
              description={movie.description_full}
              year={movie.year}
              genres={movie.genres}
              castes={movie.cast}
              rating={movie.rating}
              runtime={movie.runtime}
            />
          </Layer>
        </DetailPage>
      )}
    </div>
  );
}

export default Detail;

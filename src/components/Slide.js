import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import MovieSlide from "./MovieSlide";

/* Styled component */
const SlideBox = styled.div`
  color: white;
  width: 1400px;
  height: 345px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    all: unset;
    font-size: 36px;
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
`;

const Loader = styled(SlideBox)`
  justify-content: center;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  opacity: 0.5;
`;

const SlideShow = styled.div`
  width: 1150px;
  height: 345px;
  overflow: hidden;
`;

const Slides = styled.div`
  width: 3450px;
  height: 345px;
  display: flex;
  transform: translateX(${(props) => props.transX}px);
  transition: 0.3s ease-in-out;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

/* React Component */
function Slide({ api }) {
  /* Get API */
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [trans, setTrans] = useState(0);

  const getMovie = async () => {
    const json = await (await fetch(api)).json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  /* Slide Show Click event  */
  const onClickL = () => {
    if (trans == 0) return;
    setTrans((current) => current + 230);
  };
  const onClickR = () => {
    if (trans == -2300) return;
    setTrans((current) => current - 230);
  };

  return (
    <div>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <SlideBox>
          {/* Left Btn */}
          <button onClick={onClickL}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Movie Poster */}
          <SlideShow>
            <Slides transX={trans}>
              {movies.map((movie) => (
                <MovieSlide
                  id={movie.id}
                  title={movie.title_english}
                  coverImg={movie.medium_cover_image}
                />
              ))}
            </Slides>
          </SlideShow>

          {/* Right Btn */}
          <button onClick={onClickR}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </SlideBox>
      )}
    </div>
  );
}

export default Slide;

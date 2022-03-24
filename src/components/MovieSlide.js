import { Link } from "react-router-dom";
import styled from "styled-components";

/* Styled component */
let MovieSlideBlock;
let Layer;

MovieSlideBlock = styled.div`
  width: 230px;
  height: 345px;
  position: relative;
  &:hover ${Layer} {
    opacity: 1;
  }

  a {
    all: unset;
    cursor: pointer;
  }
`;

Layer = styled(MovieSlideBlock)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.2s ease-in-out;

  h2 {
    text-align: center;
    width: 80%;
  }
`;

/* React Component */
function MovieSlide({ id, title, coverImg }) {
  return (
    <MovieSlideBlock>
      <Link to={`/movie/${id}`}>
        <img src={coverImg}></img>
        <Layer>
          <h2>{title}</h2>
        </Layer>
      </Link>
    </MovieSlideBlock>
  );
}

export default MovieSlide;

import styled from "styled-components";

/* Styled component */
const MovieBlock = styled.div`
  width: 550px;
  height: 300px;
  margin-bottom: 100px;
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  color: white;
  position: relative;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 0.5s ease-in-out;

  img {
    top: -30px;
    left: -30px;
    height: 300px;
    position: absolute;
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

const MovieInfo = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: 20px;
  justify-content: space-evenly;
  h2 {
    font-size: 42px;
    font-weight: 700;
    font-style: italic;
  }

  h3 {
    text-align: right;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      margin-right: 10px;
      margin-bottom: 10px;
      background-color: black;
      padding: 4px 8px;
      font-size: 14px;
    }
  }
`;

/* React Component */
function Movie({ id, bgImg, coverImg, title, year, genres }) {
  return (
    <MovieBlock bgImg={bgImg}>
      <img src={coverImg}></img>
      <MovieInfo>
        <h3>{year}</h3>
        <h2>{title}</h2>
        {genres !== null ? (
          <ul>
            {genres.map((genre) => (
              <li>{genre}</li>
            ))}
          </ul>
        ) : null}
      </MovieInfo>
    </MovieBlock>
  );
}

export default Movie;

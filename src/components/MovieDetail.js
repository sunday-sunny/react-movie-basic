import styled from "styled-components";

/* Styled component */
const MovieDetailBlock = styled.div`
  width: 1200px;
  height: 700px;
  padding: 50px 0;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .bgImg {
    top: -40px;
    left: -20px;
    position: absolute;
  }
`;

const MovieDetailInfo = styled.div`
  margin: 0 30px 0 auto;
  width: 55%;

  h2 {
    font-size: 36px;
    font-weight: 700;
    text-align: right;
    margin-bottom: 30px;
  }

  h1 {
    width: 90%;
    font-size: 60px;
    font-weight: 700;
    font-style: italic;
  }

  .rating {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid white;
  }

  h3 {
    text-align: right;
    margin-bottom: 15px;
  }

  p {
    text-indent: 1em;
    text-align: justify;
    line-height: 1.5em;
    font-size: 14px;
    margin-bottom: 20px;
  }

  ul {
    display: flex;

    li {
      margin-right: 10px;
      background-color: rgba(255, 255, 255, 0.2);
      padding: 4px 8px;
      font-size: 14px;
    }
  }
`;

const Cast = styled(MovieDetailInfo)`
  display: flex;
  ul {
    margin-left: auto;
    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      background-color: inherit;
      width: 100px;
      height: 100px;
      margin: 0;

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-bottom: 10px;
      }
    }
  }
`;

/* React Component */
function MovieDetail({
  id,
  coverImg,
  title,
  description,
  year,
  genres,
  castes,
  rating,
  runtime,
}) {
  return (
    <MovieDetailBlock>
      <img className="bgImg" src={coverImg}></img>
      <MovieDetailInfo>
        <h2>{year}</h2>
        <h1>{title}</h1>
        <h3 className="rating">{rating}</h3>
        <h3>{runtime} min</h3>
        <p>{description}</p>
        {genres !== null ? (
          <ul>
            {genres.map((genre) => (
              <li>{genre}</li>
            ))}
          </ul>
        ) : null}
      </MovieDetailInfo>
      <Cast>
        {castes !== undefined ? (
          <ul>
            {castes.map((cast) => {
              return (
                <li>
                  <img src={cast.url_small_image} />
                  <span>{cast.name}</span>
                </li>
              );
            })}
          </ul>
        ) : null}
      </Cast>
    </MovieDetailBlock>
  );
}

export default MovieDetail;

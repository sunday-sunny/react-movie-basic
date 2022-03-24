import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styled from "styled-components";
import { Link } from "react-router-dom";

/* Styled-Component */
const Loader = styled.h1`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
`;

const Movies = styled.div`
  width: 1250px;
  margin: 0 auto;
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-items: center;

  a {
    all: unset;
    cursor: pointer;
  }
`;

const PageTitle = styled.div`
  color: white;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  margin-top: 50px;
`;

/* React Component */
function Rate() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  /* API fetch : Get Movie List */
  const getMovie = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=rating"
      )
    ).json();

    // Set movie list and loading state
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader>Wait a minutes please, Getting Movies</Loader>
      ) : (
        <div>
          <PageTitle>High Rate Movie List</PageTitle>
          <Movies>
            {movies.map((movie) => (
              <Link to={`/movie/${movie.id}`}>
                <Movie
                  key={movie.id}
                  id={movie.id}
                  bgImg={movie.background_image}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  year={movie.year}
                  genres={movie.genres}
                />
              </Link>
            ))}
          </Movies>
        </div>
      )}
    </div>
  );
}

export default Rate;

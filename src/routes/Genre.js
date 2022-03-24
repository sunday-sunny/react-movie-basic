import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

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
  opacity: 0.5;
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

const Title = styled.div`
  color: white;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  margin-top: 120px;
`;

/* React Component */
function Rate() {
  const { genre } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  /* API fetch : Get Movie List */
  const api =
    "https://yts.mx/api/v2/list_movies.json?sort_by=like_count&genre=";
  const getMovie = async () => {
    const json = await (await fetch(api + genre)).json();

    // Set movie list and loading state
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, [genre]);

  return (
    <div>
      {loading ? (
        <Loader>Wait a minutes please, Getting Movies</Loader>
      ) : (
        <div>
          <Title>{genre.toUpperCase()} Movie List</Title>
          <Movies>
            {movies.map((movie) => (
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <MovieCard
                  id={movie.id}
                  bgImg={movie.background_image}
                  coverImg={movie.medium_cover_image}
                  title={movie.title_english}
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

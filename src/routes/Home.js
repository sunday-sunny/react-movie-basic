import Slide from "../components/Slide";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDownload, faStar } from "@fortawesome/free-solid-svg-icons";

/* Styled component */
const HomeBlock = styled.div`
  width: 1400px;
  margin: 120px auto;
`;

const Title = styled.h1`
  color: white;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  margin-left: 125px;
  margin-bottom: 20px;

  .icon {
    font-size: 32px;
    margin-right: 15px;
    margin-bottom: 5px;
  }
`;

/* React Component */
function Home() {
  /* API List */
  const api = "https://yts.mx/api/v2/list_movies.json?sort_by=";
  const apiSort = {
    "Most Like": "like_count",
    "Most Download": "download_count",
    "High Rate": "rating",
  };
  const apiSortArr = Object.keys(apiSort);

  return (
    <div>
      {apiSortArr.map((title, index) => {
        return (
          <HomeBlock>
            <Title>
              <FontAwesomeIcon
                icon={index === 0 ? faHeart : index === 1 ? faDownload : faStar}
                className="icon"
              />
              {title}
            </Title>
            <Slide api={api + apiSort[title]} />
          </HomeBlock>
        );
      })}
    </div>
  );
}

export default Home;

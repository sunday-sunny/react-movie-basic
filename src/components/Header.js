import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 0px 20px;
    background-color: black;
    color: white;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    /* position: fixed; */
    /* top: 0; */
    h1 {
      margin-left: 10px;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        color: lightcoral;
      }
    }
    a {
      all: unset;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: lightcoral;
      }
    }
  `;

  const Nav = styled.nav`
    ul {
      display: flex;
    }

    li {
      margin-left: 10px;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        color: lightcoral;
      }
    }
  `;

  return (
    <Header>
      <h1>
        <Link to="/">HOME</Link>
      </h1>
      <Nav>
        <ul>
          <li>
            <Link to="/rate">HIGH RATE</Link>
          </li>
          <li>You Like</li>
          <li>GitHub</li>
        </ul>
      </Nav>
    </Header>
  );
}

export default Header;

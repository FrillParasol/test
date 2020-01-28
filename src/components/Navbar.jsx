import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: gray;
  }
  .navLogo {
    background-color: skyblue;
    &:hover {
      background-color: aqua;
    }
  }
  ul {
    li {
      float: left;
      list-style-type: none;
      padding: 1ch;
    }
  }
`;

const Navbar = () => {
  return (
    <>
      <Header>
        <div className="navbar">
          <div className="navLogo">Logo</div>
          <nav>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/project">project</Link>
              </li>
              <li>
                <Link to="/Contect ">contect</Link>
              </li>
            </ul>
          </nav>
          <div>login</div>
        </div>
      </Header>
      <body></body>
    </>
  );
};

export default Navbar;

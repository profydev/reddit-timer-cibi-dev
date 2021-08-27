import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../assets/Logo.svg';

const StyledHeader = styled.header`
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    padding: 0px 80px;

    ul {
        display: flex;
        list-style: none;

        li {
            margin-left: 25px;
            
            a {
                font-family: Montserrat;
                font-size: 16px;
                color: black;
                text-decoration: none;
            }
        }
    }
`;

const Header = () => (
  <StyledHeader>
    <div>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
    </div>
    <ul>
      <li>
        <Link to="/search/javascript">Search</Link>
      </li>
      <li>
        <Link to="/#how-it-works">How it works</Link>
      </li>
      <li>
        <Link to="/#about">About</Link>
      </li>
    </ul>
  </StyledHeader>
);

export default Header;

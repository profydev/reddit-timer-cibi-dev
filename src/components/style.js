import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 80px;
`;

export const StyledNav = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }
`;

export const StyledNavLink = styled(Link)`
  font-family: Montserrat;
  font-size: 16px;
  color: black;
  text-decoration: none;
  margin-left: 25px;
`;

export const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: Montserrat;
  
  a {
    text-decoration: none;
    color: black;
  }
`;

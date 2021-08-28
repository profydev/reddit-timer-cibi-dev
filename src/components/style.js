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
  text-decoration: none;
  margin-left: 25px;
  color: #636363;
`;

export const StyledButton = styled.button`
  border: none;
  outline: none;
  background: #FDB755;
  height: 36px;
  width: 220px;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  text-align: center;
  font-family: Montserrat;
  margin: 45px 0;
  cursor: pointer;
`;

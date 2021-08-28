import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader, StyledNav, StyledNavLink } from './style';

import Logo from '../assets/Logo.svg';

const Header = () => (
  <StyledHeader>
    <div>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
    </div>
    <StyledNav>
      <StyledNavLink to="/search/javascript">Search</StyledNavLink>
      <StyledNavLink to="/#how-it-works">How it works</StyledNavLink>
      <StyledNavLink to="/#about">About</StyledNavLink>
    </StyledNav>
  </StyledHeader>
);

export default Header;

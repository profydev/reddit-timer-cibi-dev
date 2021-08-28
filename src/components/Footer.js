import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from '../assets/FooterLogo.svg';
import { StyledFooter } from './style';

function Footer() {
  return (
    <StyledFooter>
      <div>
        <a href="https://profy.dev/employers">profy.dev</a>
      </div>
      <div>
        <img src={FooterLogo} alt="Footer Logo" />
      </div>
      <div>
        <Link to="/terms">Terms & Privacy</Link>
      </div>
    </StyledFooter>
  );
}

export default Footer;

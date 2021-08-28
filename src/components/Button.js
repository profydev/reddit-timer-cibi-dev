import React from 'react';
import PropTypes from 'prop-type';
import { StyledButton } from './style';

const Button = ({ text, onClick }) => (
  <StyledButton onClick={onClick}>
    {text.toUpperCase()}
  </StyledButton>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: 'Button',
  // eslint-disable-next-line no-console
  onClick: () => { console.log('You pressed a button'); },
};

export default Button;

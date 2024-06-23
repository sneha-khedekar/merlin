import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, text }) => {
  return (
    <button className={`btn ${color} text-white py-2 px-4 rounded-0`}>
      {text}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;

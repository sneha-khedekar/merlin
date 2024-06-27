import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, project }) => {
  return (
    <button className={`btn explore-btn ${color} text-white rounded-0`}>
      <span className="font-light">
        {" "}
        <b>{text}</b>&nbsp;
        {project}
      </span>
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;

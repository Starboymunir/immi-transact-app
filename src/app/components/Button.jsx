import PropTypes from "prop-types";
import React from "react";
import "../globals.css";
import "./styles/buttons.css";
import "./styles/hero-section.css";

const Button = ({ property1, className, text, imgSrc, imgAlt, imgClassName, type }) => {
  return (
    <button className={`button ${property1 || ""} ${className || ""}`} type={type}>
      {imgSrc && imgAlt && <img className={`button-icon ${imgClassName || ""}`} src={imgSrc} alt={imgAlt} />}
      <div className="text">{text}</div>
    </button>
  );
};

Button.propTypes = {
  property1: PropTypes.oneOf([
    "white-primary-hover",
    "secondary",
    "primary-hover",
    "primary",
    "secondary-hover",
    "link",
  ]),
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imgClassName: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

export default Button;

"use client";
import PropTypes from "prop-types";
import React, { useState } from "react";

const PropertyFormWrapper = ({ className, property1, text, onChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
    onChange(value);
  };

  return (
    <div className={`property-form-wrapper ${property1} ${className}`}>
      <input
        type="text"
        placeholder={text}
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
};

PropertyFormWrapper.propTypes = {
  className: PropTypes.string,
  property1: PropTypes.string,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PropertyFormWrapper;


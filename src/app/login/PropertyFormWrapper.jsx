"use client";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ value, onChange ,placeholder}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="password-input">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div onClick={handleTogglePassword}>
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </div>
    </div>
  );
};

const PropertyFormWrapper = ({ className, property1, text, onChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
    onChange(value);
  };



  return (
    <div className={`property-form-wrapper ${property1} ${className}`}>
      {property1 === "password" ? (
        <PasswordInput value={inputValue} onChange={handleInputChange} placeholder={text} />

      ) : (
        <input
          type="text"
          placeholder={text}
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      )}
    </div>
  );
};

PasswordInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

PropertyFormWrapper.propTypes = {
  className: PropTypes.string,
  property1: PropTypes.string,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PropertyFormWrapper;

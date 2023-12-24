// Popup.js

import React from 'react';
import './style.css';

const Popup = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  return <div className="popup">{children}</div>;
};

export default Popup;

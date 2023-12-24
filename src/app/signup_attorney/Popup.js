// Popup.js

import React from 'react';

const Popup = ({ children }) => {
  return (
    <div className="popup">
      <div className="popup-content">{children}</div>
    </div>
  );
};

export default Popup;

import React from 'react';
import './Toggle.css'

const Toggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button className="toggle-button" onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default Toggle;



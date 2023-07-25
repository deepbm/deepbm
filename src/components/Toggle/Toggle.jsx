import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import './Toggle.css';
import { useDarkMode } from '../../contexts/DarkMode';

export default function Toggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className='toggle'>
      <BsMoon />
      <BsSun />
      <div
        onClick={toggleDarkMode}
        className='toggle__btn'
        style={darkMode ? { left: '2px' } : { right: '2px' }}
      ></div>
    </div>
  );
}

import React from 'react';
import { PiMoonStarsFill, PiSunDimFill } from 'react-icons/pi';
import './Toggle.css';
import { useDarkMode } from '../../contexts/DarkMode';

export default function Toggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className='toggle'
      style={darkMode ? { background: '#444444' } : { background: '#fac217' }}
    >
      <PiSunDimFill />
      <div></div>
      <PiMoonStarsFill />
      <div
        onClick={toggleDarkMode}
        className='toggle__btn'
        style={darkMode ? { left: '7px' } : { right: '7px' }}
      ></div>
    </div>
  );
}

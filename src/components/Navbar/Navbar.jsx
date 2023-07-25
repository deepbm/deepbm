import React from 'react';
import './Navbar.css';
import Toggle from '../Toggle/Toggle';

export default function Navbar() {
  return (
    <header className='navbar'>
      <div className='navbar__left'>
        <h1 className='navbar__name'>Huiyeon</h1>
        <Toggle />
      </div>
      <div className='navbar__right'>
        <div className='navbar__menus'>
          <ul>
            <li>Home</li>
            <li>Tech Stack</li>
            <li>Experience</li>
            <li>Projects</li>
          </ul>
        </div>
        <button className='button navbar__btn__contact'>Contact</button>
      </div>
    </header>
  );
}

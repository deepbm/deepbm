import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__left'>
        <h1 className='navbar__name'>Huiyeon</h1>
        <span>toggle</span>
      </div>
      <div className='navbar__right'>
        <div className='navbar__menus'>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
          </ul>
        </div>
        <button className='button navbar__btn__contact'>Contact me</button>
      </div>
    </div>
  );
}

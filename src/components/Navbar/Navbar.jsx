import React from 'react';
import { Link } from 'react-scroll';
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
            <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
              <li>Home</li>
            </Link>
            <Link spy={true} to='TechStack' smooth={true}>
              <li>Tech Stack</li>
            </Link>
            <Link spy={true} to='Experience' smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to='Project' smooth={true}>
              <li>Project</li>
            </Link>
          </ul>
        </div>
        <button className='button navbar__btn__contact'>Contact</button>
      </div>
    </header>
  );
}

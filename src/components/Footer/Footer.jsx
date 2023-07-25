import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { SiVelog } from 'react-icons/si';
import './Footer.css';
import Wave from '../../img/wave.png';

export default function Footer() {
  return (
    <footer className='footer'>
      <img src={Wave} alt='' style={{ width: '100%' }} />
      <div className='footer__content'>
        <span>deepbm27@gmail.com</span>
        <div className='footer__icons'>
          <BsGithub className='icon__github' />
          <SiVelog className='icon__velog' />
        </div>
      </div>
    </footer>
  );
}

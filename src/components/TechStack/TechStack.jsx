import React from 'react';
import './TechStack.css';
import glasses from '../../img/glasses.png';
import Card from '../Card/Card';
import { useDarkMode } from '../../contexts/DarkMode';

export default function TechStack() {
  const { darkMode } = useDarkMode();

  return (
    <section className='tech-stack'>
      <div className='awesome'>
        <h2 style={{ color: darkMode ? 'white' : '' }}>Tech Stack</h2>
      </div>

      <div className='cards'>
        <Card img={glasses} heading='HTML' detail='100%' />
        <Card img={glasses} heading='CSS' detail='100%' />
        <Card img={glasses} heading='JavaScript' detail='90%' />
        <Card img={glasses} heading='TypeScript' detail='50%' />
        <Card img={glasses} heading='React' detail='50%' />
      </div>

      {/* blur div */}
      <div className='blur blur-stack1' style={{ background: '#edd0ff' }}></div>
      <div className='blur blur-stack2' style={{ background: '#c1f5ff' }}></div>
    </section>
  );
}

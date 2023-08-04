import React from 'react';
import './TechStack.css';
import stack100 from '../../img/stack_100.png';
import stack70 from '../../img/stack_70.png';
import stack50 from '../../img/stack_50.png';
import Card from '../Card/Card';
import { useDarkMode } from '../../contexts/DarkMode';

export default function TechStack() {
  const { darkMode } = useDarkMode();

  return (
    <section className='tech-stack' id='TechStack'>
      <div className='awesome'>
        <h2 style={{ color: darkMode ? 'white' : '' }}>Tech Stack</h2>
      </div>

      <div className='cards'>
        <Card img={stack100} heading='HTML' detail='100%' />
        <Card img={stack100} heading='CSS' detail='100%' />
        <Card img={stack70} heading='JavaScript' detail='90%' />
        <Card img={stack70} heading='React' detail='70%' />
        <Card img={stack50} heading='TypeScript' detail='50%' />
      </div>

      {/* blur div */}
      <div className='blur blur-stack1' style={{ background: '#edd0ff' }}></div>
      <div className='blur blur-stack2' style={{ background: '#c1f5ff' }}></div>
    </section>
  );
}

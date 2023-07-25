import React from 'react';
import './TechStack.css';
import glasses from '../../img/glasses.png';
import Card from '../Card/Card';

export default function TechStack() {
  return (
    <section className='tech-stack'>
      <div className='awesome'>
        <h2>Tech Stack</h2>
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

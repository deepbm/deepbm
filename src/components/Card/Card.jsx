import React from 'react';
import './Card.css';

export default function Card({ img, heading, detail }) {
  return (
    <div className='card'>
      <img src={img} alt='' />
      <h3>{heading}</h3>
      <p>{detail}</p>
    </div>
  );
}

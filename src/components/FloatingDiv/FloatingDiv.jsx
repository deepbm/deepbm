import React from 'react';
import './FloatingDiv.css';

export default function FloatingDiv({ img, txt1, txt2 }) {
  return (
    <div className='floating-div'>
      <img src={img} alt='' />
      <span>
        {txt1}
        <br />
        {txt2}
      </span>
    </div>
  );
}

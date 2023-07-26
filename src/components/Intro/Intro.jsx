import React from 'react';
import { motion } from 'framer-motion';
import './Intro.css';
import github from '../../img/github.png';
import instagram from '../../img/instagram.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { useDarkMode } from '../../contexts/DarkMode';

const transition = { duration: 2, type: 'spring' };

export default function Intro() {
  const { darkMode } = useDarkMode();

  return (
    <section className='intro'>
      <div className='intro__left'>
        <div className='intro__name'>
          <span style={{ color: darkMode ? 'white' : '' }}>Hi! I am</span>
          <span>희연</span>
          <span>
            프론트엔드 개발자가 되고 싶습니다. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Excepturi quae quaerat tenetur numquam hic! Quas at debitis sed ut omnis voluptate
            dolorem, maiores earum quam autem labore qui perspiciatis ullam.
          </span>
        </div>
        <button className='button intro__btn__hire'>Hire me</button>
        <div className='intro__icons'>
          <a href='https://github.com/deepbm'>
            <img src={github} alt='github' />
          </a>
          <a href='https://github.com/deepbm'>
            <img src={instagram} alt='instagram' />
          </a>
        </div>
      </div>

      <div className='intro__right'>
        <img src={vector1} alt='' />
        <img src={vector2} alt='' />
        <img src={boy} alt='' />
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src={glassesimoji}
          alt=''
        />
        <motion.div
          initial={{ top: '-4%', left: '74%' }}
          whileInView={{ left: '68%' }}
          transition={transition}
          style={{ top: '-4%', left: '68%' }}
        >
          <FloatingDiv img={crown} txt1='Web' txt2='Developer' />
        </motion.div>
        <motion.div
          initial={{ top: '18rem', left: '9rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          style={{ top: '18rem', left: '0rem' }}
        >
          <FloatingDiv img={thumbup} txt1='Front' txt2='Developer' />
        </motion.div>

        {/* blur div */}
        <div className='blur blur-intro1' style={{ background: '#edd0ff' }}></div>
        <div className='blur blur-intro2' style={{ background: '#c1f5ff' }}></div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import './Intro.css';
import github from '../../img/github.png';
import velog from '../../img/velog.png';
import introImg from '../../img/intro.png';
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
          <span style={{ color: darkMode ? 'white' : 'black' }}>
            현재에 머물지 않고 끊임없이 생각하며, 성장을 꿈꾸는
            <br />웹 개발자 양희연의 포트폴리오 사이트입니다.
          </span>
        </div>
        <div className='intro__icons'>
          <a href='https://github.com/deepbm' target='blank'>
            <img src={github} alt='github' />
          </a>
          <a href='https://velog.io/@deepbm' target='blank'>
            <img src={velog} alt='velog' />
          </a>
        </div>
        <div className='blur blur-intro3' style={{ background: '#edd0ff' }}></div>
      </div>

      <div className='intro__right'>
        <img src={introImg} alt='' />
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
          initial={{ top: '20rem', left: '7rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          style={{ top: '18rem', left: '0rem' }}
        >
          <FloatingDiv img={thumbup} txt1='Front' txt2='Developer' />
        </motion.div>

        {/* blur div */}
        <div className='blur blur-intro1' style={{ background: '#fbf7a7' }}></div>
        <div className='blur blur-intro2' style={{ background: '#c1f5ff' }}></div>
      </div>
    </section>
  );
}

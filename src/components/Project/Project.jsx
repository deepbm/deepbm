import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Project.css';
import todolistScreen from '../../img/screen_todolist.png';
import youtubeScreen from '../../img/screen_youtube.png';
import shoesScreen from '../../img/screen_shoes.png';
import foodScreen from '../../img/screen_food.png';
import { useDarkMode } from '../../contexts/DarkMode';

export default function Project() {
  const { darkMode } = useDarkMode();

  return (
    <section className='project' id='Project'>
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper slidesPerView={3.2} spaceBetween={40} grabCursor={true} className='project-slider'>
        <SwiperSlide>
          <a href='https://starlit-cajeta-699011.netlify.app' target='blank'>
            <img src={todolistScreen} alt='' />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://helpful-raindrop-507277.netlify.app' target='blank'>
            <img src={youtubeScreen} alt='' />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://dapper-lily-9ae214.netlify.app' target='blank'>
            <img src={shoesScreen} alt='' />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://mellifluous-manatee-f1415a.netlify.app' target='blank'>
            <img src={foodScreen} alt='' />
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

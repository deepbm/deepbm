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
          <img src={todolistScreen} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={youtubeScreen} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={shoesScreen} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={foodScreen} alt='' />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Project.css';
import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import MusicApp from '../../img/musicapp.png';
import HOC from '../../img/hoc.png';

export default function Project() {
  return (
    <section className='project'>
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper slidesPerView={3} spaceBetween={30} grabCursor={true} className='project-slider'>
        <SwiperSlide>
          <img src={Sidebar} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt='' />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

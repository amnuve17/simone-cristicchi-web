import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Biglietti from './Biglietti';

export default function VerticalSlider() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <Biglietti /> </SwiperSlide>
        <SwiperSlide> <Biglietti /> </SwiperSlide>
        <SwiperSlide> <Biglietti /> </SwiperSlide>
        <SwiperSlide> <Biglietti /> </SwiperSlide>
        <SwiperSlide> <Biglietti /> </SwiperSlide>
      </Swiper>
    </>
  );
}
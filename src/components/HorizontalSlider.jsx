import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { concerti } from '@/data/concerti'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Biglietti from './Biglietti';
import BigliettiMobile from './BigliettiMobile';

export default function HorizontalSlider() {
  return (
    <>
      <Swiper navigation={false} modules={[Navigation]} className="mySwiper">
        {concerti.map((item, index) => (
          <SwiperSlide key={index}> 
            <div className='hidden lg:block'><Biglietti 
              title={item.nome}
              descrizione={item.descrizione}
              prezzo={item.prezzo}
              data={item.data}
              img={item.immagine}
            /></div> 
            <div className='lg:hidden'><BigliettiMobile 
              title={item.nome}
              descrizione={item.descrizione}
              prezzo={item.prezzo}
              data={item.data}
              img={item.immagine}
            /></div> 
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}


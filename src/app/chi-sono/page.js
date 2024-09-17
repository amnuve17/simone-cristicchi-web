'use client'
import { Image } from '@nextui-org/react'
import React from 'react'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

export default function Page() {
  return (
    <>
        <div className='w-full h-[700px] bg-about md:block hidden'></div>
        <div className='w-full h-[500px] bg-about-mobile md:hidden'></div>
        {/* chi sono md */}
        <div className='w-full dark:bg-[#1e1e1e]'>
          <div className='gap-8 max-w-6xl mx-auto w-full pt-8 hidden lg:flex lg:px-5 xl:px-0'>
            <div className='w-full bg-chi-sono1'>
            </div>
            <div className='w-full flex flex-col justify-between'>
              <div className='mb-4'>
                <p className='text-6xl font-ko'>LA MIA STORIA</p>
                <p>Simone Cristicchi è più di un semplice cantautore italiano: è un misto di sarcasmo, genio musicale e un pizzico di follia. Nato nel cuore di Roma, ha conquistato il palcoscenico e i cuori degli italiani con la sua musica e il suo spirito spensierato..</p>
              </div>
              <div className='w-full bg-chi-sono2 h-[250px]'>
              </div>
            </div>
            <div className='w-full flex flex-col justify-between'>
              <div className='w-full bg-chi-sono3 h-[250px]'>
              </div>
              <div>
                <p className='mb-3'>Da quando ha vinto il Festival di Sanremo nel 2007 con "Ti regalerò una rosa", ha portato avanti una carriera brillante e imprevedibile, spaziando dalla musica al teatro.</p>
                <p>Con le sue canzoni, Simone trasforma la tristezza in risate e i problemi in melodie. Ma dietro l'ironia c'è un'anima profonda, desiderosa di connettersi con il pubblico e di lasciare un'impronta nella musica italiana.</p>
              </div>
            </div>
            <div className='w-full bg-chi-sono4'>
            </div>
          </div>
        
        {/* chi sono mobile */}
        <div className='flex flex-col w-full p-5 lg:hidden'>
          <div className='mb-4'>
            <p className='text-6xl font-ko'>LA MIA STORIA</p>
            <p>Simone Cristicchi è più di un semplice cantautore italiano: è un misto di sarcasmo, genio musicale e un pizzico di follia. Nato nel cuore di Roma, ha conquistato il palcoscenico e i cuori degli italiani con la sua musica e il suo spirito spensierato..</p>
          </div>
          <div className='flex gap-4'>
            <div className='w-1/2 flex flex-col gap-4'>
              <div className='bg-chi-sono1 h-[350px] md:h-[500px] w-full'></div>
              <div className='bg-chi-sono2 h-[200px] md:h-[350px] w-full'></div>
            </div>
            <div className='w-1/2 flex flex-col gap-4'>
              <div className='bg-chi-sono3 h-[200px] md:h-[350px] w-full'></div>
              <div className='bg-chi-sono4 h-[350px] md:h-[500px] w-full'></div>
            </div>
          </div>
          <div className='mt-3'>
            <p className='mb-3'>Da quando ha vinto il Festival di Sanremo nel 2007 con "Ti regalerò una rosa", ha portato avanti una carriera brillante e imprevedibile, spaziando dalla musica al teatro.</p>
            <p>Con le sue canzoni, Simone trasforma la tristezza in risate e i problemi in melodie. Ma dietro l'ironia c'è un'anima profonda, desiderosa di connettersi con il pubblico e di lasciare un'impronta nella musica italiana.</p>
          </div>
          {/* discografia */}
        </div>
        <div className='flex flex-col md:flex-row max-w-6xl px-5 md:px-10 xl:px-0 gap-4 md:gap-0 mx-auto justify-between md:mt-16 mt-4 items-center'>
          <div className='flex flex-col gap-3 md:w-[40%]'>
            <p className='text-6xl font-ko'>DEBUTTO</p>
            <p>Da "Fabbricante di canzoni", il suo album di debutto, fino a "Abbi cura di me", ogni brano è un capitolo di vita raccontato con melodie avvincenti e testi che toccano il cuore.</p>
            <p>Con una combinazione di ironia, profondità e empatia, Cristicchi trasforma le esperienze quotidiane in poesia musicale, invitandoti a scoprire e riscoprire le sfumature della vita attraverso la sua musica.</p>
          </div>
          <div className='flex flex-col gap-3 md:w-[40%] items-end'>
            <Image 
              src='/assets/album1.jpg'
              width={400}
              height={400}
              alt='discografia'
              className='rounded-none'
            />
          </div>
        </div>
        {/* galleria artistica */}
        <div className='w-full flex flex-col justify-between mt-16 bg-secondary dark:bg-[#1e1e1e]'>
          <div className='bg-pellicola w-full h-[150px]'></div>
          <div className='max-w-6xl mx-auto flex w-full justify-between py-8 flex-col lg:flex-row'>
            <div className='lg:w-1/4 w-full flex flex-col justify-center'>
              <p className='text-6xl font-ko text-center mb-2'>GALLERIA ARTISTICA</p>
            </div>
            <div className='lg:w-3/4 flex flex-wrap gap-14 justify-center px-4'>
              <Image 
                src='/assets/dtal-album.jpg'
                width={150}
                height={150}
                alt='discografia'
                className='rounded-none w-full'
              />
              <Image 
                src='/assets/dapdc-album.jpg'
                width={150}
                height={150}
                alt='discografia'
                className='rounded-none w-full'
              />
              <Image 
                src='/assets/o-album.jpg'
                width={150}
                height={150}
                alt='discografia'
                className='rounded-none w-full'
              />
              <Image 
                src='/assets/fdc-album.jpg'
                width={150}
                height={150}
                alt='discografia'
                className='rounded-none w-full'
              />
              <Image 
                src='/assets/acdm-album.jpg'
                width={150}
                height={150}
                alt='discografia'
                className='rounded-none w-full'
              />
            </div>
          </div>
          <div className='bg-pellicola w-full h-[150px]'></div>
        </div>
        <div className='w-full h-[400px] bg-quote flex justify-center text-center items-center '>
          <p className='lg:w-1/2 text-2xl text-white'>“Non sono mai stato capace di fingere con il pubblico, sono sempre stato trasparente e forse è questa la chiave per definirsi un “artista”: il fatto che non ci sia qualcosa di costruito.”</p>
        </div>
      </div>
    </>
  )
}
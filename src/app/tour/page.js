'use client'
import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { concerti } from '@/data/concerti'
import Biglietti from '@/components/Biglietti';
import { useCart } from "@/providers/CartProvider";
import BigliettiMobile from '@/components/BigliettiMobile';

const Page = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const { cart, setCart } = useCart();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchFilter(searchInput); 
  };

  const AddToCart = (nome, prezzo, quantity) => {
    const newCart = [...cart];
    newCart.push({nome, prezzo, quantity});
    setCart(newCart);
    console.log(cart);
  }

  const filteredTicket = concerti
    .filter(item => {
      // Filter by search input
      return searchFilter === '' || item.nome.toLowerCase().includes(searchFilter.toLowerCase());
    });

  return (
    <>
      <div className='w-full relative h-[700px] bg-tour pt-5 border-b-1 border-black dark:bg-[#1e1e1e]'>
        <div className='absolute lg:w-1/4 w-1/2 lg:h-[700px] right-0 lg:left-0 lg:top-[-3%] bottom-0'>
          <img className='w-full mt-5 h-[400px] lg:h-full' src="/assets/concerti-left.png" alt="" />
        </div>
        <div className='lg:w-2/4 w-full mx-auto relative z-10'>
          <div className='w-full h-full flex flex-col justify-center items-center relative'>
            <h1 className='text-primary text-7xl font-bold font-ko'>Tour 2024</h1>
            <p className='text-black text-center mt-3 text-2xl'>"Accendete i vostri motori, ragazzi e ragazze! Il tour di Simone Cristicchi sta per iniziare, e vi assicuro che sarà più divertente di un viaggio in metropolitana durante l'ora di punta!"</p>
            <img className='w-100 mt-5 absolute lg:relative top-[140%]' src="/assets/ceoncerti-center.png" alt="" />
          </div>
        </div>
        <div className='absolute lg:w-1/4 lg:right-[0]  lg:top-0 bottom-[-1%] lg:bottom-full w-1/2 lg:h-[713px] overflow-hidden z-[4]'>
          <img className='h-[430px] w-full lg:h-full' src="/assets/concerti-right.png" alt="" />
        </div>
      </div>
      <div className='w-full lg:pt-32 pt-16 pb-12 md:pt-36 border-b-1 dark:border-white border-black dark:bg-[#1e1e1e]'>
          <div className='mx-auto w-2/4'>
            <form id="search-bar" className="flex w-full mb-2" onSubmit={handleSubmit}>
              <div className='w-full flex relative'>
                  <input 
                    type="text" 
                    className='w-full px-4 bg border-1 text-black placeholder:text-black border-black rounded-full py-1 focus:outline-none dark:border-white dark:bg-[#1e1e1e] dark:text-white placeholder:dark:text-white'
                    placeholder='Cerca'  
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}   
                  />
                  <button className='px-2 py-2 border-1 rounded-full border-black bg-black text-bg absolute right-0 dark:text-black dark:border-white dark:bg-[#FCF3E2]'>
                    <Image 
                      src='/assets/search.svg'
                      alt='search'
                      width={15}
                      height={15}
                    />
                  </button>
              </div>
            </form>
          </div>
      </div>
      <div className='w-full dark:bg-[#1e1e1e] lg:py-16 py-8'>
        <div className='max-w-6xl w-full mx-auto flex-col gap-24 hidden lg:flex'>
          {filteredTicket.map((item, index) => (
            <div key={index}>
              <Biglietti 
                title={item.nome}
                descrizione={item.descrizione}
                prezzo={item.prezzo}
                data={item.data}
                img={item.immagine}
              />
            </div>
          ))}
        </div>
        <div className='max-w-6xl w-full mx-auto flex flex-col gap-6 lg:hidden'>
          {filteredTicket.map((item, index) => (
            <div key={index}>
              <BigliettiMobile 
                title={item.nome}
                descrizione={item.descrizione}
                prezzo={item.prezzo}
                data={item.data}
                img={item.immagine}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Page

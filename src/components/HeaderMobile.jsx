'use client'
import { Badge } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import {navList} from "../data/menu";
import ThemeSwitch from './ThemeSwitch'
import { useCart } from "@/providers/CartProvider";

export default function HeaderMobile() {
    const [isOpen, setIsOpen] = useState(false);
    const { cart, setCart } = useCart();
    const [check, setCheck] = useState(false);
    let cartCounter = cart.reduce((acc, item) => acc + item.quantity, 0);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setCheck(!check); 
        console.log(isOpen);
    };

  return (
    <header className='relative z-[999]'>
      <div className='w-full px-4 py-4 lg:hidden flex justify-between items-center dark:bg-[#1e1e1e] dark:border-white'>
        {/* logo */}
        <Link href={'/'}>
          <Image
              src='/assets/site-logo.svg'
              alt='logo'
              width={70}
              height={50}
              className='dark:hidden'
              onClick={() => { setIsOpen(false); setCheck(false); }}
          />
          <Image
              src='/assets/logo-dark.png'
              alt='logo'
              width={70}
              height={50}
              className='hidden dark:block'
              onClick={() => { setIsOpen(false); setCheck(false); }}
          />
        </Link>
        <div className='flex gap-6 items-center'>
            <ThemeSwitch />
            {/* cart */}
            <div className='dark:hidden'>
              <Badge content={cartCounter}color='primary' className='dark:hidden'>
                  <Link href={'/checkout'} className='dark:hidden'>
                    <Image
                      src='/assets/bag-icon.svg'
                      alt='logo'
                      width={25}
                      height={25}
                      className='dark:text-white dark:grayscale'
                    />
                  </Link>
                </Badge>
            </div>

              <div className='hidden dark:block'>
                <Badge content={cartCounter} color='primary'>
                  <Link href={'/checkout'}>
                    <Image
                      src='/assets/bag-dark.svg'
                      alt='logo'
                      width={25}
                      height={25}
                      className='dark:text-white dark:grayscale'
                    />
                  </Link>
                </Badge>
              </div>
            {/* hamburger menu */}
            <label>
                <input type="checkbox" id="check" checked={check} onClick={toggleMenu}/> 
                <span className='dark:text-white dark:bg-white'></span>
                <span className='dark:text-white dark:bg-white'></span>
                <span className='dark:text-white dark:bg-white'></span>
            </label>
        </div>
      </div>

      {/* nav menu open */}
      <div className={`dark:bg-[#1e1e1e] dark:border-white absolute flex flex-col w-full h-[100vh] bg-amber-50 px-4 justify-start z-[999] ${isOpen ? 'block' : 'hidden'}`}>
        <ul className='text-center flex flex-col justify-center gap-8 pt-12'>
            {navList.map((item, index) => (
                <li key={index} className='border-b border-black dark:border-white text-3xl px-2' onClick={toggleMenu}>
                    <Link href={item.link}>
                        <input type="checkbox" id="check"  onClick={toggleMenu}/> 
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
        <div className='flex gap-3 justify-center mt-8'>
          <Link href={'https://facebook.com'} target='_blank' className='dark:hidden'>
            <Image
              src='/assets/icons8-facebook.svg'
              alt='logo'
              width={25}
              height={25}
              
            />
          </Link>
          <Link href={'https://instagram.com'} target='_blank' className='dark:hidden'>
            <Image
              src='../assets/icons8-instagram.svg'
              alt='logo'
              width={25}
              height={25}
              
            />
          </Link>
          <Link href={'https://tiktok.com'} target='_blank' className='dark:hidden'>
            <Image
              src='/assets/icons8-tiktok.svg'
              alt='logo'
              width={25}
              height={25}
              
            />
          </Link>
          {/* dark mode icons */}
          <Link href={'https://facebook.com'} target='_blank' className='hidden dark:block'>
            <Image
              src='/assets/facebook-dark.svg'
              alt='logo'
              width={25}
              height={25}
              className='hidden dark:block'
            />
          </Link>
          <Link href={'https://instagram.com'} target='_blank' className='hidden dark:block'>
            <Image
              src='../assets/instagram-dark.svg'
              alt='logo'
              width={25}
              height={25}
              className='hidden dark:block'
            />
          </Link>
          <Link href={'https://tiktok.com'} target='_blank' className='hidden dark:block'>
            <Image
              src='/assets/tiktok-dark.svg'
              alt='logo'
              width={25}
              height={25}
              className='hidden dark:block'
            />
          </Link>
        </div>
      </div>
    </header>
  )
}

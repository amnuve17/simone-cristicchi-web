'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Badge, Avatar} from "@nextui-org/react";
import {navList} from "../data/menu";
import ThemeSwitch from './ThemeSwitch';
import { useCart } from "@/providers/CartProvider";

export default function Header() {
  
  const { cart, setCart } = useCart();
  let cartCounter = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <header className='hidden lg:block lg:px-4 xl:px-0 dark:bg-[#1e1e1e]'>
    {/* start pre header bar */}
      <div className='w-full border-b-1 border-black dark:border-white'>
        <div className='max-w-6xl w-full mx-auto py-8'>
          <div className='flex justify-between items-center'>
            {/* social */}
            <div className='flex gap-3'>
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
            {/* logo */}
              <Link href={'/'}>
                <Image
                  src='/assets/site-logo.svg'
                  alt='logo'
                  width={70}
                  height={50}
                  className='dark:hidden'
                />
                <Image
                  src='/assets/logo-dark.png'
                  alt='logo'
                  width={70}
                  height={50}
                  className='hidden dark:block'
                />
              </Link>
            {/* icons */}
            <div className='flex items-center gap-4'>
              <Badge content={cartCounter} color='primary' className='dark:hidden'>
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
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>

      {/* nav-bar */}
      <div className='full border-b-1 border-black dark:border-white relative'>
        <div className='max-w-6xl w-full py-8 mx-auto'>
          <ul className='flex gap-12 text-center justify-center'>
            {navList.map((item, index) => (
              <li className='border-b-1 border-b-transparent hover:border-b-black dark:hover:border-b-white' key={index}>
                <Link href={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

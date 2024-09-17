'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import {navList} from "../data/menu";

export default function FooterMobile() {

    const [isChecked, setIsChecked] = useState(false);
    const [state, setState] = useState(false);
    const [emailInput, setEmailInput] = useState('');

    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

    const handleCheckbox = () => {
        setIsChecked(!isChecked);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); /* blocca il comportamento di default dell'evento: form => blocca la ricarica della pagina */
        setState(true);
        if (isChecked && emailRegex.test(emailInput) && emailInput)
        {
          event.currentTarget.removeEventListener('submit', handleSubmit);
          event.currentTarget.submit();
        }
        return true;
    };

  return (
    <footer className='lg:hidden'>
      <div className='py-6 border-b-1 border-b-black dark:border-b-white dark:bg-[#1e1e1e] dark:border-white'>
          <div className='flex flex-col px-4 justify-center items-center gap-6'>
            <div className='flex flex-col gap-4 justify-center w-fit items-center'>
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
            <div className='flex flex-col justify-between '>
                <p className='title text-center'>ISCRIVITI ALLA NEWSLETTER</p>
                <div className='flex relative'>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-1'>
                        <div className='w-full flex'>
                            <input 
                                type="text" 
                                className='w-full px-4 bg border-1 text-black placeholder:text-black border-black rounded-full py-2 focus:outline-none dark:border-white dark:bg-[#1e1e1e] dark:text-white placeholder:dark:text-white'
                                placeholder='email'  
                                value={emailInput}
                                onChange={(e) => setEmailInput(e.target.value)}        
                            />
                            <button className='px-8 py-2 border-1 rounded-full border-black bg-black text-bg absolute right-0 dark:text-black dark:border-white dark:bg-white'>INVIA</button>
                        </div>
                        {
                            state && !emailInput ? <p className='text-[#f00] text-xs basis-full px-4'>Il campo è vuoto</p> : 
                            state && !emailRegex.test(emailInput) ? <p className='text-[#f00] text-xs px-4'>Email non valida</p> : 
                            null
                        }
                        <div className='flex ps-4 gap-2 items-center'>
                            <input 
                                className='!block' 
                                type="checkbox" 
                                id='privacyCheckbox'
                                name='privacyCheckbox' 
                                checked={isChecked}
                                onChange={handleCheckbox}
                            />
                            <label className='flex w-fit' htmlFor="privacyCheckbox"><p className='flex gap-1'>Accetto tutti i <a href='#' className='underline'>termini e condizioni</a></p></label>
                        </div>
                        {
                            state && !isChecked ? <p className='text-[#f00] text-xs ps-4'>Devi accettare i termini e le condizioni sulla privacy</p> : null
                        }
                    </form>
                </div>
            </div>
            <div>
                {/* footer menu */}
                <p className='title text-center'>MENU</p>
                <ul className='flex flex-col text-center'>
                    {navList.map((item, index) => (
                    <li className='border-b-1 border-b-transparent hover:border-b-black' key={index}>
                        <Link href={item.link}>
                            {item.title != "CONTATTI" ? item.title : null}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
            <div>
                {/* footer contacts */}
                <p className='title text-center'>CONTATTI</p>
                <ul className='flex flex-col text-center'>
                    <li>+39 154 154156</li>
                    <li>simonecristicchi_official@gmail.it</li>
                    <li>Via Tirino, 99 Pescara (Pe)</li>       
                </ul>
            </div>
          </div>
      </div>
      <div className='w-full py-6 dark:border-b-white dark:bg-[#1e1e1e] dark:border-white'>
            <div className='max-w-6xl mx-auto flex flex-col items-center gap-4'>
                {/* <ul className='flex gap-2'>
                    <li>SimoneCristicchi ©{new Date().getFullYear()}, Tutti i diritti riservati</li>
                    <li>|</li>
                    <li><a className='hover:underline' href='#'>Cookies</a> & <a className='hover:underline' href='#'>Privacy Policy</a></li>
                </ul> */}
                <p className='text-center'>SimoneCristicchi ©{new Date().getFullYear()}, Tutti i diritti riservati | <a className='hover:underline' href='#'>Cookies</a> & <a className='hover:underline' href='#'>Privacy Policy</a></p>
                <Link href={'#'}>
                    <Image
                        src='/assets/sitemap-icon.svg'
                        alt='sitemap'
                        width={25}
                        height={25}
                        className='dark:hidden'
                    />
                    <Image
                        src='/assets/site-map-dark.png'
                        alt='sitemap'
                        width={25}
                        height={25}
                        className='hidden dark:block'
                    />
                </Link>
            </div>
        </div>
    </footer>
  )
}

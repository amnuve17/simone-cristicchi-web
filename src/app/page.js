'use client'
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';
import React from 'react';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import HorizontalSlider from '@/components/HorizontalSlider';
import Link from 'next/link';
import { merch } from '@/data/merch';

export default function Home() {
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    console.log(resolvedTheme); // 'light' or 'dark'
  }, [resolvedTheme]);
  return (
    <>
      <div className='w-full mt-[-50px] md:mt-0 mx-auto h-[600px] dark:bg-[#1e1e1e] relative overflow-hidden hero-bg'>
          <p className='absolute md:text-8xl top-[15%] left-[5%] md:left-[32%] text-primary hero-text z-50 text-6xl'>SIMONE</p>
          <p className='absolute md:text-8xl bottom-[15%] right-[5%] md:right-0 md:left-[28%] lg:left-[52%] text-primary hero-text z-50 text-6xl'>CRISTICCHI</p>
      </div>
      <div className='flex flex-col justify-end dark:bg-[#1e1e1e] mt-[-100px] lg:mt-0 px-4 relative z-10'>
        <p className='pt-4 w-50 lg:w-1/2 mx-auto text-center bottom-0 text-2xl dark:text-[#FCF3E2]'>Benvenuti nella mia isola, dove la felicità non è un traguardo, ma un percorso fatto di piccole gioie e tanta ironia. Scoprite di più su di me, sempre che non preferiate cantare come Biagio...</p>
      </div>
      <div className='w-full mx-auto flex justify-center lg:pt-10 pb-12 dark:bg-[#1e1e1e]'>
        <Button link='/chi-sono'>
          CHI SONO
        </Button>
      </div>
      {/* fine hero */}
      <div className='dark:bg-[#1e1e1e]'>
        <div className='w-full h-[750px] dark:bg-[#1e1e1e] lg:px-10 pb-10 bg-section2 pt-15 hidden lg:block'>
          <div className='flex h-full'>
            <div className='w-1/2 flex justify-between h-full gap-10'>
              <div className='w-1/2'>
                <Link href={`/merch/${encodeURIComponent(merch[6].slug)}`} className='w-[100%] my-5 border-1 border-black p-5 dark:border-white flex flex-col justify-between'>
                  <div className='w-full mx-auto'>
                      <Image 
                          src={merch[6].immagine}
                          alt={merch[6].nome}
                          width={300}
                          height={300}
                      />
                  </div>
                  <div className='w-full text-center'>
                      <h3>{merch[6].nome}</h3>
                      <p className='text-2xl font-extrabold'>{merch[6].prezzo} €</p>
                  </div>
                </Link>
              </div>
              <div className='w-1/2 flex flex-col justify-end'>
                <Link href={`/merch/${encodeURIComponent(merch[0].slug)}`} className='w-[100%] my-5 border-1 border-black p-5 dark:border-white flex flex-col justify-between'>
                  <div className='w-full mx-auto'>
                      <Image 
                          src={merch[0].immagine}
                          alt={merch[0].nome}
                          width={300}
                          height={300}
                      />
                  </div>
                  <div className='w-full text-center'>
                      <h3>{merch[0].nome}</h3>
                      <p className='text-2xl font-extrabold'>{merch[0].prezzo} €</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className='w-1/2 flex flex-col justify-center items-center'>
              <div className='flex flex-col gap-4 items-start w-[70%] '>
                <h2 className='w-fit text-6xl font-ko text-primary'>SVELA IL TUO LATO CRISTICCHI</h2>
                <p className='w-fit text-xl mb-2'>Che aspettate, amici? Fatevi avanti e portate a casa un pezzo del mio genio.
                  Chi sa, forse un giorno sarà un'opera d'arte. Oppure no, ma almeno avrete una bella maglietta!</p>
                <Button link='/merch'>SCOPRI DI PIÙ</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blocco 2 mobile */}
      <div className='w-full bg-[#E0D3B9] dark:bg-[#1e1e1e] bg-section2 lg:hidden'>
        <div className='w-full dark:bg-[#1e1e1e] py-5 px-5'>
          <div className='flex flex-col gap-4   mb-10 items-center'>
            <h2 className='w-fit text-6xl font-ko text-primary text-center lg:text-start'>SVELA IL TUO LATO CRISTICCHI</h2>
            <p className='w-fit text-xl mb-2 text-center lg:text-start'>Che aspettate, amici? Fatevi avanti e portate a casa un pezzo del mio genio.
              Chi sa, forse un giorno sarà un'opera d'arte. Oppure no, ma almeno avrete una bella maglietta!</p>
            <Button link='/chi-sono'>SCOPRI DI PIÙ</Button>
          </div>
        </div>
        <div className='flex dark:bg-[#1e1e1e] gap-2 flex-wrap justify-center'>
          <div className='w-full dark:bg-[#1e1e1e] px-5'>
            <Link href={`/merch/${encodeURIComponent(merch[0].slug)}`} className='lg:w-[30%] w-[100%] my-5 border-1 border-black p-5 dark:border-white flex flex-col justify-between'>
                <div className='w-full mx-auto'>
                    <Image 
                        src={merch[0].immagine}
                        alt={merch[0].nome}
                        width={300}
                        height={300}
                    />
                </div>
                <div className='w-full text-center'>
                    <h3>{merch[0].nome}</h3>
                    <p className='text-2xl font-extrabold'>{merch[0].prezzo} €</p>
                </div>
            </Link>
            <Link href={`/merch/${encodeURIComponent(merch[6].slug)}`} className='lg:w-[30%] w-[100%] my-5 border-1 border-black p-5 dark:border-white flex flex-col justify-between'>
                <div className='w-full mx-auto'>
                    <Image 
                        src={merch[6].immagine}
                        alt={merch[6].nome}
                        width={300}
                        height={300}
                    />
                </div>
                <div className='w-full text-center'>
                    <h3>{merch[6].nome}</h3>
                    <p className='text-2xl font-extrabold'>{merch[6].prezzo} €</p>
                </div>
            </Link>
            <Link href={`/merch/${encodeURIComponent(merch[15].slug)}`} className='lg:w-[30%] w-[100%] my-5 border-1 border-black p-5 dark:border-white flex flex-col justify-between'>
                <div className='w-full mx-auto'>
                    <Image 
                        src={merch[15].immagine}
                        alt={merch[15].nome}
                        width={300}
                        height={300}
                    />
                </div>
                <div className='w-full text-center'>
                    <h3>{merch[15].nome}</h3>
                    <p className='text-2xl font-extrabold'>{merch[15].prezzo} €</p>
                </div>
            </Link>
          </div>
        </div>
      </div>
      {/* blocco 3 */}
      <div className='w-full lg:px-10 px-4 lg:py-32 py-8 bg-section3 flex flex-col lg:flex-row'>
        <div className='lg:w-1/3 w-full'>
          <div className='text-bg font-ko lg:pt-10 py-4'>
            <h3 className='text-5xl px-4 text-center lg:text-start'>TOUR</h3>
            <h3 className='text-7xl px-4 text-center lg:text-start'>2024</h3>
            <Button link='/tour'>VIENI E TI REGALO UNA ROSA</Button>
          </div>
        </div>
        <div className='lg:w-2/3 w-full flex justify-center items-center'>
          <HorizontalSlider />
        </div>
      </div>
    </>
  );
}

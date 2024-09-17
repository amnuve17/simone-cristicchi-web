'use client'
import Image from 'next/image';
import { merch } from "@/data/merch";
import { useState } from 'react';
import Link from "next/link";

export default function Page() {
    const [searchInput, setSearchInput] = useState('');
    const [searchFilter, setSearchFilter] = useState('');

    const [isAlbumChecked, setIsAlbumChecked] = useState(false);
    const [isTazzeChecked, setIsTazzeChecked] = useState(false);
    const [isTshirtChecked, setIsTshirtChecked] = useState(false);
    const [isPosterChecked, setIsPosterChecked] = useState(false);
    const [isCuscinoChecked, setIsCuscinoChecked] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchFilter(searchInput); 
    };
    
    const handleAlbumCheckbox = () => {
        setIsAlbumChecked(!isAlbumChecked);
    };
    const handleTazzeCheckbox = () => {
        setIsTazzeChecked(!isTazzeChecked);
    };
    const handleTshirtCheckbox = () => {
        setIsTshirtChecked(!isTshirtChecked);
    };
    const handlePosterChecked = () => {
        setIsPosterChecked(!isPosterChecked);
    };
    const handleCuscinoChecked = () => {
        setIsCuscinoChecked(!isCuscinoChecked);
    };

    const filteredMerch = merch
    .filter(item => {
      // Filter by categories: Album, Tazze, T-Shirt, Poster, Cuscino
      if (isAlbumChecked && item.tipo === 'album') return true;
      if (isTazzeChecked && item.tipo === 'tazza') return true;
      if (isTshirtChecked && item.tipo === 't-shirt') return true;
      if (isPosterChecked && item.tipo === 'poster') return true;
      if (isCuscinoChecked && item.tipo === 'cuscino') return true;
  
      // If none of the category checkboxes are checked, return all items
      return !isAlbumChecked && !isTazzeChecked && !isTshirtChecked && !isPosterChecked && !isCuscinoChecked;
    })
    .filter(item => {
      // Filter by search input
      return searchFilter === '' || item.nome.toLowerCase().includes(searchFilter.toLowerCase());
    });

    return(
       <>
            <div className="max-w-full w-full mx-auto py-8 dark:bg-[#1e1e1e]">
                <div className="max-w-6xl w-full mx-auto py-8">
                    <div className="max-w-4xl w-full mx-auto mb-5">
                        <h1 className="text-center text-2xl">“Non è vero che c'è il paradiso, il purgatorio, e nemmeno l'inferno, sembra più una scuola serale, tipo un corso di aggiornamento dove si impara ad amare la vita in ogni singolo momento.”</h1>
                    </div>
                </div>
                <div className="w-full border-b-1 border-black dark:border-white"></div>
                <div className="max-w-6xl w-full mx-auto">
                    <div className="w-full flex flex-col lg:flex-row">
                        <div className="lg:w-1/5 w-full p-4 border-1 border-black border-t-0 h-fit">
                            <form id="search-bar" className="flex w-fit mb-2" onSubmit={handleSubmit}>
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
                            <h2>CATEGORIE</h2>
                            <ul className='flex lg:flex-col w-full gap-2 flex-wrap'>
                                <li className='flex'>    
                                    <div className='flex ps-4 gap-2 items-center'>
                                        <input 
                                            className='!block dark:bg-[#1e1e1e]' 
                                            type="checkbox" 
                                            id='album'
                                            name='album' 
                                            checked={isAlbumChecked}
                                            onChange={handleAlbumCheckbox}
                                        />
                                        <label className='flex w-fit' htmlFor="album">Album</label>
                                    </div>
                                </li>
                                <li className='flex'>    
                                    <div className='flex ps-4 gap-2 items-center'>
                                        <input 
                                            className='!block dark:bg-[#1e1e1e]' 
                                            type="checkbox" 
                                            id='tazze'
                                            name='tazze' 
                                            checked={isTazzeChecked}
                                            onChange={handleTazzeCheckbox}
                                        />
                                        <label className='flex w-fit' htmlFor="tazze">Tazze</label>
                                    </div>
                                </li>
                                <li className='flex'>    
                                    <div className='flex ps-4 gap-2 items-center'>
                                        <input 
                                            className='!block dark:bg-[#1e1e1e]' 
                                            type="checkbox" 
                                            id='tshirt'
                                            name='tshirt' 
                                            checked={isTshirtChecked}
                                            onChange={handleTshirtCheckbox}
                                        />
                                        <label className='flex w-fit' htmlFor="tshirt">T-Shirt</label>
                                    </div>
                                </li>
                                <li className='flex'>    
                                    <div className='flex ps-4 gap-2 items-center'>
                                        <input 
                                            className='!block dark:bg-[#1e1e1e]' 
                                            type="checkbox" 
                                            id='cuscino'
                                            name='cuscino' 
                                            checked={isCuscinoChecked}
                                            onChange={handleCuscinoChecked}
                                        />
                                        <label className='flex w-fit' htmlFor="cuscino">Cuscino</label>
                                    </div>
                                </li>
                                <li className='flex mb-2'>    
                                    <div className='flex ps-4 gap-2 items-center'>
                                        <input 
                                            className='!block dark:bg-[#1e1e1e]' 
                                            type="checkbox" 
                                            id='poster'
                                            name='poster' 
                                            checked={isPosterChecked}
                                            onChange={handlePosterChecked}
                                        />
                                        <label className='flex w-fit' htmlFor="poster">Poster</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='lg:w-4/5 w-full flex flex-wrap lg:gap-4 justify-between gap-1 px-5'>
                            {filteredMerch.map((item, index) => (
                                <Link href={`/merch/${encodeURIComponent(item.slug)}`} className='lg:w-[30%] w-[45%] my-5 border-1 border-black p-5 dark:border-white flex flex-col justify-between' key={index}>
                                    <div className='w-full mx-auto'>
                                        <Image 
                                            src={item.immagine}
                                            alt={item.nome}
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                    <div className='w-full text-center'>
                                        <h3>{item.nome}</h3>
                                        <p className='text-2xl font-extrabold'>{item.prezzo} €</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
       </>
    )
}

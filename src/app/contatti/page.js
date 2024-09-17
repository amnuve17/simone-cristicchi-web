'use client'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react';

export default function Page() {
  const [isChecked, setIsChecked] = useState(false);
  const [isFormChecked, setIsFormChecked] = useState(false);
  const [state, setState] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [messageInput, setMessageInput] = useState('');

  const nameRegex = /^[a-zA-Z ]*$/;
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

  const handleFormCheckbox = () => {
      setIsFormChecked(!isFormChecked);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); /* blocca il comportamento di default dell'evento: form => blocca la ricarica della pagina */
    setState(true);
    if (isFormChecked && nameRegex.test(nameInput) && nameInput && emailRegex.test(emailInput) && emailInput && messageInput)
    {
      event.currentTarget.removeEventListener('submit', handleSubmit);
      event.currentTarget.submit();
    }
  };

  return (
    <div className='dark:bg-[#1e1e1e] bg-secondary h-[100vh] flex flex-col justify-center'>
      <div className='max-w-6xl mx-auto border-1 dark:border-white border-black relative mt-20 lg:mt-0 lg:h-[80%] h-full px-3 flex flex-col lg:flex-row justify-center gap-8'>
        <div className='absolute left-0 top-0'>
          <Image 
            src='/assets/contact-img.png'
            alt='contatti'
            width={300}
            height={300}
          />
        </div>
        {/* end image */}
        <div className='flex flex-col gap-2 w-full lg:w-1/3 justify-center mt-32 lg:mt-0'>
          <p className='text-6xl font-ko text-primary'>CONTATTACI</p>
          <p>Parlami, scrivimi, mandami un piccione viaggiatore... insomma, facciamo qualsiasi cosa tranne perderci di vista!</p>
        </div>
        <div className='flex flex-col gap-2 w-full lg:w-1/3 justify-center'>
          <form onSubmit={handleSubmit} className='w-full flex flex-col gap-2'>
          <div className='w-full'>
            <input 
                type="text" 
                className='w-full px-4 bg border-1 text-black placeholder:text-black border-black rounded-full py-2 focus:outline-none dark:border-white dark:bg-[#1e1e1e] dark:text-white placeholder:dark:text-white'
                placeholder='email'  
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}        
            />
          </div>
          {
              state && !emailInput ? <p className='text-[#f00] text-xs basis-full px-4'>Il campo è vuoto</p> : 
              state && !emailRegex.test(emailInput) ? <p className='text-[#f00] text-xs px-4'>Email non valida</p> : 
              null
          }
          <div className='w-full'>
            <input 
                type="text" 
                className='w-full px-4 bg border-1 text-black placeholder:text-black border-black rounded-full py-2 focus:outline-none dark:border-white dark:bg-[#1e1e1e] dark:text-white placeholder:dark:text-white'
                placeholder='nome'
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}        
            />
          </div>
          {
              state && !nameInput ? <p className='text-[#f00] text-xs basis-full px-4'>Il campo è vuoto</p> : 
              state && !nameRegex.test(nameInput) ? <p className='text-[#f00] text-xs px-4'>Nome non valido</p> : 
              null
          }
          <div className='w-full'>
            <textarea 
                type="text" 
                className='w-full px-4 bg border-1 text-black placeholder:text-black border-black rounded-[20px] resize-none h-[150px] py-2 focus:outline-none dark:border-white dark:bg-[#1e1e1e] dark:text-white placeholder:dark:text-white'
                placeholder='messaggio'  
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}        
            />
          </div>
          {
              state && !messageInput ? <p className='text-[#f00] text-xs basis-full px-4'>Il campo è vuoto</p> :  
              null
          }
            <div className='flex ps-4 gap-2 items-center'>
              <input 
                  className='!block dark:bg-[#1e1e1e]' 
                  type="checkbox" 
                  id='formCheckbox'
                  name='formCheckbox' 
                  checked={isFormChecked}
                  onChange={handleFormCheckbox}
              />
              <label className='flex w-fit' htmlFor="formCheckbox"><p className='flex gap-1'>Accetto tutti i <a href='#' className='underline'>termini e condizioni</a></p></label>
              </div>
              {
                state && !isFormChecked ? <p className='text-[#f00] text-xs ps-4'>Devi accettare i termini e le condizioni sulla privacy</p> : null
              }
              <button 
                type='submit' 
                className='px-8 py-2 border-1 rounded-full border-black bg-black text-bg dark:text-black dark:border-white dark:bg-[#FCF3E2] hover:dark:bg-[#1e1e1e] hover:dark:text-[#FCF3E2]'>
                INVIA
              </button>
          </form>
        </div>
      </div>
    </div>
  )
}

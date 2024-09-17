import React from 'react'
import { useState } from 'react';

const Button = ({children, link, fun}) => {
  return (
    <div className='lg:pe-4 py-4'>
      <a className='cta text-2xl cursor-pointer dark:bg-[#1e1e1e] dark:text-white dark:border-white text-center flex justify-center' href={link} onClick={fun}>
          {children} 
      </a>
    </div>
  )
}

export default Button

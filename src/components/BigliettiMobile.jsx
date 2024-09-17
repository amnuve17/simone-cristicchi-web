import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Biglietti = ({title, descrizione, prezzo, data, img}) => {
  return (
    <div className='w-full'>
      <div className='border-2 dark:border-white border-black w-full'>
        <div className='bg dark:bg-[#1e1e1e] flex flex-col'>
          <div className='p-4'>
              <p className='font-ko text-4xl'>{title}</p>
              <p>{descrizione}
              </p>
          </div>
          <div className='bg-primary px-4 py-12'>
              <div className='flex items-center justify-between'>
                  <div className='flex flex-col gap-4'>
                      <div className='flex flex-col'>
                          <p className='text-6xl text-bg font-ko'>{prezzo}€</p>
                          <p className='text-lg text-bg'>{data}</p>
                      </div>
                      <Button>Acquista</Button>
                  </div>
                  <Image 
                      src='/assets/barcode.png'
                      alt='barcode'
                      width={60}
                      height={200}
                  />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Biglietti
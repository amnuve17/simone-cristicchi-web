import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { useCart } from "@/providers/CartProvider";

const Biglietti = ({title, descrizione, prezzo, data, img}) => {

  const { cart, setCart } = useCart();

  const AddToCart = (nome, prezzo, quantity) => {
    const newCart = [...cart];
    newCart.push({nome, prezzo, quantity});
    setCart(newCart);
    console.log(cart);
  }

  return (
    <div className='border-2 border-black dark:border-white'>
      <div className='bg flex gap-2 justify-between dark:bg-[#1e1e1e]'>
        <div className='relative w-full p-10 flex items-center'>
          <p className='font-ko text-6xl'>{title}</p>
          {/* <Image
            src='/assets/pizza-img.png'
            alt='immagine biglietto'
            width={200}
            height={200}
            className='absolute bottom-[-40%] left-0 z-10'
          /> */}
        </div>
        <div className='w-full flex items-center p-4'>
          <p>{descrizione}</p>
        </div>
        <div className='w-full bg-primary flex flex-col justify-center p-4'>
          <div className='flex px-4 items-center justify-between'>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col'>
                <p className='text-6xl text-bg font-ko'>{prezzo}€</p>
                <p className='text-lg text-bg'>{data}</p>
              </div>
              <Button
                link={'#'}
                fun={() => { AddToCart(title, prezzo, 1);}}
              >
              Acquista
              </Button>
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
  )
}

export default Biglietti

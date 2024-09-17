'use client'
import React from 'react'
import { merch } from '@/data/merch'  // Import the merch data
import { useState } from 'react';
import ShirtSizeSelector from '@/components/ShirtSizeSelector';
import { useCart } from "@/providers/CartProvider";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import Image from 'next/image';
import Button from '@/components/Button';

const MerchPage = ({ params }) => {
  const { slug } = params;
  const { cart, setCart } = useCart();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  // Find the merchandise item based on the slug
  const item = merch.find(m => m.slug === slug);

  const AddToCart = (nome, prezzo, quantity) => {
    const newCart = [...cart];
    newCart.push({nome, prezzo, quantity});
    setCart(newCart);
    console.log(cart);
  }

  // If no item is found, return a 404-like message
  if (!item) {
    return <h1>404 - Item not found</h1>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [quantity, setQuantity] = useState(1);

  // Render the item details
  return (
    <>
      <div className='w-full max-w-6xl mx-auto flex flex-col lg:flex-row dark:bg-[#1e1e1e] dark:border-white'>
        <div className='lg:w-1/2 w-full lg:border-1 border-b-1 border-t-0 border-black dark:border-white border-e-0 p-4'>
            <Image
              src={item.immagine}
              alt={item.nome}
              width={500}
              height={500}
              className='w-full h-full'
            />
        </div>
        <div className='lg:w-1/2 w-full border-1 border-t-0 p-5 border-black'>
            <div className='flex flex-col gap-4'>
                <h1>{item.nome}</h1>
                <p>{item.prezzo}</p>
                {item.tipo === 't-shirt' ? <ShirtSizeSelector /> : null}
                <div className='w-3/4'>{item.descrizione}</div>
                <div className="flex">
                    <div className="size-[30px] border-1 text-center hover:cursor-pointer dark:border-white border-black cursor-pointer" onClick={()=>setQuantity(quantity > 1 ? quantity-1 : quantity)}>-</div>
                    <div className="size-[30px] text-center hover:cursor-pointer border-t-1 border-b-1 dark:border-white border-black">{quantity}</div>
                    <div className="size-[30px] border-1 text-center hover:cursor-pointer dark:border-white border-black cursor-pointer" onClick={()=>setQuantity(quantity+1)}>+</div>
                </div>
                <Button 
                  className="bg-MainBlue text-MainWhite dark:bg-MainWhite dark:text-MainBlue hover:border-1 hover:text-MainBlue hover:bg-MainWhite border-MainBlue w-fit px-10 py-2 rounded-full dark:hover:text-MainWhite dark:hover:bg-MainBlue dark:hover:border-MainWhite hover:cursor-pointer"
                  link={'#'}
                  fun={() => { AddToCart(item.nome, item.prezzo, quantity); onOpen(); }}
                >
                  Aggiungi al Carrello
                </Button>
            </div>
        </div>
      </div>
    </>
  );
}

export default MerchPage;


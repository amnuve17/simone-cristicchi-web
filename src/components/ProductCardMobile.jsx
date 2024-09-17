import Image from 'next/image'
import React from 'react'
import Button from '@/components/Button'

const ProductCardMobile = ({cover, title, price}) => {
  return (
    <div className='flex flex-col border-3 border-black dark:border-[#FCF3E2] p-3 bg-[#FCF3E2] dark:bg-[#1e1e1e]'>
      <div className='flex justify-end'>
        <Image
            src='/assets/info-icon.svg'
            width={30}
            height={30}
            alt='info icon'
        />
      </div>
      <div className='px-[30px] flex flex-col justify-center items-center pb-[30px]'>
        <Image
            src='/assets/placeholder.jpg'
            width={100}
            height={100}
            alt='product cover'
            className='h-[100px] mb-2'
        />
        <h3 className='text-lg uppercase font-bold'>{title}Nome</h3>
        <p className='text-2xl mb-2'>{price} 50</p>
        <Button>ACQUISTA</Button>
      </div>
    </div>
  )
}

export default ProductCardMobile
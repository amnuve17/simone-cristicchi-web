'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import CartProvider from '@/providers/CartProvider';


export function Providers({children}) {
  return (
    <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
      <CartProvider>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </CartProvider>
    </ThemeProvider>
  )
}
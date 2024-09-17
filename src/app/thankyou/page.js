'use client'
import React from 'react'
import Button from "@/components/Button"

const Thankyou = () => {

    /* const { theme, setTheme } = useTheme(); */

    return (
        <>
            <div className='w-full dark:bg-[#1e1e1e] px-4'>
                <div id="thanks" className="max-w-[600px] mx-auto flex flex-col gap-4 lg:pt-[150px] py-[100px] justify-center items-center">
                    <div className="text-center flex flex-col gap-9 b-9 font-jomolhari">
                        <h1 className="text-6xl">Grazie!</h1>
                        <p className="text-4xl">Acquisto Completato</p>
                    </div>
                    <div>
                        <Button link="/">Torna alla Home</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Thankyou

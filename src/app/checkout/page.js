'use client'
import React, { useState } from 'react';
import { useCart } from "@/providers/CartProvider";
import { Checkbox } from "@nextui-org/react";
import Image from 'next/image';
import Button from '@/components/Button';

const Checkout = () => {
    const { cart, setCart } = useCart();

    const [state, setState] = useState(false);
    const [nomeInput, setNomeInput] = useState('');
    const [cognomeInput, setCognomeInput] = useState('');
    const [addressInput, setAddressInput] = useState('');
    const [capInput, setCapInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [provinceInput, setProvinceInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [cardExpiration, setCardExpiration] = useState('');
    const [cvv, setCvv] = useState('');

    const nomeRegex = /^[a-zA-Z]+$/;
    const addressRegex = /^[A-Za-z]+\s[A-Za-z]+\,\s\d+$/;
    const capRegex = /^[0-9]{5}$/;
    const cityRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    const phoneRegex = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/;
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    const creditCardRegex = /^(?:4\d{3}(\s*|-)?\d{4}(\s*|-)?\d{4}(\s*|-)?\d{4}|5[1-5]\d{2}(\s*|-)?\d{4}(\s*|-)?\d{4}(\s*|-)?\d{4}|(?:4026|417500|4508|4844|491(3|7))\d{2}(\s*|-)?\d{4}(\s*|-)?\d{4}(\s*|-)?\d{4}|3(?:0[0-5]|[68]\d\d)\d{4}(\s*|-)?\d{4}(\s*|-)?\d{4}(\s*|-)?\d{4})$/;
    const expirationRegex = /^(0[1-9]|1[0-2])\s*\/\s*\d{2}$/;
    const cvvRegex = /[0-9]{3}/;

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); // Cambia lo stato del checkbox quando viene selezionato/deselezionato
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setState(true);
        if (nomeRegex.test(nomeInput) && cognomeInput && addressRegex.test(addressInput) && capRegex.test(capInput) && cityRegex.test(cityInput) && phoneRegex.test(phoneInput) && emailRegex.test(emailInput) && creditCardRegex.test(cardNumber) && expirationRegex.test(cardExpiration) && cvvRegex.test(cvv) && isChecked) {
          location.assign("/thankyou");
        }
    };

    return (
        <>
            <div className='w-full dark:bg-[#1e1e1e]'>
                <div className='max-w-6xl mx-auto w-100'>
                    {/* insert on submit when thankyou is completed */}
                    <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                        <div className='flex flex-col lg:flex-row mt-4'>
                            <div className='lg:w-1/2 w-full px-6 order-2 lg:order-1'>
                                    <div id="titolo_form_1">
                                        <h1 className='text-4xl font-bold mb-4'>Informazioni sul cliente</h1>
                                    </div>
                                    <div className='flex flex-col gap-3 mb-2'>
                                        <div id='nome'>
                                            <input
                                                type="text"
                                                placeholder='Nome'
                                                value={nomeInput}
                                                onChange={(event) => setNomeInput(event.target.value)}
                                                className='w-full px-4 py-2 border-2 dark:bg-white border-black focus:outline-none bg-[#FCF3E2] placeholder:text-gray-700'
                                            />
                                            <div id="error-msg">
                                                {
                                                    state && !nomeInput ? <p className='text-[#f00] text-s'>il campo è vuoto</p> :
                                                        state && !nomeRegex.test(nomeInput) ? <p className='text-[#f00] text-s'>Nome non valido</p> :
                                                            state && nomeInput ? <p className='text-[#0f0] text-s'>Nome valido</p> : null
                                                }
                                            </div>
                                        </div>
                                        <div id='cognome'>
                                            <input
                                                type="text"
                                                placeholder='Cognome'
                                                value={cognomeInput}
                                                onChange={(event) => setCognomeInput(event.target.value)}
                                                className='w-full px-4 py-2 border-2 dark:bg-white border-black focus:outline-none bg-[#FCF3E2] placeholder:text-gray-700'
                                            />
                                            <div id="error-msg">
                                                {
                                                    state && !cognomeInput ? <p className='text-[#f00] text-s'>il campo è vuoto</p> :
                                                        state && !nomeRegex.test(cognomeInput) ? <p className='text-[#f00] text-s'>Cognome non valido</p> :
                                                            state && cognomeInput ? <p className='text-[#0f0] text-s'>Cognome valido</p> : null
                                                }
                                            </div>
                                        </div>
                                        <div id='telefono'>
                                            <input
                                                type="text"
                                                placeholder='Telefono'
                                                value={phoneInput}
                                                onChange={(event) => setPhoneInput(event.target.value)}
                                                className='w-full px-4 py-2 border-2 dark:bg-white border-black focus:outline-none bg-[#FCF3E2] placeholder:text-gray-700'
                                            />
                                            <div id="error-msg">
                                                {
                                                    state && !phoneInput ? <p className='text-[#f00] text-s'>il campo è vuoto</p> :
                                                        state && !phoneRegex.test(phoneInput) ? <p className='text-[#f00] text-s'>Numero non valido</p> :
                                                            state && phoneInput ? <p className='text-[#0f0] text-s'>Numero valido</p> : null
                                                }
                                            </div>
                                        </div>
                                        <div id='email'>
                                            <input
                                                type="text"
                                                placeholder='Email'
                                                value={emailInput}
                                                onChange={(event) => setEmailInput(event.target.value)}
                                                className='w-full px-4 py-2 border-2 dark:bg-white border-black focus:outline-none bg-[#FCF3E2] placeholder:text-gray-700'
                                            />
                                            <div id="error-msg">
                                                {
                                                    state && !emailInput ? <p className='text-[#f00] text-s'>il campo è vuoto</p> :
                                                        state && !emailRegex.test(emailInput) ? <p className='text-[#f00] text-s'>Email non valida</p> :
                                                            state && emailInput ? <p className='text-[#0f0] text-s'>Email valida</p> : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div id="titolo_form_2">
                                        <h1 className='text-4xl font-bold mb-4'>Indirizzo di consegna</h1>
                                    </div>
                                    <div className='flex flex-col gap-3 mb-2'>
                                        <div id='citta'>
                                            <input
                                                type="text"
                                                placeholder='Città'
                                                value={cityInput}
                                                onChange={(event) => setCityInput(event.target.value)}
                                                className='w-full px-4 py-2 border-2 dark:bg-white border-black focus:outline-none bg-[#FCF3E2] placeholder:text-gray-700'
                                            />
                                            <div id="error-msg">
                                                {
                                                    state && !cityInput ? <p className='text-[#f00] text-s'>il campo è vuoto</p> :
                                                        state && !cityRegex.test(cityInput) ? <p className='text-[#f00] text-s'>Città non valida</p> :
                                                            state && cityInput ? <p className='text-[#0f0] text-s'>Città valida</p> : null
                                                }
                                            </div>
                                        </div>
                                        <div id='indirizzo'>
                                            <input
                                                type="text"
                                                placeholder='Indirizzo'
                                                value={addressInput}
                                                onChange={(event) => setAddressInput(event.target.value)}
                                                className='w-full px-4 py-2 border-2 dark:bg-white border-black focus:outline-none bg-[#FCF3E2] placeholder:text-gray-700'
                                            />
                                            <div id="error-msg">
                                                {
                                                    state && !addressInput ? <p className='text-[#f00] text-s'>il campo è vuoto</p> :
                                                        state && !addressRegex.test(addressInput) ? <p className='text-[#f00] text-s'>Indirizzo non valido</p> :
                                                            state && addressInput ? <p className='text-[#0f0] text-s'>Indirizzo valido</p> : null
                                                }
                                            </div>
                                        </div>
                                        <div id='codice_postale'>
                                            <input
                                                type="text"
                                                placeholder='Codice Postale'
                                                value={capInput}
                                                onChange={(event) => setCapInput(event.target.value)}
                                                className='w-full px-4 py-2 border-2 dark:bg-white border-black focus:outline-none bg-[#FCF3E2] placeholder:text-gray-700'
                                            />
                                            <div id="error-msg">
                                                {
                                                    state && !capInput ? <p className='text-[#f00] text-s'>il campo è vuoto</p> :
                                                        state && !capRegex.test(capInput) ? <p className='text-[#f00] text-s'>Cap non valido</p> :
                                                            state && capInput ? <p className='text-[#0f0] text-s'>Cap valido</p> : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div id="titolo_form_3">
                                        <h1 className='text-4xl font-bold'>Pagamento</h1>
                                    </div>
                                    <div id="form-voice" className="flex flex-col gap-1">
                                        <div id="form-input" className="flex flex-col gap-4 lg:w-full justify-between">
                                            <div className="flex items-center gap-6">
                                                <div className="w-1/6">
                                                    <Image 
                                                        src="/assets/MasterCard_Logo.png" 
                                                        alt="MasterCard" 
                                                        width={100} 
                                                        height={100}
                                                    />
                                                </div>
                                                <div className="w-1/6">
                                                    <Image 
                                                        src="/assets/Visa.png" 
                                                        alt="MasterCard" 
                                                        width={100} 
                                                        height={100}
                                                    />
                                                </div>
                                                <div className="w-1/6">
                                                    <Image 
                                                        src="/assets/postepayLogo.png" 
                                                        alt="MasterCard" 
                                                        width={100} 
                                                        height={100}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <input
                                                    type="text"
                                                    placeholder="Numero Carta"
                                                    className='w-full px-4 py-2 border-2 dark:bg-white border-black focus:outline-none bg-[#FCF3E2] placeholder:text-gray-700'
                                                    value={cardNumber}
                                                    onChange={(e) => setCardNumber(e.target.value)}
                                                />
                                                {
                                                    state && !cardNumber ? <p className='text-[#f00] text-s'>il campo è vuoto</p> :
                                                        state && !creditCardRegex.test(cardNumber) ? <p className='text-[#f00] text-s'>Numero Carta non valido</p> :
                                                            state && cardNumber ? <p className='text-[#0f0] text-s'>Numero Carta valido</p> : null
                                                }
                                            </div>
                                            <div className="flex gap-4 w-full justify-between">
                                                <div className="flex w-1/2 gap-2">
                                                    <input
                                                        type="text"
                                                        placeholder="Scadenza"
                                                        className='w-full px-4 py-2 border-2 dark:bg-white border-black focus:outline-none bg-[#FCF3E2] placeholder:text-gray-700'
                                                        value={cardExpiration}
                                                        onChange={(e) => setCardExpiration(e.target.value)}
                                                    />
                                                </div>
                                                <div className="flex w-1/2 gap-2">
                                                    <input
                                                        type="text"
                                                        placeholder="CVV"
                                                        className='w-full px-4 py-2 border-2 dark:bg-white border-black focus:outline-none bg-[#FCF3E2] placeholder:text-gray-700'
                                                        value={cvv}
                                                        onChange={(e) => setCvv(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex gap-1 w-full justify-between">
                                                <div className="flex w-1/2 gap-2">
                                                    {
                                                        state && !cardExpiration ? <p className='text-[#f00] text-s'>il campo è vuoto</p> :
                                                            state && !expirationRegex.test(cardExpiration) ? <p className='text-[#f00] text-s'>Scadenza non valida</p> :
                                                                state && cardExpiration ? <p className='text-[#0f0] text-s'>Scadenza valida</p> : null
                                                    }
                                                </div>
                                                <div className="flex w-1/2 gap-2">
                                                    {
                                                        state && !cvv ? <p className='text-[#f00] text-s'>il campo è vuoto</p> :
                                                            state && !cvvRegex.test(cvv) ? <p className='text-[#f00] text-s'>CVV non valido</p> :
                                                                state && cvv ? <p className='text-[#0f0] text-s'>CVV valido</p> : null
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div id="form-voice" className="flex flex-col gap-1">
                                            <div id="form-input" className="flex gap-3 w-100 ">
                                                <input 
                                                    type="checkbox" 
                                                    name="privacy" 
                                                    id="privacy" 
                                                    onChange={handleCheckboxChange}
                                                    value={isChecked}
                                                    className='!block'
                                                />
                                                <label className='!w-fit' htmlFor="privacy">Accetto i termini e le condizioni di privacy</label>
                                            </div>
                                            <div id="error-msg">
                                                {
                                                    state && !isChecked ? <p className='text-[#f00] text-s'>E' obbligatorio accettare i termini e le condizioni</p> : state && <p className='text-[#0f0] text-s'>Condizioni Accettate</p>
                                                }
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className='w-full lg:w-1/2 px-6 order-1 lg:order-2'>
                                <div id="titolo_form_1">
                                    <h1 className='text-4xl font-bold mb-4'>I tuoi acquisti</h1>
                                </div>
                                <div className='flex flex-col gap-3 mb-8'>
                                    <div id='cartResume' className='py-5 border-t-1 border-b-1 dark:border-white border-black'>
                                        <ul id="summary-products" className="flex flex-col gap-5">
                                            {cart.map((product, index) => (
                                                <li key={index} id="product" className="flex justify-between gap-10 items-center">
                                                    <p className="block text-start w-4/6">{product.nome}</p>
                                                    <p className="block w-1/6 text-end">Qnt. {" "+ product.quantity}</p>
                                                    <p className="block w-1/6  text-end">{product.prezzo + " €"}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className='cartTotal mb-2 py-5 border-2 border-black'>
                                    <h1 className='text-4xl font-bold mb-4 px-5'>Totale Carrello</h1>
                                    <div className='flex justify-between border-b-1 dark:border-white border-black p-5'>
                                        <p>Subtotale</p>
                                        <p>{cart.reduce((acc, item) => acc + item.prezzo * item.quantity, 0).toFixed(2)} €</p>
                                    </div>
                                    <div className='flex justify-between border-b-1 dark:border-white border-black p-5'>
                                        <p>Totale (+ IVA)</p>
                                        <p>{cart.reduce((acc, item) => acc + (item.prezzo * item.quantity) + (item.prezzo * item.quantity * 0.24), 0).toFixed(2)} €</p>
                                    </div>
                                    <div className='mt-4'>
                                    <Button 
                                        className="bg-MainBlue text-MainWhite dark:bg-MainWhite dark:text-MainBlue w-fit px-10 py-2 rounded-full mt-2"
                                        fun={handleSubmit}
                                        >
                                        Completa il tuo acquisto
                                    </Button>
                                    </div>
                                </div>                    
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Checkout

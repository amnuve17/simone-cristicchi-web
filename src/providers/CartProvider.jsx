import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext({
    cart: [],
})


export const useCart = () => useContext(CartContext)

const cartCookie = localStorage.getItem('cart');
console.log(cartCookie);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log(cart);
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        const cartString = localStorage.getItem('cart');
        if (cartString) {
            const storedCart = JSON.parse(cartString); // Deserialize the stored cart string to an object
            setCart(storedCart);
        }
    }, []);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
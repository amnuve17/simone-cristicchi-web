import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({
    cart: [],
});

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Questo effetto si esegue solo lato client
    useEffect(() => {
        // Controlla se siamo lato client
        if (typeof window !== "undefined") {
            const cartString = localStorage.getItem('cart');
            if (cartString) {
                const storedCart = JSON.parse(cartString); // Deserialize the stored cart string to an object
                setCart(storedCart);
            }
        }
    }, []); // Esegue solo al montaggio

    // Effettua il salvataggio del carrello nel localStorage quando cambia
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]); // Esegue ogni volta che `cart` cambia

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

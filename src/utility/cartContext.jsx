import React, { createContext, useContext, useState } from 'react';
import { getStoredCart, getStoredWishlist } from './addToDb';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    // const [cartCount, setCartCount] = useState(0);
    // const [wishlistCount, setWishlistCount] = useState(0);

    // useEffect(() => {
    //     const storedCart = getStoredCart();
    //     const storedWishlist = getStoredWishlist();
    //     const removeCart = removeCartStoredData();

    //     setCartCount(storedCart.length);
    //     setCartCount(removeCart.length);
    //     setWishlistCount(storedWishlist.length);
    // }, []);

    const storedCart = getStoredCart();
    const storedWishlist = getStoredWishlist();
    // console.log(storedCart.length);

    const [cartCount, setCartCount] = useState(storedCart.length);
    const [wishlistCount, setWishlistCount] = useState(storedWishlist.length);

    const incrementCart = () => setCartCount(cartCount + 1);
    const incrementWishlist = () => setWishlistCount(wishlistCount + 1);

    return (
        <CartContext.Provider value={{ cartCount, wishlistCount, incrementCart, incrementWishlist }}>
            {children}
        </CartContext.Provider>
    );
};

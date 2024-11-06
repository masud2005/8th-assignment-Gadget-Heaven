import React, { createContext, useContext, useState } from 'react';
import { getStoredCart, getStoredWishlist } from './addToDb';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const storedCart = getStoredCart();
    const storedWishlist = getStoredWishlist();

    const [cartCount, setCartCount] = useState(storedCart.length);
    const [wishlistCount, setWishlistCount] = useState(storedWishlist.length);

    const incrementCart = () => setCartCount(cartCount + 1);
    const incrementWishlist = () => setWishlistCount(wishlistCount + 1);

    return (
        <CartContext.Provider value={{ cartCount, wishlistCount, incrementCart, incrementWishlist, setCartCount }}>
            {children}
        </CartContext.Provider>
    );
};

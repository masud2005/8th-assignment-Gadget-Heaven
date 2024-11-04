import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

    const incrementCart = () => setCartCount(cartCount + 1);
    const incrementWishlist = () => setWishlistCount(wishlistCount + 1);

    return (
        <CartContext.Provider value={{ cartCount, wishlistCount, incrementCart, incrementWishlist }}>
            {children}
        </CartContext.Provider>
    );
};

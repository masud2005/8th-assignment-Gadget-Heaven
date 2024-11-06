import toast from "react-hot-toast";

// Cart
const getStoredCart = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        const storedCartInt = JSON.parse(storedCart);
        return storedCartInt;
    }
    else {
        return [];
    }
}

const addToStoredCart = (product) => {
    const storedPreviousCart = getStoredCart();
    const isExist = storedPreviousCart.find(storedCart => storedCart.product_id === product.product_id);
    if (isExist) {
        return toast.error('Product already exists in Cart');
    }
    else {
        storedPreviousCart.push(product);
        localStorage.setItem('cart', JSON.stringify(storedPreviousCart));
        // toast.success('Successfully added to Cart');
        toast.success('You have successfully added this product to the Cart.');
    }
}


// Wishlist
const getStoredWishlist = () => {
    const storedWishlist = localStorage.getItem('wish-list');
    if (storedWishlist) {
        const storedWishlistInt = JSON.parse(storedWishlist);
        return storedWishlistInt;
    }
    else {
        return [];
    }
}

const addToStoredWishlist = (product) => {
    const storedPreviousWishlist = getStoredWishlist();
    const isExist = storedPreviousWishlist.find(storedWishlist => storedWishlist.product_id === product.product_id);
    if (isExist) {
        toast.error('Product already exists in Wishlist!');
    }
    else {
        storedPreviousWishlist.push(product);
        localStorage.setItem('wish-list', JSON.stringify(storedPreviousWishlist));
        toast.success('You have successfully added this product to the wishlist.');
    }
}


// Stored History
const getStoredHistory = () => {
    const storedHistory = localStorage.getItem('history');
    if (storedHistory) {
        const storedHistoryInt = JSON.parse(storedHistory);
        return storedHistoryInt;
    }
    else {
        return [];
    }
}

const addToStoredHistory = (product) => {
    const storedPreviousHistory = getStoredHistory();
    storedPreviousHistory.push(product);
    localStorage.setItem('history', JSON.stringify(storedPreviousHistory));
}


// Remove all cart list data from local storage
const removeCartStoredData = () => {
    localStorage.setItem('cart', JSON.stringify([]));
    return [];
}

// Remove all order history from local storage 
const removeHistoryStoredData = () => {
    toast.success("Clear All Products in History.")
    localStorage.setItem('history', JSON.stringify([]));
    return [];
}

export { addToStoredCart, getStoredCart, addToStoredWishlist, getStoredWishlist, removeCartStoredData, getStoredHistory, addToStoredHistory, removeHistoryStoredData };
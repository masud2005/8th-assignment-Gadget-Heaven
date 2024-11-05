
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
        return alert('Product already exists in Cart');
    }
    else {
        storedPreviousCart.push(product);
        localStorage.setItem('cart', JSON.stringify(storedPreviousCart));
        alert('Successfully added to Cart');
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
        alert('Product already exists in Wishlist!');
    }
    else {
        storedPreviousWishlist.push(product);
        localStorage.setItem('wish-list', JSON.stringify(storedPreviousWishlist));
        alert('Successfully added to wishlist.')
    }
}

export { addToStoredCart, getStoredCart, addToStoredWishlist, getStoredWishlist };
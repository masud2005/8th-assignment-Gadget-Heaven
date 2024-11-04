
const getStoredCart = () => {
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        const storedCartInt = JSON.parse(storedCart);
        return storedCartInt;
    }
    else{
        return [];
    }
}

const addToStoredCart = (product) => {
    const storedPreviousCart = getStoredCart();
    const isExist = storedPreviousCart.find(storedCart => storedCart.product_id === product.product_id);
    if(isExist){
        alert('Cart already exists!');
    }
    else{
        storedPreviousCart.push(product);
        localStorage.setItem('cart', JSON.stringify(storedPreviousCart));
        alert('Successfully added.');
    }
}

export {addToStoredCart, getStoredCart};
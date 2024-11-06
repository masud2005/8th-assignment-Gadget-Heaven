import React from 'react';
import { FaXmark } from 'react-icons/fa6';
import { addToStoredCart } from '../utility/addToDb';

const AddWishlistContainer = ({wishProduct}) => {
    // console.log(wishProduct);
    const { product_title, product_image, description, price } = wishProduct;

    const addToCard = (product) => {
        console.log(product);
        addToStoredCart(product);
    }

    return (
        <div className='px-2'>
            <div className='flex flex-col md:flex-row items-center gap-6 bg-white  rounded-2xl p-5 mb-5 relative'>
                <div className='md:w-1/5 h-[140px] place-items-center'>
                    <img className='h-full' src={product_image} alt="Gadgets..." />
                </div>
                <div className='flex justify-between w-full'>
                    <div>
                        <h2 className='text-xl font-semibold'>{product_title}</h2>
                        <p className='text-gray-600 text-lg py-2'>{description}</p>
                        <p className='text-lg font-medium'>Price: ${price}</p>
                        <button onClick={() => addToCard(wishProduct)} className='bg-primary px-6 py-2 rounded-full text-white font-medium text-lg mt-4'>Add to Card</button>
                    </div>
                    <div className='absolute top-4 right-4'>
                        <button className='border border-red-500 rounded-full p-2 hover:bg-red-200 transition duration-200'><FaXmark size={24} color='red'/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddWishlistContainer;
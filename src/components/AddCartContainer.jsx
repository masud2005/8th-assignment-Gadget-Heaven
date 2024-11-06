import React from 'react';
import { FaXmark } from 'react-icons/fa6';

const AddCartContainer = ({ product }) => {
    const { product_title, product_image, description, price } = product;
    return (
        <div className='px-2'>
            <div className='flex flex-col md:flex-row gap-6 bg-white  rounded-2xl p-5 mb-5 items-center  relative'>
                <div className='md:w-1/5 h-[120px] place-items-center'>
                    <img className='h-full' src={product_image} alt="Gadgets..." />
                </div>
                <div className='flex justify-between w-full'>
                    <div>
                        <h2 className='text-xl font-semibold'>{product_title}</h2>
                        <p className='text-gray-600 text-lg py-2'>{description}</p>
                        <p className='text-lg font-medium'>Price: ${price}</p>
                    </div>
                    <div className='absolute top-3 right-4'>
                        <button className='border border-red-500 rounded-full p-2 hover:bg-red-200 transition duration-200'><FaXmark size={24} color='red'/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCartContainer;
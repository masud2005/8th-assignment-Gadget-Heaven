import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    // console.log(product)
    const { product_id,product_title, price, product_image } = product;
    return (
        <div className='bg-white rounded-xl p-4'>
            <div className='w-full h-[180px] bg-gray-200 rounded-xl'>
                <img src="" alt="" />
            </div>
            <h1 className='text-2xl font-semibold pt-6 pb-2'>{product_title}</h1>
            <p className='text-lg font-medium text-gray-600 pb-3'>Price: {price}k</p>
            <Link to={`/product-details/${product_id}`}><button className='rounded-full border border-primary text-primary bg-white px-4 py-2 hover:bg-purple-200 transition duration-200 font-semibold '>View Details</button></Link>
        </div>
    );
};

export default Product;
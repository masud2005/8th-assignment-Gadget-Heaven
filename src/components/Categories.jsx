import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({categories}) => {
    // console.log(categories)
    return (
        <div className='bg-white p-3 lg:p-2 xl:p-6 rounded-xl border'>
            {/* <h1>Categories Component</h1> */}
            <NavLink to='/' className={({isActive}) => `${isActive ? 'bg-primary text-white' : ''} block bg-gray-100 mb-2 text-center py-2 rounded-full font-medium text-lg text-gray-600`}>All Products</NavLink>
            {
                categories.map(category => 
                    <NavLink to={`/${category.category}`} key={category.product_id} className={({isActive}) => `${isActive ? 'bg-primary text-white' : ''} block bg-gray-100 mb-2 text-center py-2 rounded-full font-medium text-lg text-gray-600`}>{category.category}</NavLink>
                )
            }
        </div>
    );
};

export default Categories;
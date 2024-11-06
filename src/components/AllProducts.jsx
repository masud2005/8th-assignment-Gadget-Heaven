// import React from 'react';

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";

const AllProducts = () => {

    const [products, setProducts] = useState([]);
    const { category } = useParams();
    const allProducts = useLoaderData();

    useEffect(() => {
        if (category) {
            const filteredByCategory = [...allProducts].filter(product => product.category === category);
            setProducts(filteredByCategory);
        }
        else {
            setProducts(allProducts);
        }
    }, [allProducts, category])

    return (
        <>
            {
                products.length === 0 && <h1 className='text-red-500 text-4xl text-center font-semibold mt-20'>No Products Available!</h1>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products.map(product => <Product product={product} key={product.product_id} />)
                }
            </div>
        </>
    );
};

export default AllProducts;
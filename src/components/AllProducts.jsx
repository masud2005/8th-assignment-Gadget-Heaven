// import React from 'react';

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";

const AllProducts = () => {

    const [products, setProducts] = useState([]);

    const {category} = useParams();
    // console.log(category);

    const allProducts = useLoaderData();
    // console.log(allProducts);

    useEffect(() => {
        if (category) {
            const filteredByCategory = [...allProducts].filter(product => product.category === category);
            setProducts(filteredByCategory);
            // console.log(filteredByCategory)
        }
        else{
            setProducts(allProducts);
        }
    }, [allProducts, category])
    // console.log(products)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                products.map(product => <Product product={product} key={product.product_id}/>)
            }
        </div>
    );
};

export default AllProducts;
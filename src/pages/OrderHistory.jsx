import React, { useEffect, useState } from 'react';
import { getStoredHistory, removeHistoryStoredData } from '../utility/addToDb';
import Heading from '../components/Heading';
import { Helmet } from 'react-helmet-async';

const OrderHistory = () => {

    const [historyProduct, setHistoryProduct] = useState([]);

    useEffect(() => {
        setHistoryProduct(getStoredHistory());
    }, [])

    const clearHistory = () => {
        setHistoryProduct(removeHistoryStoredData());
    }

    return (
        <>
            <Helmet>
                <title>Order History || Gadget Heaven</title>
            </Helmet>
            <div className='bg-primary py-10 mb-10'>
                <Heading title='Order History' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></Heading>
            </div>

            <div className='container mx-auto'>
                <div className='flex justify-between items-center mb-5'>
                    <h1 className='text-2xl font-semibold'>All Purchase Product History</h1>
                    <button onClick={() => clearHistory()} disabled={historyProduct.length === 0} className={`${historyProduct.length === 0 && '!bg-gray-300 !text-white border-gray-400'} rounded-full border border-primary text-primary bg-white px-4 py-2 hover:bg-purple-200 transition duration-200 font-semibold`}>Clear History</button>
                </div>
                {historyProduct.length === 0 &&
                    <div>
                        <h1 className='text-red-500 text-4xl text-center font-semibold mt-10'>History is Empty!</h1>
                    </div>
                }
                {
                    historyProduct.map((product, index) =>
                        <div key={index}>
                            <div className='flex gap-6 bg-white  rounded-2xl p-5 mb-5 border'>
                                <div className='w-2/6 border rounded-xl flex justify-center items-center'>
                                    <img src={product.product_image} alt="Gadgets..." />
                                </div>
                                <div>
                                    <div>
                                        <h2 className='text-xl font-semibold'>{product.product_title}</h2>
                                        <p className='text-gray-600 text-lg py-1'>{product.description}</p>
                                        <div className='flex  gap-10'>
                                            <p className='text-lg font-medium'>Price: ${product.price}</p>
                                            <p className='text-lg font-medium'>Rating: {product.rating}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-xl pb-1 mt-4">Specification:</h2>
                                        <ul>
                                            {product.specification &&
                                                product.specification.map((item, index) =>
                                                    <li key={index} className="text-gray-600 list-decimal mx-10">{item}</li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default OrderHistory;
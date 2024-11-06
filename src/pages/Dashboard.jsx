import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { addToStoredCart, addToStoredHistory, getStoredCart, getStoredWishlist, removeCartStoredData } from '../utility/addToDb';
import { TbAdjustmentsFilled } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Heading from '../components/Heading';
import AddCartContainer from '../components/AddCartContainer';
import AddWishlistContainer from '../components/AddWishlistContainer';
import { useCart } from '../utility/cartContext';

const Dashboard = () => {

    const navigate = useNavigate();
    const { setCartCount } = useCart();

    const [cartProducts, setProducts] = useState([]);
    const [wishListProducts, setWishlistProducts] = useState([]);
    const [totalCost, setTotalCost] = useState(0)

    useEffect(() => {
        // Cart
        const storedLocalStorageCart = getStoredCart();
        setProducts(storedLocalStorageCart)

        // Wish list
        const storedLocalStorageWishlist = getStoredWishlist();
        setWishlistProducts(storedLocalStorageWishlist);

        // Calculate the total cost
        const totalProductCost = storedLocalStorageCart.reduce((sum, product) => sum + (product.price || 0), 0);
        setTotalCost(totalProductCost);
    }, [])

    // Sort by Price
    const handleSortByPrice = () => {
        const sortByPrice = [...cartProducts].sort((a, b) => b.price - a.price);
        setProducts(sortByPrice);
    }

    // remove
    const handleClose = () => {
        navigate('/');
        setTotalCost(0);
    }

    const handlePurchase = () => {
        cartProducts.filter(product => {
            addToStoredHistory(product);
        });

        const updatedCart = removeCartStoredData();
        setProducts(updatedCart);
        setCartCount(0);
    }


    return (
        <>
            <Helmet>
                <title>Dashboard || Gadget Heaven</title>
            </Helmet>
            <div className='bg-primary py-10 place-items-center'>
                <Heading title='Dashboard' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!' />
            </div>
            <div className=''>
                <Tabs>
                    <TabList className='flex gap-5 bg-primary pb-5 justify-center'>
                        <Tab selectedClassName="bg-white !text-[#9538E2] font-bold outline-none" className="text-white text-lg border px-10 py-2 rounded-full cursor-pointer">Cart</Tab>
                        <Tab selectedClassName="bg-white !text-[#9538E2] font-bold outline-none" className="text-white text-lg border px-10 py-2 rounded-full cursor-pointer">Wish List</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='container mx-auto mt-10'>
                            <div className='flex justify-between items-center mb-8 p-2'>
                                <h2 className='font-bold text-2xl hidden md:block'>Cart</h2>
                                <div className='flex flex-col md:flex-row place-items-center  mx-auto md:mx-0 gap-5'>
                                    <div>
                                        <h2 className='font-bold text-2xl md:mr-10'>Total cost: ${totalCost}</h2>
                                    </div>
                                    <div className='flex gap-5'>
                                        <button onClick={handleSortByPrice} className='px-5 py-2 border border-primary rounded-full flex items-center gap-2 text-primary text-lg font-semibold'>Sort by Price <TbAdjustmentsFilled /></button>

                                        <button onClick={() => { document.getElementById('my_modal_5').showModal(); handlePurchase() }} disabled={cartProducts.length === 0} className={`${cartProducts.length === 0 && '!bg-gray-300'} px-5 py-2 bg-primary rounded-full flex items-center gap-2 text-white text-lg font-semibold`}>Purchase</button>
                                    </div>
                                    {/* </div> */}

                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <dialog id="my_modal_5" className="modal  modal-middle">
                                        <div className="modal-box">
                                            <img className='mx-auto' src="https://i.ibb.co.com/rpYJVrs/Verify.png" alt="" />
                                            <h3 className="font-bold text-2xl text-center">Payment Successfully</h3>
                                            <p className="text-gray-500 text-center text-lg py-3">Thanks for purchasing</p>
                                            <p className='text-gray-500 text-center'>Total: ${totalCost}</p>
                                            <div className="modal-action justify-center">
                                                <button onClick={() => handleClose()} className="btn w-full text-xl">Close</button>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                            </div>
                            {
                                cartProducts.map(product => <AddCartContainer product={product} key={product.product_id}></AddCartContainer>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='container mx-auto mt-10'>
                            {
                                wishListProducts.map(wishProduct => <AddWishlistContainer wishProduct={wishProduct} key={wishProduct.product_id}></AddWishlistContainer>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default Dashboard;
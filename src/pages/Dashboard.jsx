import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AddCartContainer from '../components/AddCartContainer';
import AddWishlistContainer from '../components/AddWishlistContainer';
import { addToStoredCart, getStoredCart, getStoredWishlist } from '../utility/addToDb';
import { TbAdjustmentsFilled } from 'react-icons/tb';
// import 'react-tabs/style/react-tabs.css';

const Dashboard = () => {

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
    // console.log(wishListProducts)

    // Sort by Price
    const handleSortByPrice = () => {
        // console.log('sorting')
        const sortByPrice = [...cartProducts].sort((a, b) => b.price - a.price);
        setProducts(sortByPrice);
    }

    // const addToCard = (product) => {
    //     console.log(product);
    //     addToStoredCart(product)
    // }

    return (
        <>
            <div className='bg-primary py-10 place-items-center'>
                <Heading title='Dashboard' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!' />
            </div>
            <div className=''>
                <Tabs>
                    <TabList className='flex gap-5 bg-primary pb-5 justify-center'>
                        <Tab selectedClassName="bg-white text-[#9538E2] font-bold outline-none" className="text-white text-lg border px-10 py-2 rounded-full cursor-pointer">Cart</Tab>
                        <Tab selectedClassName="bg-white text-[#9538E2] font-bold outline-none" className="text-white text-lg border px-10 py-2 rounded-full cursor-pointer">Wish List</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='container mx-auto mt-10'>
                            <div className='flex justify-between items-center mb-8'>
                                <h2 className='font-bold text-2xl '>Cart</h2>
                                <div className='flex items-center gap-5'>
                                    <h2 className='font-bold text-2xl mr-10'>Total cost: ${totalCost}</h2>
                                    <button onClick={handleSortByPrice} className='px-5 py-2 border border-primary rounded-full flex items-center gap-2 text-primary text-lg font-semibold'>Sort by Price <TbAdjustmentsFilled /></button>
                                    <button className='px-5 py-2 bg-primary rounded-full flex items-center gap-2 text-white text-lg font-semibold'>Purchase</button>
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
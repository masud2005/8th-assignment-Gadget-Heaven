import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { addToStoredCart, addToStoredWishlist, getStoredCart, getStoredWishlist } from "../utility/addToDb";
import toast from "react-hot-toast";
import Heading from "../components/Heading";
import { useCart } from "../utility/cartContext";

const ProductDetails = () => {

    const {incrementCart, incrementWishlist} = useCart();
    const [wishlistClicked, setWishlistClicked] = useState(false);

    const [product, setProduct] = useState({});

    const { productId } = useParams();

    const allProducts = useLoaderData();

    useEffect(() => {
        const singleProduct = allProducts.find(product => product.product_id === productId)
        setProduct(singleProduct);
    }, [allProducts, productId])

    const { product_title, price, description, specification, availability, rating, product_image } = product;

    const addToCart = (product) => {
        const storedCart = getStoredCart();

        const isExist = storedCart.find(item => item.product_id === productId)
        if(isExist){
            return toast.error('You have already added this product to the cart.')
        }

        addToStoredCart(product);
        incrementCart();
    };

    const addToWishlist = (product) => {
        setWishlistClicked(true);
        const storedWishlist = getStoredWishlist();
        const isExist = storedWishlist.find(item => item.product_id === productId);
        if (isExist) {
            return toast.error("You have already added this product to the wishlist.");
        }

        addToStoredWishlist(product);
        incrementWishlist();
    };


    return (
        <div>
            <div className="bg-primary pt-10 pb-48">
                <Heading title='Product Details' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!' />
            </div>
            <div className="w-11/12 mx-auto md:w-5/6 xl:w-4/6 md:mx-auto bg-white border rounded-2xl p-5 -mt-40">
                <div className="rounded-2xl flex flex-col md:flex-row gap-5">
                    <div className="h-[320px] md:w-1/3 border md:h-auto rounded-2xl bg-gray-100 place-content-center">
                        <img className="w-full h-full md:h-auto" src={product_image} alt="" />
                    </div>
                    <div className="md:w-2/3">
                        <h1 className="text-[28px] font-semibold">{product_title}</h1>
                        <p className="text-xl font-semibold text-gray-600 py-3">Price: ${price}</p>
                        <span className="border border-green-500 bg-green-100 text-green-600 p-[2px] px-3 rounded-full">{availability ? "inStock" : "OutOfStock"}</span>
                        <p className="text-lg text-gray-600 py-3">{description}</p>
                        <div>
                            <h2 className="font-bold text-xl pb-3">Specification:</h2>
                            <ul>
                                {specification &&
                                    specification.map((item, index) =>
                                        <li key={index} className="text-gray-600 list-decimal mx-10">{item}</li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="flex items-center gap-1 pt-3">
                            <h4 className="font-bold text-lg">Rating</h4>
                            <img className="w-5 h-5" src="https://img.icons8.com/?size=64&id=h2gP38PFT4zr&format=png" alt="" />
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p className="bg-gray-100 px-2 rounded-full">{rating}</p>
                        </div>
                        <div className="flex gap-5 pt-5">
                            <button onClick={() => addToCart(product)} className="flex items-center gap-2 bg-primary hover:bg-gray-200 hover:text-black transition duration-200 rounded-full px-4 py-1 text-white">Add To Card <IoCartOutline size={20} /></button>
                            <button onClick={() => addToWishlist(product)} disabled={wishlistClicked} className={`${wishlistClicked && 'hover:bg-transparent text-gray-200'} rounded-full p-2 bg-white border hover:bg-gray-200 transition duration-200`}><FaRegHeart size={20} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
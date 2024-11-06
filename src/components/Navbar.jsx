import React, { useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../utility/cartContext';

const Navbar = () => {

    const { cartCount, wishlistCount } = useCart();
    const { pathname } = useLocation();

    const links = <>
        <NavLink to='/' className={({ isActive }) => `${isActive ? 'text-red-500 border border-red-500 font-medium rounded-lg' : ''} px-4 py-2`}>Home</NavLink>
        <NavLink to='/statistics' className={({ isActive }) => `${isActive ? 'text-primary border border-primary font-medium rounded-lg' : ''} px-4 py-2`}>Statistics</NavLink>
        <NavLink to='/dashboard' className={({ isActive }) => `${isActive ? 'text-primary border border-primary font-medium rounded-lg' : ''} px-4 py-2`}>Dashboard</NavLink>
        <NavLink to='/order history' className={({ isActive }) => `${isActive ? 'text-primary border border-primary font-medium rounded-lg' : ''} px-4 py-2`}>Order History</NavLink>
    </>

    return (
        <div className={`${(pathname === '/' || pathname === '/Computers' || pathname === '/Phones' || pathname === '/Smart%20Watches' || pathname === '/Chargers' || pathname === '/Power%20Banks') ? 'bg-primary mx-2 md:mx-5 xl:mx-10 rounded-3xl pt-4 text-white' : 'sticky top-0 z-50 bg-gray-100/30 backdrop-blur-md pt-2'} `}>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden  pr-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-400 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="text-xl md:text-2xl font-bold">GadgetHeaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 xl:gap-10 p-2 text-base">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <div className='relative'>
                        <button className='bg-white border p-2 md:p-3 rounded-full'><IoCartOutline size={24} color='#9538E2' /></button>
                        <span className='absolute -top-1 right-0 rounded-full bg-gray-500 text-sm px-[6px] text-white '>{cartCount}</span>
                    </div>
                    <div className='relative'>
                        <button className='bg-white border p-2 md:p-3 rounded-full'><FaRegHeart size={22} color='#9538E2' /></button>
                        <span className='absolute -top-1 right-0 rounded-full bg-gray-500 text-sm px-[6px] text-white '>{wishlistCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;  
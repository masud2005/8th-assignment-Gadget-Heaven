import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 bg-gray-100/30 backdrop-blur-md'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to='/' className={({ isActive }) => `${isActive ? 'text-primary border border-primary font-medium rounded' : ''} px-4 py-1`}>Home</NavLink>
                            <NavLink to='/statistics' className={({ isActive }) => `${isActive ? 'text-primary border border-primary font-medium rounded' : ''} px-4 py-1`}>Statistics</NavLink>
                            <NavLink to='/dashboard' className={({ isActive }) => `${isActive ? 'text-primary border border-primary font-medium rounded' : ''} px-4 py-1`}>Dashboard</NavLink>
                        </ul>
                    </div>
                    <a className="text-2xl font-bold">GadgetHeaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10 p-2 text-base">
                        <NavLink to='/' className={({ isActive }) => `${isActive ? 'text-primary border border-primary font-medium rounded' : ''} px-4 py-1`}>Home</NavLink>
                        <NavLink to='/statistics' className={({ isActive }) => `${isActive ? 'text-primary border border-primary font-medium rounded' : ''} px-4 py-1`}>Statistics</NavLink>
                        <NavLink to='/dashboard' className={({ isActive }) => `${isActive ? 'text-primary border border-primary font-medium rounded' : ''} px-4 py-1`}>Dashboard</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <button className='bg-white border p-3 rounded-full'><IoCartOutline size={24}/></button>
                    <button className='bg-white border p-3 rounded-full'><FaRegHeart size={22}/></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <h1 className='text-center text-9xl font-bold text-gray-500'>404</h1>
            <h2 className='text-center text-3xl font-semibold py-2'>Page Not Found</h2>
            <NavLink to='/'><p className='text-center text-purple-600 underline border-purple-600'>Go to Home Page</p></NavLink>
        </div>
    );
};

export default ErrorPage;
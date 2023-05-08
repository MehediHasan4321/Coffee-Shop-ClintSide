import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-gray-200 h-24 '>
            <div className="h-full container mx-auto flex justify-between items-center">
                <h1 className='text-3xl font-semibold'>Coffee</h1>
                <div className='flex gap-4 items-center font-semibold'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/addCoffee'}>Add Coffee</NavLink>
                </div>
            </div>
            
        </div>
    );
};

export default Header;
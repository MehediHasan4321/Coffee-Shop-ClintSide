import React from 'react';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Coffee = ({coffee}) => {
    
    const {url,coffeeName,test, chefName,price,category} = coffee
    return (
        <div className='w-[550px] h-60 border-2 flex justify-between gap-5 p-3'>
            <img className='w-60 ' src={url} alt="Coffee Images" />
            <div className=' text-left space-y-2 font-serif my-auto'>
                <h2 className='text-lg font-semibold'>Name : {coffeeName}</h2>
                <h2>Chif : {chefName}</h2>
                <p>Test : {test}</p>
                <p>Category : {category}</p>
                <h2>Price : { price ? price : '$1.5'}</h2>
            </div>
            <div className=' flex flex-col my-auto gap-4'>
                <Link className='bg-amber-400 hover:bg-amber-500 p-2 rounded text-white'><FaEye/></Link>
                <Link className='bg-amber-400 hover:bg-amber-500 p-2 rounded text-white'><FaEdit/></Link>
                <Link className='bg-amber-400 hover:bg-amber-500 p-2 rounded text-white'><FaTrash/></Link>
            </div>
        </div>
    );
};

export default Coffee;
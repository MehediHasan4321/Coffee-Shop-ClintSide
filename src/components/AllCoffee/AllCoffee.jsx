import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Coffee from './Coffee/Coffee';

const AllCoffee = () => {
    const allCoffee = useLoaderData()
    return (
        <div className='container mx-auto my-32'>
            <h1 className="text-3xl">All Coffee will show here</h1>
            <div className=' grid grid-cols-2 gap-5'>
                {
                    allCoffee.map(coffee=><Coffee key={coffee._id} coffee={coffee}/>)
                }
            </div>
        </div>
    );
};

export default AllCoffee;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Coffee from './Coffee/Coffee';

const AllCoffee = () => {
    const allCoffee = useLoaderData()
    return (
        <div className='container mx-auto my-32'>
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto'>
                {
                    allCoffee.map(coffee=><Coffee key={coffee._id} coffee={coffee}/>)
                }
            </div>
        </div>
    );
};

export default AllCoffee;
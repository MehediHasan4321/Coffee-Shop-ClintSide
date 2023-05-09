import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Coffee from './Coffee/Coffee';
import InstragramMedia from '../InstragramMedia/InstragramMedia';
import Banner from '../Banner/Banner';


const AllCoffee = () => {
    const allCoffee = useLoaderData()
    const [coffees, setCoffees] = useState(allCoffee)
    return (

        <>
            <Banner />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 container mx-auto my-32'>
                {
                    coffees.map(coffee => <div key={coffee._id} className='mx-auto'><Coffee coffees={coffees} setCoffees={setCoffees} coffee={coffee} /></div>)
                }
            </div>
            <InstragramMedia />
        </>

    );
};

export default AllCoffee;
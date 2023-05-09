import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Coffee from './Coffee/Coffee';
import InstragramMedia from '../InstragramMedia/InstragramMedia';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';


const AllCoffee = () => {
    const allCoffee = useLoaderData()
    const [coffees, setCoffees] = useState(allCoffee)
    return (

        <>
            <Banner />
            <Features />
            <div className='mt-24'>
                <h4 className='text-lg text-gray-600 text-center'> --- Sip & Savor --- </h4>
                <h1 className='text-4xl font-serif text-center'>Our Popular Products</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 container mx-auto my-20'>
                    {
                        coffees.map(coffee => <div key={coffee._id} className='mx-auto'><Coffee coffees={coffees} setCoffees={setCoffees} coffee={coffee} /></div>)
                    }
                </div>
            </div>
            <InstragramMedia />
        </>

    );
};

export default AllCoffee;
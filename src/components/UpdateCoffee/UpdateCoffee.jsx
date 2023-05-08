import React from 'react';
import '../AddCoffee/AddCoffee.css'
const AddCoffee = () => {
    const handleUpdateCoffee = event => {
        event.preventDefault()
        const form = event.target
        const coffeeName = form.coffeeName.value;
        const chefName = form.chefName.value;
        const supplyerName = form.supplyerName.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const url = form.url.value
        const singleCoffee = { coffeeName, chefName, supplyerName, test, category, details, url }
        console.log(singleCoffee)
    }
    return (
        <div className='container mx-auto w-full  flex flex-col justify-center items-center customBg'>

            <form onSubmit={handleUpdateCoffee} className='bg-[#F4F3F0] p-8 w-[1093px] h-auto'>
                <div className=' text-center font-serif my-8'>
                    <h1 className=' text-4xl font-semibold mb-5'>Update Existing Coffee Details</h1>
                    <p className=' px-12 text-gray-600'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <div>
                    <div className='flex flex-col justify-between h-[528px]  font-semibold m-5'>
                        <div className='flex gap-5'>
                            <div className='flex flex-col gap-2 w-1/2'>
                                <span>Coffee Name</span>
                                <input className='px-4 py-2' type="text" name="coffeeName" id="" placeholder='Enter Coffee Name' />
                            </div>
                            <div className='flex flex-col gap-2 w-1/2'>
                                <span>Chef Name</span>
                                <input className='px-4 py-2' type="text" name="chefName" id="" placeholder='Enter Chef Name' />
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='flex flex-col gap-2 w-1/2'>
                                <span>Supplyer Name</span>
                                <input className='px-4 py-2' type="text" name="supplyerName" id="" placeholder='Enter Coffee Name' />
                            </div>
                            <div className='flex flex-col gap-2 w-1/2'>
                                <span>Test</span>
                                <input className='px-4 py-2' type="text" name="test" id="" placeholder='Enter Chef Name' />
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='flex flex-col gap-2 w-1/2'>
                                <span>Category</span>
                                <input className='px-4 py-2' type="text" name="category" id="" placeholder='Enter Coffee Name' />
                            </div>
                            <div className='flex flex-col gap-2 w-1/2'>
                                <span>Details</span>
                                <input className='px-4 py-2' type="text" name="details" id="" placeholder='Enter Chef Name' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <span>Photo URL</span>
                            <input className='px-4 py-2' type="url" name="url" id="" placeholder='Enter Chef Name' />
                        </div>
                        <div>
                            <input className='w-full bg-[#D2B48C] py-2 font-semibold' type="submit" value="Update Coffee" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;
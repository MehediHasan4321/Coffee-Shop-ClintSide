import React from 'react';
import '../AddCoffee/AddCoffee.css'
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
const AddCoffee = () => {
    const data = useLoaderData()
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
        const updateCoffee = { coffeeName, chefName, supplyerName, test, category, details, url }
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to update this Coffee",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${data._id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updateCoffee)
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.modifiedCount>0){
                            Swal.fire(
                                'Updated !!',
                                "Your Has Been Updated",
                                'success'
                            )
                        }
                    })
                
            }
        })

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
                                <input className='px-4 py-2' type="text" name="coffeeName" defaultValue={data.coffeeName} id="" placeholder='Enter Coffee Name' />
                            </div>
                            <div className='flex flex-col gap-2 w-1/2'>
                                <span>Chef Name</span>
                                <input className='px-4 py-2' type="text" name="chefName" defaultValue={data.chefName} id="" placeholder='Enter Chef Name' />
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='flex flex-col gap-2 w-1/2'>
                                <span>Supplyer Name</span>
                                <input className='px-4 py-2' type="text" defaultValue={data.supplyerName} name="supplyerName" id="" placeholder='Enter Coffee Name' />
                            </div>
                            <div className='flex flex-col gap-2 w-1/2'>
                                <span>Test</span>
                                <input className='px-4 py-2' type="text" defaultValue={data.test} name="test" id="" placeholder='Enter Chef Name' />
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='flex flex-col gap-2 w-1/2'>
                                <span>Category</span>
                                <input className='px-4 py-2' type="text" defaultValue={data.category} name="category" id="" placeholder='Enter Coffee Name' />
                            </div>
                            <div className='flex flex-col gap-2 w-1/2'>
                                <span>Details</span>
                                <input className='px-4 py-2' type="text" defaultValue={data.details} name="details" id="" placeholder='Enter Chef Name' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <span>Photo URL</span>
                            <input className='px-4 py-2' type="url" defaultValue={data.url} name="url" id="" placeholder='Enter Chef Name' />
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
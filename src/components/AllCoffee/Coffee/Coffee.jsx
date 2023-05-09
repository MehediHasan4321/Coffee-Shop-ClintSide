import React from 'react';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const Coffee = ({ coffee,coffees,setCoffees }) => {
    const { url, coffeeName, test, chefName, price, category, _id } = coffee
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                //   
                console.log('delete conforme')
                fetch(`https://coffee-shop-server-mehedihasan4321.vercel.app/coffees/${_id}`, {
                    method: 'DELETE',
                    
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                        }
                        setCoffees(coffees.filter(cof=>cof._id !== id))
                    })
            }
        })
    }
    return (
        <>
            <div className='w-[550px] h-60 border-2 flex justify-between gap-5 p-3'>
                <img className='w-60 ' src={url} alt="Coffee Images" />
                <div className=' text-left space-y-2 font-serif my-auto'>
                    <h2 className='text-lg font-semibold'>Name : {coffeeName}</h2>
                    <h2>Chif : {chefName}</h2>
                    <p>Test : {test}</p>
                    <p>Category : {category}</p>
                    <h2>Price : {price ? price : '$1.5'}</h2>
                </div>
                <div className=' flex flex-col my-auto gap-4'>
                    <Link className='bg-amber-400 hover:bg-amber-500 p-2 rounded text-white'><FaEye /></Link>
                    <Link to={`/updateCoffee/${_id}`} className='bg-amber-400 hover:bg-amber-500 p-2 rounded text-white'><FaEdit /></Link>
                    <button onClick={() => handleDelete(_id)} className='bg-amber-400 hover:bg-amber-500 p-2 rounded text-white'><FaTrash /></button>
                </div>
            </div>

        </>
    );
};

export default Coffee;
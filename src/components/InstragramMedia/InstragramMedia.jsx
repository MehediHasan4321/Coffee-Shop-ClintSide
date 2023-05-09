
import React, { useEffect, useState } from 'react';


const InstragramMedia = () => {
    const [images,setImages] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/instaImg')
        .then(res=>res.json())
        .then(data=>setImages(data))
    },[])
    
    return (
        <div className='container mx-auto my-32'>
            <h1 className='text-5xl font-serif mb-12 text-center'>Follow on Instagram</h1>
            <div className='grid md:grid-cols-4 px-8'>
                {
                    images.map(img=><img className='w-[350px h-[350px] my-5 mx-auto hover:scale-110 cursor-pointer' key={img.img_id} src={img.img_url}  />)
                }
            </div>
        </div>
    );
};

export default InstragramMedia;
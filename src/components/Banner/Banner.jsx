import React, { useEffect, useState } from 'react';

const Banner = () => {
    const [banner, setBanner] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/banner')
            .then(res => res.json())
            .then(data => setBanner(data))
    }, [])
    const {banner_title,banner_des} = banner.banner_text ? banner.banner_text :{}
    return (

        <div className='h-[80vh]' style={{ backgroundImage: `url(${banner?.banner_img})`, backgroundPosition: 'center', objectFit: 'cover' }}>
            <div className="container mx-auto flex items-center h-full justify-end">
                <div className='text-white font-serif w-[50%] space-y-5'>
                    <h1 className='text-4xl'>{banner_title? banner_title:''}</h1>
                    <p className=' leading-8'>{banner_des ? banner_des:''}</p>
                    <button className=' px-4 py-2 text-white bg-amber-400 font-semibold rounded-md'>Explore More</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;
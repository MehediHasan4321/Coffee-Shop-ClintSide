import React, { useEffect, useState } from 'react';

const Features = () => {
    const [features,setFeatures] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/feature').then(res=>res.json()).then(data=>setFeatures(data))
    },[])
    
    return (
        <div className='bg-[#ECEAE3] h-[300px]'>
            <div className="container mx-auto grid grid-cols-4">
                {
                    features.map(feature=><div className='w-80 h-60 flex justify-center flex-col' key={feature.id}>
                        <img className='w-20' src={feature.img?feature.img:''} alt="features imgaes" />
                        <h1 className='text-2xl'>{feature.title?feature.title:""}</h1>
                        <p>{feature.description?feature.description:""}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Features;
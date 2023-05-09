import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [header,setHeader] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/header")
        .then(res=>res.json())
        .then(data=>setHeader(data))
    },[])
    
    const {brand_name,brand_logo,header_links,header_bg}= header
    return (
        <div className=" h-24" style={{backgroundImage:`url(${header_bg})`}}>
            <div className="h-full container mx-auto flex justify-between items-center text-white">
                <div className='flex items-center gap-2'>
                    <img className='w-16' src={brand_logo} alt="coffee shop  logo" />
                    <h1 className='text-3xl font-semibold'>{brand_name}</h1>
                </div>
                <div className='flex gap-4 items-center font-semibold'>
                    {
                       header_links && header_links.map(link=><NavLink key={link.id} to={link.link}>{link.link_name}</NavLink>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Header;
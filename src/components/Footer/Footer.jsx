import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMailBulk, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import './Footer.css'
const Footer = () => {
    const [footer, setFooter] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/footer')
            .then(res => res.json())
            .then(data => setFooter(data))
    }, [])
    const { brand_logo, brand_name, brand_description } = footer[0] ? footer[0] : {}
    const { contact_title, email_num, location, phone_num } = footer[1] ? footer[1] : {}
    return (
        <div className='w-full h-auto footer-custom-bg'>
            <div className='container mx-auto grid md:grid-cols-3 py-24'>
                <div className='md:col-span-1 px-5'>
                    <img src={brand_logo ? brand_logo : 'not found'} alt="coffee shop logo" />
                    <h2 className='text-4xl my-4'>{brand_name ? brand_name : 'name not found'}</h2>
                    <p className='text-gray-600'>{brand_description ? brand_description : 'not found'}</p>
                    <div className='flex gap-5 mt-4 text-4xl'>
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedin />
                    </div>
                </div>
                <div className=' col-span-1 px-5 space-y-4 mx-auto'>
                    <h1 className='text-4xl font-serif my-5'>{contact_title ? contact_title : 'not found'}</h1>
                    <div className='flex gap-7 items-center'>
                        <FaPhoneAlt />
                        <p>{phone_num ? phone_num : 'not found'}</p>
                    </div>
                    <div className='flex gap-7 items-center'>
                        <FaMailBulk />
                        <p>{email_num ? email_num : 'not found'}</p>
                    </div>
                    <div className='flex gap-7 items-center'>
                        <FaLocationArrow />
                        <p>{location ? location : 'not found'}</p>
                    </div>
                </div>
                <div className=' col-span-1 px-5' >
                    <h1 className='text-4xl font-serif'>Contact With Us</h1>
                    <div className='mt-5'>
                        <input className='w-96 py-3 pl-3 my-2  shadow-xl rounded' placeholder='Enter You Name' type="text" name="name" id="" />
                        <input className='w-96 py-3 pl-3 my-2  shadow-xl rounded' placeholder='Enter You Email (example@gmail.com)' type="text" name="name" id="" />
                        <textarea className='my-2 rounded w-96 max-h-32 p-3 shadow-xl' placeholder='Enter Your Text....'  name="" id="" cols="40" rows="5"></textarea>
                    </div>
                    <button className=' mt-4 bg-transparent border-2 p-3 rounded-full text-lg font-semibold border-[#331A15] hover:bg-blue-200'>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
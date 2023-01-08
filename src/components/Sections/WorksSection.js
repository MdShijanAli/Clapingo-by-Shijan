import React from 'react';
// import './WorksSection.css'
import middleImg from '../../images/Subscribe & plans 1.png'

const WorksSection = () => {
    return (
        <div className='px-40 mx-auto my-52 relative'>
            <h1 className='justify-start text-3xl font-bold mb-10'>How it works ?</h1>
            <div className='md:grid md:grid-cols-3 mt-10 items-center'>
                <div className='workbox'>
                    <div className='shadow-2xl shadow-[#ccd2d4] p-10'>
                        <h2 className='text-2xl font-semibold mb-2'>1. Create Account</h2>
                        <p>Create your account using phone number or email and take a free trial at ₹1.</p>
                    </div>
                    <div className='shadow-2xl shadow-[#ccd2d4] p-10 mt-16'>
                        <h2 className='text-2xl font-semibold mb-2'>3. Select time slot</h2>
                        <p>Subscribe & select any time slot between 10 AM to 12 midnight.</p>
                    </div>
                </div>
                <div className=' mx-auto'>
                    <img src={middleImg} alt="" />
                </div>
                <div className='workbox'>
                    <div className='shadow-2xl shadow-[#ccd2d4] p-10'>
                        <h2 className='text-2xl font-semibold mb-2'>2. Subscribe</h2>
                        <p>Choose your preferred duration and select subscription package for your sessions. </p>
                    </div>
                    <div className='shadow-2xl shadow-[#ccd2d4] p-10 mt-16'>
                        <h2 className='text-2xl font-semibold mb-2'>4. You are done</h2>
                        <p>That’s it! Start practicing and reach your learning goal in speaking.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorksSection;
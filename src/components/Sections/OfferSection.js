import React from 'react';
import './OfferSection.css'

const OfferSection = () => {
    return (
        <div className='my-10'>
            <h1 className='text-center text-3xl font-bold'>What we offer ?</h1>
            <div className='md:grid grid-cols-3 mt-16 px-40 mx-auto'>
                <div className='offer1 md:col-span-1'>
                    <div className='offerBox1'>
                        <h2 className='text-2xl text-[#00D2FF] pl-10 font-semibold my-2'>Customised Curriculum</h2>
                        <p className='text-white px-10'>Customised sessions and module for Basic, Intermediate and Advanced learners.</p>
                    </div>
                </div>
                <div className='offer2 md:col-span-1'>
                    <div className='offerBox2'>
                        <h2 className='text-2xl text-[#00D2FF] pl-10 font-semibold my-2'>Experimental Learning </h2>
                        <p className='text-white px-10'>Do not study English, rather consume and use it.</p>
                    </div>
                </div>
                <div className='offer3 md:col-span-1'>
                    <div className='offerBox3'>
                        <h2 className='text-2xl text-[#00D2FF] pl-10 font-semibold my-2'>Shadowing Method</h2>
                        <p className='text-white px-10'>Think and speak in English rather than translating it from mother tongue.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferSection;
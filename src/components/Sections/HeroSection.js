import React from 'react';

const HeroSection = () => {
    return (

        <div className="hero">
            <div className="md:px-40 px-5 mx-auto md:grid md:grid-cols-2  items-center mt-20">
                <div className='mr-20'>
                    <h1 className="md:text-5xl text-4xl font-bold ">Hone your english speaking skills over <span className='text-[#139980]'>one-on-one</span> video call</h1>
                    <p className="my-10">Practice english conversation with excellent communuicators
                        across the country and speak like a PRO 😎.</p>
                    <button className="btn border-none bg-[#FF736A] text-white rounded-3xl">Book a trial</button>
                    <button className="btn border-[#FF736A] bg-white text-[#FF736A] hover:text-white rounded-3xl ml-5">Download out App</button>
                </div>
                <div className='text-center mt-10 md:mt-0'>
                    <img className="w-full mx-auto" src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
            </div>
        </div>

    );
};

export default HeroSection;
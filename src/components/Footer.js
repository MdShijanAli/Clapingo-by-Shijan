import React from 'react';
import logo from '../images/Clapingo Logo.png';
import ig from '../images/ig.png';
import lk from '../images/lk.png';
import tw from '../images/tw.png';
import you from '../images/you.png';
import fb from '../images/fb.png';
import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import plaStoreIcon from '../images/googlePlayicon.jpg';
import appleStoreIcon from '../images/applstoreicon.jpg';

const Footer = () => {
    return (
        <div className='bg-[#001F27] md:px-40 px-5 mx-auto pt-20'>
            <div className='md:grid md:grid-cols-4'>
                <div>
                    <img src={logo} alt="" />
                    <p className='text-[#D9DBE1] mt-5 w-5/6'>Clapingo is  a unique platform where you practise conversations live with various speakers across the country. This is a judgment-free space where people can freely speak with a diverse set of people from different backgrounds.</p>
                    <div className='flex gap-5 mt-5'>
                        <img className='bg-[#19353D] p-2 rounded-full h-7 w-7' src={ig} alt="" />
                        <img className='bg-[#19353D] p-2 rounded-full h-7 w-7' src={lk} alt="" />
                        <img className='bg-[#19353D] p-2 rounded-full h-7 w-7' src={tw} alt="" />
                        <img className='bg-[#19353D] p-2 rounded-full h-7 w-7' src={you} alt="" />
                        <img className='bg-[#19353D] p-2 rounded-full h-7 w-7' src={fb} alt="" />
                    </div>
                </div>
                <div className='my-10 md:my-0'>
                    <h3 className='text-white font-semibold text-xl mb-10'>Reach us</h3>
                    <div className='flex gap-2 items-center'>
                        <EnvelopeIcon className='w-5 h-5 text-[#139980]'></EnvelopeIcon>
                        <p className='text-[#D9DBE1]'>hello@clapingo.com</p>
                    </div>
                    <div className='flex gap-2 items-center my-5'>
                        <DevicePhoneMobileIcon className='w-5 h-5 text-[#139980]'></DevicePhoneMobileIcon>
                        <p className='text-[#D9DBE1]'>+91 6366937113</p>
                    </div>
                    <div className='flex gap-2 '>
                        <MapPinIcon className='w-5 h-5 text-[#139980]'></MapPinIcon>
                        <p className='text-[#D9DBE1] w-1/2'>772 Lyonwood Ave
                            Walnut, CA 91789</p>
                    </div>
                </div>
                <div>
                    <h3 className='text-white font-semibold text-xl mb-10'>Quick Links</h3>

                    <p className='text-[#D9DBE1] my-5'>Blogs</p>

                    <p className='text-[#D9DBE1] my-5'>Plans and Pricing</p>

                    <Link to='/login'><p className='text-[#D9DBE1] my-5'>Signin/Login</p></Link>

                    <p className='text-[#D9DBE1] my-5 w-1/2'>Teach with us</p>

                </div>
                <div className='mt-10 md:mt-0'>
                    <h3 className='text-white font-semibold text-xl mb-10'>Install App</h3>
                    <div className='flex gap-5 md:block'>
                        <div className='mb-5'>
                            <img className='w-32 rounded-lg' src={plaStoreIcon} alt="" />
                        </div>
                        <div>
                            <img className='w-32 rounded-lg' src={appleStoreIcon} alt="" />
                            <p className='font-semibold text-[#D9DBE1] text-sm '>Coming Soon</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className='text-[#D9DBE1] mt-10 pb-2'>© 2021 Clapingo Education All rights reserved</p>
        </div>
    );
};

export default Footer;
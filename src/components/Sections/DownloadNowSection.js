import React from 'react';
import plaStoreIcon from '../../images/googlePlayicon.jpg';
import appleStoreIcon from '../../images/applstoreicon.jpg';
import downloadapp1 from '../../images/downloadapp1.png'
import downloadapp2 from '../../images/downloadapp2.png'
import downloadapp3 from '../../images/downloadapp3.png'
import downloadapp4 from '../../images/downloadapp4.png'
import './DownloadNowSection.css';


const DownloadNowSection = () => {
    return (
        <div className='md:px-40 px-5 mx-auto mt-20 bg-[#FAFAFA] '>
            <div className='md:grid md:grid-cols-2'>
                <div className='py-12'>
                    <h1 className='text-3xl font-bold'>Download our App now!</h1>
                    <p className='text-[#808F93] w-3/5 mt-3'>Practice english conversation with excellent
                        communicators across the country and speak
                        like a pro.
                    </p>

                    <p className='mt-8 text-black font-semibold'>Get the App</p>

                    <div className='flex gap-2 mt-2'>
                        <div>
                            <img className='w-32 rounded-lg' src={plaStoreIcon} alt="" />
                        </div>
                        <div>
                            <img className='w-32 rounded-lg' src={appleStoreIcon} alt="" />
                            <p className='font-semibold text-black text-sm text-center'>Coming Soon</p>
                        </div>
                    </div>
                </div>



                <div className='img flex'>
                    <div className=''>
                        <img className='w-[700px] mt-10' src={downloadapp1} alt="" />
                    </div>
                    <div className=''>
                        <img className='w-[500px] ml-20 mb-[-40px]' src={downloadapp2} alt="" />
                        <img className='w-[500px] ml-[-30px]' src={downloadapp3} alt="" />
                    </div>
                    <div className=''>
                        <img className='mt-20 w-[700px]' src={downloadapp4} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DownloadNowSection;
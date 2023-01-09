import React from 'react';
import clamping1 from '../../images/clampingo1.png';
import clamping2 from '../../images/clampingo2.png';
import clamping3 from '../../images/clampingo3.png';
import clamping4 from '../../images/clampingo4.png';
import clamping5 from '../../images/clamping5.png';

const ClampingoSection = () => {
    return (
        <div className='md:px-40 px-5 mx-auto my-20'>
            <h1 className='justify-start text-3xl font-bold mb-10'>Why choose Clapingo ?</h1>


            <div className='md:grid md:grid-cols-4 gap-8'>
                <div className='bg-[#eceef1] rounded-2xl'>
                    <img className='w-full h-60' src={clamping1} alt="" />
                    <h3 className='text-2xl p-3'>Practice Speaking Skills</h3>
                    <p className='px-4 pb-5'>One of a kind platform where you get to practise your speaking skills and not just be the audience in some lecture.</p>
                </div>
                <div className='bg-[#eceef1] rounded-2xl my-5 md:my-0'>
                    <img className='w-full h-60' src={clamping2} alt="" />
                    <h3 className='text-2xl p-3'>Practice Speaking Skills</h3>
                    <p className='px-4 pb-5'>One of a kind platform where you get to practise your speaking skills and not just be the audience in some lecture.</p>
                </div>

                <div className=''>
                    <div className='flex bg-[#eceef1] rounded-2xl mb-10'>
                        <img className=' justify-center' src={clamping3} alt="" />
                        <div>
                            <h3 className='text-xl p-3'>Learn at your Own Peace</h3>
                            <p className='px-4 pb-5 text-sm'>We have customised classes to suit each person’s individual pace and ability to learn.</p>
                        </div>
                    </div>

                    <div className='flex bg-[#eceef1] rounded-2xl'>
                        <img className=' justify-center' src={clamping4} alt="" />
                        <div>
                            <h3 className='text-xl p-3'>Undivided Attention</h3>
                            <p className='px-4 pb-5 text-sm'>1-one-1 sessions for undivided attention.</p>
                        </div>
                    </div>
                </div>

                <div className='bg-[#eceef1] rounded-2xl mt-5 md:mt-0'>
                    <img className='w-full h-60' src={clamping5} alt="" />
                    <h3 className='text-2xl p-3'>Practice Speaking Skills</h3>
                    <p className='px-4 pb-5'>One of a kind platform where you get to practise your speaking skills and not just be the audience in some lecture.</p>
                </div>


            </div>

            <div className='text-center mt-20'>
                <button className="btn border-none  bg-[#FF736A] text-white rounded-3xl">Book a trial</button>

            </div>


        </div>
    );
};

export default ClampingoSection;
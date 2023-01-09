import React from 'react';
import resources1 from '../../images/resources1.png'
import resources2 from '../../images/resources2.png'
import resources3 from '../../images/resources3.png'
import resources4 from '../../images/resources4.png'

const ResourcesSection = () => {
    return (
        <div className='md:px-40 px-5 mx-auto my-20'>
            <h1 className='justify-start text-3xl font-bold mb-10'>Latest News and Resources</h1>

            <div className='md:grid md:grid-cols-5 gap-10'>
                <div className='md:col-span-2 mb-5 md:mb-0'>
                    <img className='w-full' src={resources1} alt="" />
                    <h3 className='text-2xl font-semibold mt-5'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                    <p className='text-[#808F93] my-4'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                    <a className='underline' href="#">Read More</a>
                </div>


                <div className='md:col-span-3'>
                    <div className='md:flex gap-5'>
                        <img className='w-full' src={resources2} alt="" />
                        <div>
                            <h3 className='text-2xl font-semibold '>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                            <p className='text-[#808F93] my-4'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                            <a className='underline' href="#">Read More</a>
                        </div>
                    </div>
                    <div className='md:flex gap-5 my-8'>
                        <img className='w-full' src={resources3} alt="" />
                        <div>
                            <h3 className='text-2xl font-semibold '>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                            <p className='text-[#808F93] my-4'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                            <a className='underline' href="#">Read More</a>
                        </div>
                    </div>
                    <div className='md:flex gap-5'>
                        <img className='w-full' src={resources4} alt="" />
                        <div>
                            <h3 className='text-2xl font-semibold '>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                            <p className='text-[#808F93] my-4'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                            <a className='underline' href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className='text-center my-10'>
                <button className="btn border-[#FF736A] px-10 bg-white text-[#FF736A] hover:text-white rounded-3xl ml-5">VISIT BLOG</button>

            </div>

        </div>
    );
};

export default ResourcesSection;
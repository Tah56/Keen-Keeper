import React from 'react';

const TotalFriendSection = () => {
    return (
        <div className='mt-10 w-10/12 mx-auto border-b-black/10 border-b '>
            <div className=' flex flex-col md:flex-row   gap-6 justify-center items-center text-center  py-20 '>
                <div className='shadow-xl p-8 rounded-xl w-1/5'>
                    <h2 className='font-semibold text-3xl  text-[#244D3F]'>10</h2>
                    <p className='text-lg text-[#64748B]'>Total Friends</p>
                </div>
                <div className='shadow-xl p-8  rounded-xl w-1/4'>
                    <h2 className='font-semibold text-3xl text-[#244D3F]'>10</h2>
                    <p className='text-lg text-[#64748B]'>On Track</p>
                </div>
                <div className='shadow-xl p-8  rounded-xl w-1/4'>
                    <h2 className='font-semibold text-3xl text-[#244D3F]'>10</h2>
                    <p className='text-lg text-[#64748B]'>Need Attention</p>
                </div>
                <div className='shadow-xl  p-8  rounded-xl w-1/4'>
                    <h2 className='font-semibold text-3xl text-[#244D3F]'>10</h2>
                    <p className='text-lg text-[#64748B]'>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default TotalFriendSection;
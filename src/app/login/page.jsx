import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div className='container mx-auto px-40'>
            <div className='grid grid-cols-2 gap-12'>
                <div>
                    <Image src="/assets/images/login/login.svg" width={460} height={460} />
                </div>
                <div className='border-[1px] rounded-lg border-[#d0d0d0] px-12'>
                    <h6 className='text-4xl font-semibold text-center text-primary mt-16 mb-5'>Login</h6>
                    <label className='text-[#444] text-lg font-semibold' htmlFor="email">Email</label> <br />
                    <input className='border-[1px] rounded-[10px] border-[#d0d0d0] p-3 mt-2 w-full' type="email" name="email" id="" placeholder='Your email' />
                    <br />
                    <br />
                    <label className='text-[#444] text-lg font-semibold' htmlFor="password">Confirm Password</label> <br />
                    <input className='border-[1px] rounded-[10px] border-[#d0d0d0] p-3 mt-2  w-full' type="password" name="password" id="" placeholder='Your Password' />
                    <button className='btn btn-primary w-full text-lg mt-8'>Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Page;
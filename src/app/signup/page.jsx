"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Page = () => {

  const handleSignUp = async () => {

  }

  return (
    <div className='container mx-auto px-40 mb-12'>
      <div className='grid grid-cols-2 gap-12 items-center'>
        <div>
          <Image alt='signup' src="/assets/images/login/login.svg" width={460} height={460} />
        </div>
        <div className='border-[1px] rounded-lg border-[#d0d0d0] px-12'>
          <h6 className='text-4xl font-semibold text-center text-primary mt-16 mb-5'>Sign Up</h6>
          <form onSubmit={handleSignUp} action="">
            <label className='text-[#444] text-lg font-semibold' htmlFor="name">Name</label> <br />
            <input className='border-[1px] rounded-[10px] border-[#d0d0d0] p-3 mt-2 w-full' type="text" name="name" id="" placeholder='Your name' /><br /><br />
            <label className='text-[#444] text-lg font-semibold' htmlFor="email">Email</label> <br />
            <input className='border-[1px] rounded-[10px] border-[#d0d0d0] p-3 mt-2 w-full' type="email" name="email" id="" placeholder='Your email' />
            <br />
            <br />
            <label className='text-[#444] text-lg font-semibold' htmlFor="password">Confirm Password</label> <br />
            <input className='border-[1px] rounded-[10px] border-[#d0d0d0] p-3 mt-2  w-full' type="password" name="password" id="" placeholder='Your password' />
            <button type='submit' className='btn btn-primary w-full text-lg mt-8'>Sign Up</button>
          </form>
          <h6 className='text-lg font-medium text-center text-[#444] mt-8'>Or Sign Up with</h6>
          <div className='flex items-center gap-3 justify-center py-8'>
            <button className='btn btn-circle text-[#3b5998] text-2xl'><FaFacebookF /></button>
            <button className='btn btn-circle  text-[#0a66c2] text-2xl'><FaLinkedinIn /></button>
            <button className='btn btn-circle text-2xl'><FcGoogle /></button>
          </div>
          <h5 className='text-lg text-center text-[#d0d0d0] mb-16'>Already Have an account? <Link href={'/login'} > <span className='text-primary font-semibold hover:underline'>Sign In </span></Link>  </h5>
        </div>
      </div>
    </div>
  );
};

export default Page;
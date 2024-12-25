import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='container mx-auto mt-12'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='relative'>
                    <Image alt="" src="/assets/images/about_us/person.jpg" width={490} height={580} className='rounded-lg shadow-2xl'></Image>
                    <Image alt="" src="/assets/images/about_us/parts.jpg" width={327} height={332} className='rounded-lg shadow-2xl border-8 absolute right-16 top-1/2'></Image>
                </div>
                <div>
                    <p className='text-xl font-semibold text-primary'>About Us</p>
                    <h2 className='text-5xl font-semibold text-[#151515] w-[370px] mt-5'>We are qualified & of experience in this field</h2>
                    <p className='mt-8 text-[#737373] w-[440px] text-justify'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br />
                    <br />
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                    <button className='btn btn-primary mt-10'>Get More Info</button>

                </div>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import { services } from '@/lib/Services';
import ServicesCard from '../cards/ServicesCard';

const Services = () => {
    return (
        <div className='mt-12'>
            <div className='text-center'>
                <p className='text-xl font-semibold text-primary'>Service</p>
                <h2 className='text-5xl font-semibold text-[#151515] mt-4'>Our Service Area</h2>
                <p className='mt-5 text-[#737373] w-[640px] mx-auto text-center'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='container mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
services.map((service)=>(
    <ServicesCard service={service} key={service._id}/>
))
                }
            </div>
        </div>
    );
};

export default Services;
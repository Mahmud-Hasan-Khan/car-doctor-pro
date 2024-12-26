import Image from 'next/image';
import React from 'react';

const ServicesCard = ({service}) => {
    const {img, title,price}= service || {};
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <Image className='rounded-lg' height={400} width={330} src={img} alt={title}/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-end flex items-center">
                        <p className='text-primary text-lg font-semibold'>Price: $ {price}</p>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
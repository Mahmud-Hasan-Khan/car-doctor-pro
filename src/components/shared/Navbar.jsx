import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoSearch } from "react-icons/go";

const Navbar = () => {
    const navItems = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Contacts",
            path: "/contacts"
        }
    ]

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link href={'/'}><Image alt='logo' src="/assets/logo.svg" height={60} width={100}></Image> </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className='flex items-center space-x-6'>
                    {
                        navItems.map((item) => (
                            <Link className='font-semibold text-[#444444] hover:text-primary duration-300 ' href={item.path} key={item.path} >{item.title}</Link>
                        ))
                    }
                </div>
            </div>
            <div className="navbar-end gap-8">
                <div className='flex space-x-3 items-center text-xl'>
                <HiOutlineShoppingBag />
                <GoSearch />
                </div>
                <Link href={'/login'} className="btn btn-outline btn-primary px-6">Appointment</Link>
            </div>
        </div>
    );
};

export default Navbar;
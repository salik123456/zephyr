'use client'
import React, { useState } from 'react';
import Logo from '@/public/Global/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
      <nav className={`bg-[#F7F8F8] relative mx-[2rem] lg:mx-[7rem] rounded-[${isOpen ? '20' : '93.826'}px] mt-[1rem] border-gray-200 ${isOpen ? 'dark:bg-gray-900' : ''}`}>

            <div className="flex flex-wrap items-center justify-between mx-auto p-4 lg:pl-12 lg:pr-0">
                <a href="/" className="flex lg:w-auto w-[40%] items-center space-x-3 rtl:space-x-reverse">
                    <Image src={Logo} className="w-full h-auto" alt=" Logo" />
                </a>
                <button
    onClick={toggleMenu}
    type="button"
    className="inline-flex items-center p-2 h-10 lg:w-10 w-[50%] justify-end lg:justify-center text-sm text-gray-500 rounded-lg md:hidden  "
    aria-controls="navbar-default"
    aria-expanded={isOpen ? 'true' : 'false'}
>
    <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
    {isOpen ? (
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 110 2 1 1 0 010-2zm0 14a1 1 0 110-2 1 1 0 010 2zM4.707 7.707a1 1 0 10-1.414 1.414l12 12a1 1 0 001.414-1.414l-12-12z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M15.707 8.707a1 1 0 10-1.414-1.414l-12 12a1 1 0 001.414 1.414l12-12z" clipRule="evenodd" />
        </svg>
    ) : (
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    )}
</button>

<div className={`w-full md:block md:w-[64%] ${isOpen ? '' : 'hidden'}`} id="navbar-default">
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
        <li>
            <Link href="/" className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0" aria-current="page">Home</Link>
        </li>
        <li>
            <Link href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">About</Link>
        </li>
        <li>
            <Link href="/gallery" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">Gallery</Link>
        </li>
        <li >
            <Link href='/contact' className="lg:hidden py-2 block px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                Contact Us
            </Link>
        </li>
        {/* Add more menu items here */}
    </ul>
</div>
<Link href='/contact' className='lg:flex hidden items-center bg-black absolute right-0 py-2 px-3 text-white h-full  md:border-0   custom-btn '>
    Contact Us
</Link>

            </div>
        </nav>
    );
};

export default Navbar;

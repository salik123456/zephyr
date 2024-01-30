'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [zoomIn, setZoomIn] = useState(false);

  useEffect(() => {
    setZoomIn(true);
  }, []);

  return (
    <div className='site-wrapper pt-[2rem] about-hero overflow-hidden'>
      <div className={`flex flex-col relative h-screen about-hero-img bg-cover bg-center justify-center p-10 rounded-[40px] ${zoomIn ? 'zoom-in' : ''}`} style={{backgroundImage: "url('/About/hero_img.jpg')"}}>
        <h1 className='lg:text-xxxl text-xxl text-white relative z-[2]'>About Us</h1>
        <p className='mt-4 lg:tex-base text-[14px]  text-white w-full lg:w-[65%] relative z-[2]'>Welcome to Zephyr, where luxury living meets unparalleled elegance. Our vision is to create an iconic landmark that stands as a testament to timeless architecture and modern luxury. Experience elegance. Experience sophistication. Experience Zephyr.</p>
        <Link href='#mission' className='mt-10 bg-white lg:tex-base text-[14px] text-black relative z-[2] w-fit p-4 rounded-[10px] font-bold'>Our Mission & Values</Link>
        <div className={`absolute left-0 top-0 w-full h-full bg-gradient-to-b from-[#00000000] to-black rounded-[40px] ${zoomIn ? 'gradient-zoom-in' : ''}`} />
      </div>
    </div>
  );
}

export default HeroSection;

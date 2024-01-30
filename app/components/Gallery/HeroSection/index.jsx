import Image from 'next/image'
import React from 'react'
import GalleryOne from '@/public/Gallery/galleryone.png'
import GalleryTwo from '@/public/Gallery/gallerytwo.png'
import GalleryThree from '@/public/Gallery/gallerythree.png'
import GalleryFour from '@/public/Gallery/galleryfour.png'
import GalleryFive from '@/public/Gallery/galleryfive.png'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className='site-wrapper'>
      <div className='flex flex-col lg:flex-row justify-between '>
        <div className='lg:w-[49%] w-full relative'>
            <Image src={GalleryOne} alt='gallery-one' />
            <Link href='/contact' className='absolute  bottom-[3%] left-[3%] mt-10 bg-white animated-link text-black  z-[2] w-fit  p-4 rounded-[10px] font-bold '>Book Now</Link>
            <Link href='#gallery' className='absolute hover-container flex items-center bottom-[3%] right-[3%] mt-10  text-white  z-[2] w-fit  p-4 rounded-[10px] font-bold '><p className='mr-2'> View More</p> <FaArrowRight className='arrow-icon'/></Link>
            </div>
            <div className='flex flex-row mt-6 lg:mt-0  justify-between flex-wrap w-full lg:w-[49%] '>
            <div className='lg:w-[47%] w-[49%]   '>
<Image src={GalleryTwo} alt='gallerytwo' className='scale-anim-v3' />
            </div>
            <div className='lg:w-[47%] w-[49%]  '>
<Image src={GalleryThree} alt='gallerythree' className='scale-anim-v3' />
            </div>
            <div className='lg:w-[47%] w-[49%] mt-2 lg:mt-2  '>
<Image src={GalleryFour} alt='galleryfour' className='scale-anim-v3'/>
            </div>
            <div className='lg:w-[47%] w-[49%] mt-2 lg:mt-2  '>
<Image src={GalleryFive} alt='galleryfive' className='scale-anim-v3' />
            </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection

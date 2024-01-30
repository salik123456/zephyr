import Image from 'next/image'
import Link from 'next/link'
import ContactBg from '@/public/Contact/contact-bg.png'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='site-wrapper contact-hero-sec lg:p-auto '>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div className='lg:w-1/2 w-full lg:h-auto h-[60vh] relative border-check justify-center flex flex-col p-6 bg-cover contact-left' style={{backgroundImage: "url('/Contact/hero-img.jpg')"}}>
<h1 className='lg:text-xxxl text-xxl text-center lg:text-left text-white relative z-[2] font-semibold leading-[1.1]'>Contact Us</h1>
{/* <Link href='/contact' className='   mt-10 bg-white text-black  z-[2] w-fit  p-4 rounded-[10px] font-bold '>Book Now</Link> */}
        <div className='absolute left-0 w-full h-full top-0 bg-[#000000cf] contact-bg border-same' />
            </div>

            <div className='lg:w-1/2 w-full lg:block hidden '>
                <Image src={ContactBg} alt='contact-bg' className='contact-border'/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection

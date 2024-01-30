import React from 'react'
import Heroleft from '@/public/Home/Hero/heroleft.png'
import HeroRight from '@/public/Home/Hero/heroright.png'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='site-wrapper hero-section'>
      <div className='flex flex-col items-center lg:flex-row justify-between'>
        <div className='lg:w-[60%] w-full'>
<h1 className='lg:text-xxxl text-[28px] font-medium leading-[1.3]' data-aos="fade-right">Seamless Stays,
  <br/> Effortless Booking
</h1>
        </div>

        <div className='lg:w-[40%] lg:mt-0 mt-2 w-full'>
<p data-aos="fade-left">
  Dive into a world of comfort and convenience as we connect you with the finest hotels,ensuring a perfect gateway tailored to your preferences.
</p>
        </div>
      </div>
      <div className='lg:flex-row flex-col flex items-start mt-10 justify-between'>
  <div className='lg:w-[30%] w-full'>
    <Image src={Heroleft} alt="heroleft" data-aos="zoom-in" className='w-full h-auto rounded-[20px]' />
  </div>

  <div className='lg:w-[67%] w-full flex flex-col justify-between'>
    <div className='h-full'>
      <Image src={HeroRight} data-aos="zoom-in" alt="heroright" className='w-full hidden lg:flex h-auto rounded-[20px]' />
    </div>
    <div className='w-full p-4 mt-[5%] bg-[#80808017] h-full rounded-[10px]'>
      <p className='font-bold text-xl'>Zephyr Tower</p>
      <div className='mt-4 flex lg:flex-row flex-col justify-between'>
        <div>
          <p>Floor 24, 2405 Zephyr Tower, <br/> Al Reem Island, Abu Dhabi</p>
        </div>
        <div className='mt-3 lg:mt-0'>
          <p>Single Family</p>
          <p>2 Unit Available</p>
        </div>
        <div className='mt-3 lg:mt-0'> 
          <p>Type ISO</p>
          <p>5000 sqft </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default HeroSection

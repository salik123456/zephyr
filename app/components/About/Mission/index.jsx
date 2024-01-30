import Image from 'next/image'
import React from 'react'
import AboutImg from '@/public/About/aboutimg.jpg'

const MissionSection = () => {
    return (
        <div className='site-wrapper about-mission lg:pr-0' id='mission'> 
            <div className='flex flex-col lg:flex-row items-center '>
                <div class="flex-col w-full lg:w-1/2"  ><p class=" text-[10px] lg:text-[14px]" data-aos="fade-right">ZEPHYR'S GOAL</p><h2 class="mt-2 text-[28px] lg:text-[38px] font-semibold">Our Mission & Vision</h2><p class="mt-2 w-full lg:tex-base text-[14px] lg:w-[85%]"> 
At Zephyr, we're dedicated to redefining luxury living in Reem Island, Abu Dhabi. Our mission: meticulous attention to detail, unparalleled craftsmanship, and exceptional residential experiences. We aim to set new standards of sophistication and elegance, crafting iconic landmarks that offer refined living. Guided by integrity, innovation, and excellence, we consistently deliver quality, reliability, and timeless beauty..
                </p></div>

                <div className='lg:w-1/2 mt-10 lg:mt-0 w-full'>
                    <Image src={AboutImg} alt='ABOUT-IMG' className='rounded-[20px]' data-aos="fade-right" />
                </div>
            </div>


        </div>
    )
}

export default MissionSection

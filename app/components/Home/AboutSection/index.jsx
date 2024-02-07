import React from 'react'
import { FaRegBuilding } from "react-icons/fa";
import { IoGolfOutline } from "react-icons/io5";
import { GiPathDistance } from "react-icons/gi";
import { CiSquareAlert } from "react-icons/ci";

const AboutSection = () => {
  return (
    <div className='site-wrapper bg-[#80808026]'>
      <div className='lg:flex-row flex-col flex justify-between '>
<div className='lg:w-[25%] w-full'>
     <div className='border ab-btn border-black w-fit p-2 px-6 rounded-[20px]'>
        About Us
     </div>
</div>
<div className='lg:w-[75%] w-full mt-6 lg:mt-0'>
<p className='lg:text-xl text-[14px]'><b className='lg:text-[28px] text-[18px]'>Zephyr-</b>Your gateway to modern living in Reem Island, Abu Dhabi. Embrace the breeze of elegance and tranquility with panoramic waterfront vistas. Experience unparalleled luxury in our contemporary residential enclave. Elevate your lifestyle at Zephyr - where every moment resonates with serenity.</p>


<div className='border lg:my-20 my-10 border-[#99999942]'/>

<div className='icons-sec flex flex-row  flex-wrap justify-between'>
<div className='icon-box flex flex-col w-[48%] lg:w-[23%]'>
<FaRegBuilding style={{ width: '20%' , height:'100%' }} className='icon-img' data-aos="zoom-out" />

<h3 className='font-bold mt-4 lg:mt-4 text-xl lg:text-[28px]'>
    3,500-acre
</h3>

<p className='font-light mt-1 lg:tex-base text-[12px] lg:mt-4'> Multi-purpose development</p>
</div>

<div className='icon-box flex flex-col   w-[48%] lg:w-[23%]'>
<IoGolfOutline style={{ width: '20%' , height:'100%' }} className='icon-img' data-aos="zoom-out" />

<h3 className='font-bold mt-4 lg:mt-4 text-xl lg:text-[28px]'>
    10-Hole
</h3>

<p className='font-light mt-1 lg:tex-base text-[12px] lg:mt-4'> Championship Golf Course</p>
</div>

<div className='icon-box flex flex-col mt-8 lg:mt-0 w-[48%] lg:w-[23%]'>
<GiPathDistance style={{ width: '20%' , height:'100%' }} className='icon-img' data-aos="zoom-out" />

<h3 className='font-bold mt-4 lg:mt-4 text-xl lg:text-[28px]'>
    30 km
</h3>

<p className='font-light mt-1 lg:tex-base text-[12px] lg:mt-4'> Elite Bicycle route</p>
</div>

<div className='icon-box flex flex-col mt-8 lg:mt-0 w-[48%] lg:w-[23%]'>
<CiSquareAlert style={{ width: '20%' , height:'100%' }} className='icon-img' data-aos="zoom-out" />

<h3 className='font-bold mt-4 lg:mt-4 text-xl lg:text-[28px]'>
    150,000 sqm
</h3>

<p className='font-light mt-1 lg:tex-base text-[12px] lg:mt-4'> Zephyr Supreme Park </p>
</div>
</div>
</div>
      </div>
    </div>
  )
}

export default AboutSection

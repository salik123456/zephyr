import React from 'react'
import { MdCleaningServices } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { IoRestaurantSharp } from "react-icons/io5";
import { TbMassage } from "react-icons/tb";

const WhyChooseUs = () => {
  return (
    <div className='site-wrapper'>
  <h2 className='mt-2 text-[28px] lg:text-[38px] font-semibold text-center'>Why Choose us?</h2>

  <div className='mt-10 flex flex-col lg:flex-row justify-between'>
<div className='icon-box scale-anim-v2 p-6 rounded-[8px] flex items-center w-full lg:w-[32%] bg-[#80808026]'>
    <div className='flex flex-col'>
<h3 className='font-bold text-xl'>Daily Clean Services</h3>
<p className='font-light mt-2 text-[14px] w-[85%]'>We believe cleanliness is the key for success.</p>
</div>
<div>
<MdCleaningServices style={{ width: '45px' , padding:'0.8rem', borderRadius:'50%', height:'100%', backgroundColor:'black', color:'white' }} />
</div>
</div>

<div className='icon-box p-6 scale-anim-v2 rounded-[8px] flex items-center w-full  lg:mt-0 mt-3 lg:w-[32%] bg-[#80808026]'>
    <div className='flex flex-col'>
<h3 className='font-bold text-xl'>Swimming Pool</h3>
<p className='font-light mt-2 text-[14px] w-[85%]'>We have swimming pool and the trainers</p>
</div>
<div>
<FaSwimmingPool style={{ width: '45px' , padding:'0.8rem', borderRadius:'50%', height:'100%', backgroundColor:'black', color:'white' }} />
</div>
</div>


<div className='icon-box scale-anim-v2 p-6 rounded-[8px] flex items-center mt-3 lg:mt-0 w-full lg:w-[32%] bg-[#80808026]'>
    <div className='flex flex-col'>
<h3 className='font-bold text-xl'>Indoor Gym</h3>
<p className='font-light mt-2 text-[14px] w-[85%]'>We offer indoor gym with trainers.</p>
</div>
<div>
<CgGym style={{ width: '45px' , padding:'0.8rem', borderRadius:'50%', height:'100%', backgroundColor:'black', color:'white' }} />
</div>
</div>
  </div>

  <div className='lg:mt-[2%] mt-0 flex flex-col lg:flex-row justify-center'>
  <div className='icon-box scale-anim-v2 p-6 rounded-[8px] flex items-center w-full lg:mt-0 mt-3 lg:w-[32%] bg-[#80808026]'>
    <div className='flex flex-col'>
<h3 className='font-bold text-xl'>Top Rated Restaurants</h3>
<p className='font-light mt-2 text-[14px] w-[85%] '>Top rated restaurants are located in our building.</p>
</div>
<div>
<IoRestaurantSharp  style={{ width: '45px' , padding:'0.8rem', borderRadius:'50%', height:'100%', backgroundColor:'black', color:'white' }} />
</div>
</div>

<div className='icon-box ml-0 lg:ml-[2%] p-6 rounded-[8px] flex items-center w-full lg:mt-0 mt-3 lg:w-[32%] bg-[#80808026]'>
    <div className='flex flex-col'>
<h3 className='font-bold text-xl'>Spa Facility</h3>
<p className='font-light mt-2 text-[14px] w-[85%]'>We offer spa facility to make you feel relaxed</p>
</div>
<div>
<TbMassage  style={{ width: '45px' , padding:'0.8rem', borderRadius:'50%', height:'100%', backgroundColor:'black', color:'white' }} />
</div>
</div>
  </div>


    </div>
  )
}

export default WhyChooseUs


import React from 'react';

import Image from 'next/image';
import PropertyOne from '@/public/Home/Design/propertyone.png'
import PropertyTwo from '@/public/Home/Design/propertytwo.png'
import PropertyThree from '@/public/Home/Design/propertythree.png'
import PropertyFour from '@/public/Home/Design/propertyfour.png'
import PropertyFive from '@/public/Home/Design/propertyfive.png'

const DesignSection = () => {



    return (
        <div className="site-wrapper property-sec">
            <div className='flex items-center justify-between lg:pr-[7rem]'>
                <div className='flex-col'>
                    <p className='lg:text-[14px] text-[10px]'>AREAS ACROSS THE TOWN</p>
                    <h2 className='mt-2 text-[24px] font-semibold'>Neighborhood Properties</h2>
                    {/* <p className='mt-2 w-[60%]'> Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p> */}
                </div>

            </div>
        
   <div className='flex justify-between lg:flex-row flex-col w-full mt-10'>
   <div className='lg:w-[27%] w-full bg-cover bg-anim bg-center relative min-h-[50vh]' >
    <Image className='absolute w-full h-full left-0 top-0' src={PropertyOne} alt='propertone' />
    <div className='absolute left-0 top-0 h-full w-full z-2 bg-[#0000006b] rounded-[25px]'/>
<div className='absolute z-3 bottom-[5%] left-[10%]' data-aos="fade-up">
<h2 className='text-xxxl text-white font-bold'>106</h2>
<p className='text-white mt-1 text-lg'>Marina Square</p>
</div>
</div>

<div className='lg:w-[27%] w-full mt-4 lg:mt-0 bg-cover bg-center bg-anim relative min-h-[50vh]' >
    <Image className='absolute w-full h-full left-0 top-0' src={PropertyTwo} alt='propertone' />
    <div className='absolute left-0 top-0 h-full w-full z-2 bg-[#0000006b] rounded-[25px]'/>
<div className='absolute z-3 bottom-[5%] left-[10%]' data-aos="fade-up">
<h2 className='text-xxxl text-white font-bold'>146</h2>
<p className='text-white mt-1 text-lg'>Tala Tower</p>
</div>
</div>



<div className='lg:w-[38%] w-full lg:mt-0 mt-4 bg-cover bg-anim bg-center relative min-h-[50vh]' >
    <Image className='absolute w-full h-full left-0 top-0' src={PropertyThree} alt='propertone' />
    <div className='absolute left-0 top-0 h-full w-full z-2 bg-[#0000006b] rounded-[25px]'/>
<div className='absolute z-3 bottom-[5%] left-[10%]' data-aos="fade-up">
<h2 className='text-xxxl text-white font-bold'>11</h2>
<p className='text-white mt-1 text-lg'>The Gate Towers</p>
</div>
</div>
   </div>

   <div className='flex lg:flex-row flex-col justify-between w-full mt-0 lg:mt-10'>
   <div className='lg:w-[36%] w-full mt-4 bg-anim bg-cover bg-center relative min-h-[50vh]' >
    <Image className='absolute w-full h-full left-0 top-0' src={PropertyFour} alt='propertone' />
    <div className='absolute left-0 top-0 h-full w-full z-2 bg-[#0000006b] rounded-[25px]'/>
<div className='absolute z-3 bottom-[5%] left-[10%]' data-aos="fade-up">
<h2 className='text-xxxl text-white font-bold'>216</h2>
<p className='text-white mt-1 text-lg'>Beach Towers</p>
</div>
</div>




<div className='lg:w-[60%] w-full mt-4 bg-anim bg-cover bg-center relative min-h-[50vh]' >
    <Image className='absolute w-full h-full left-0 top-0' src={PropertyFive} alt='propertone' />
    <div className='absolute left-0 top-0 h-full w-full z-2 bg-[#0000006b] rounded-[25px]'/>
<div className='absolute z-3 bottom-[5%] left-[10%]' data-aos="fade-up">
<h2 className='text-xxxl text-white font-bold'>31</h2>
<p className='text-white mt-1 text-lg'>Sun Tower</p>
</div>
</div>
   </div>
       
        </div>
    );
};

export default DesignSection;

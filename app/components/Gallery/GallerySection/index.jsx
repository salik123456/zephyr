import React from 'react'
import GalleryOne from '@/public/Gallery/galleryone.png'
import GalleryTwo from '@/public/Gallery/gallerytwo.png'
import GalleryThree from '@/public/Gallery/gallerythree.png'
import GalleryFour from '@/public/Gallery/galleryfour.png'
import GalleryFive from '@/public/Gallery/galleryfive.png'
import GallerySix from '@/public/Gallery/gallerysix.png'

import Image from 'next/image'

const GallerySection = () => {
  return (
    <div className='site-wrapper'>
      <h2 class="mt-2 text-[38px] font-semibold text-center">Our Gallery</h2>
      <div className='mt-10 flex flex-row flex-wrap justify-between'>
        <div className='lg:w-[31%] w-[44%] m-2'>
        <Image src={GalleryTwo} alt='gallery-one' className='w-full scale-anim-v3'/>
        </div>
        <div className='lg:w-[31%] w-[44%] m-2'>
        <Image src={GalleryOne} alt='gallery-two' className='w-full scale-anim-v3'/>
        </div>
        <div className='lg:w-[31%] w-[44%] m-2'>
        <Image src={GalleryThree} alt='gallery-three' className='w-full scale-anim-v3'/>
        </div>
        <div className='lg:w-[31%] w-[44%] m-2'>
        <Image src={GalleryFour} alt='gallery-four' className='w-full scale-anim-v3'/>
        </div>
        <div className='lg:w-[31%] w-[44%] m-2'>
        <Image src={GalleryFive} alt='gallery-five' className='w-full scale-anim-v3'/>
        </div>
        <div className='lg:w-[31%] w-[44%] m-2'>
        <Image src={GallerySix} alt='gallery-six' className='w-full scale-anim-v3'/>
        </div>
      </div>
    </div>
  )
}

export default GallerySection


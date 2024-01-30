'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import GalleryOne from '@/public/Home/Gallery/galleryone.png';
import GalleryTwo from '@/public/Home/Gallery/gallerytwo.png';
import GalleryThree from '@/public/Home/Gallery/gallerythree.png';
import GalleryFour from '@/public/Home/Gallery/galleryfour.png';
import { FaArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const GallerySection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [rightColumnImages, setRightColumnImages] = useState([]);

    const images = [GalleryOne, GalleryTwo, GalleryThree, GalleryFour];

    useEffect(() => {
        // Update the right column images when the currentImageIndex changes
        setRightColumnImages(images.filter((_, index) => index !== currentImageIndex));
    }, [currentImageIndex]);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className='site-wrapper gallery-sec'>
            <div className='flex lg:flex-row flex-col justify-between'>
                <div className='flex flex-row lg:w-[63%] w-full justify-between'>
                    <div className='flex items-center flex-col  w-full '>
                        <div className='flex-row flex justify-between items-center w-full'>
                            <div className='flex-col w-[48%]'>
                            <h2 className='mt-2 text-[24px] font-semibold'>Our Gallery</h2>
                            <p className='mt-2 w-full lg:text-base text-[14px] lg:w-[80%]'> Let's have a glimpse of our beautiful place. </p>
                            </div>
                            <div className='flex cursor-pointer flex-row items-center hover-container'>
                                <p className='lg:text-base text-[14px]'>View More</p>
                                <FaArrowRight className='ml-2 arrow-icon' />
                            </div>
                        </div>
                        <div className='mt-4  w-full'>
                            <Image className='w-full lg:max-h-[90vh] img-anim-v2 lg:min-h-[90vh]' src={images[currentImageIndex]} alt={`gallery-${currentImageIndex + 1}`} />
                            <div className='arrow-btns w-[20%] mx-auto mt-10 items-center justify-center flex '>
                                <FaCircleArrowLeft style={{ width: '25%' , height:'100%', cursor: 'pointer' }} onClick={handlePreviousImage} />
                                <FaCircleArrowRight style={{ width: '25%' , height:'100%' , marginLeft: '1rem' , cursor: 'pointer' }} onClick={handleNextImage} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-col flex-row lg:justify-normal justify-between w-full lg:w-[33%]">
  {rightColumnImages.map((image, index) => (
    <Image
      key={index}
      src={image}
      style={{marginTop: '1rem'}}
      className={`mt-${index === 0 ? '0' : '8'} lg:w-full w-[29%] img-anim-v3 lg:min-h-[46vh] lg:max-h-[46vh]`}
    />
  ))}
</div>

            </div>
        </div>
    );
}

export default GallerySection;

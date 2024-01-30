'use client'
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';

const Carousel = () => {
    const data = [
        {
            imageUrl: '/Home/Product/productone.png',
            heading: 'River Bay',
            description: 'The beautiful river',
            price: 'AED 10,000',
            location: '160m2 Living Area',
        },
        {
            imageUrl: '/Home/Product/producttwo.png',
            heading: 'Alexa Jewel Bay',
            description: 'The alexa jewel bay is famous for its beauty',
            price: 'AED 50,000',
            location: '760m2 Living Area',
        },
        {
            imageUrl: '/Home/Product/productfive.png',
            heading: 'Arabian Bay',
            description: 'The arab national bay',
            price: 'AED 90,000',
            location: '260m2 Living Area',
        },
        {
            imageUrl: '/Home/Product/productfour.png',
            heading: 'Emirati Bay',
            description: 'The national bay',
            price: 'AED 40,000',
            location: '860m2 Living Area',
        },
        {
            imageUrl: '/Home/Product/productfour.png',
            heading: 'Sweet Precious Bay',
            description: 'It is also called blue bay',
            price: 'AED 90,000',
            location: '360m2 Living Area',
        },
        // Add more data objects here
    ];

    const [currentIndex, setCurrentIndex] = useState(0);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5, // Default slides to show
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // Tablet breakpoint
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600, // Mobile breakpoint
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="site-wrapper project-carousel">
            <div className='flex items-center lg:flex-row flex-col justify-between lg:pr-[7rem]'>
                <div className='flex-col'>
                    <p className='text-[10px] lg:text-[14px]'>CHECKOUT OUR NEW</p>
                    <h2 className='mt-2 text-[24px] font-semibold'>Off-plan Latest Launches</h2>
                    <p className='mt-2 w-full lg:tex-base text-[14px] lg:w-[60%]'>  Explore our latest off-plan launches, showcasing the pinnacle of modern living.  </p>
                </div>
                <Link href="/gallery" className='flex text-[14px] lg;text-base hover-container mt-4 lg:mt-0 cursor-pointer flex-row items-center'>
<p>Show All properties</p>
<FaArrowRight className='ml-2 arrow-icon' />
<Image/>
                </Link>
            </div>
            {/* <button onClick={goToPrevSlide}>Prev</button> */}
            <div className='mt-6'>
                <Slider {...settings}>
                    {data.map((item, index) => (
                        <div key={index} className="slide project-slide w-[80%]">
                            <Image src={item.imageUrl} alt={item.heading} width={100} height={100} className='w-full slide-img h-auto'/>
                            <h2 className='font-medium text-lg lg:text-[26px] leading-[1.3] mt-4'>{item.heading}</h2>
                            <p className='mt-1 text-[12px] lg:text-[14px] text-[#727171]'>{item.description}</p>
                            <div className="price-location mt-2 flex justify-between">
                                <span className="price text-[16px] lg:text-[24px] font-bold">{item.price}</span>
                                <span className="location p-2 px-4 text-[8px] lg:text-[12px] bg-[#80808057] rounded-[10px]">{item.location}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {/* <button onClick={goToNextSlide}>Next</button> */}
        </div>
    );
};

export default Carousel;

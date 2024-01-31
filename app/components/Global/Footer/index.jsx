import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import FooterImg from '@/public/Global/footer_bg.jpg'
import Image from 'next/image';
const Footer = () => {
  return (
    <>
<div className='site-wrapper relative footer-wrapper bg-cover bg-center pb-[5rem]' style={{backgroundImage: "url('/Global/footer_bg.jpg')"}}>
<div className='absolute black left-0 top-0 w-full h-full bg-[#00000094]'/>
      <div className='flex justify-between relative z-[2] lg:flex-row flex-col'>
        <div className='lg:w-[20%] text-white'> <p>@Zephyr- All Rights Reserved.</p></div>

       <div className='flex lg:flex-row footer-menu flex-col mt-6 lg:mt-auto justify-between lg:w-[36%]'>
<Link href='/' className='text-white scale-anim'>Home</Link>
<Link href='/about' className='text-white scale-anim lg:mt-0 mt-3 '>About Us</Link>
<Link href='/gallery' className='text-white scale-anim lg:mt-0 mt-3 '>Gallery</Link>
<Link href='/contact' className='text-white scale-anim lg:mt-0 mt-3 '>Contact</Link>

       </div>

       <div className='flex w-[45%] lg:w-[15%] mt-6 lg:mt-0'>
<a href='#' className='w-[70%] h-full text-white scale-anim'><FaFacebookF/></a>
<a href='#' className='ml-2 w-[70%] h-full text-white scale-anim'><AiFillInstagram/></a>
<a href='#' className='ml-2 w-[70%] h-full text-white scale-anim'><FaYoutube/></a>
<a href='#' className='ml-2 w-[70%] h-full text-white scale-anim'><BsTwitterX/></a>
       </div>
        </div>
        <div className='mx-auto flex justify-center h-full mb-0 mt-6 lg:my-10'>
    <h2 className='anim-text relative z-[2] text-center'>ZEPHY<span className='last-letter'>R</span></h2> 
</div>

    </div>
   
{/* <Image src={FooterImg} alt='footer-img w-full' /> */}
</>
  )
}

export default Footer

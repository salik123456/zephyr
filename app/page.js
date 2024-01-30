'use client'
import React from 'react'
import HeroSection from './components/Home/HeroSection'
import AboutSection from './components/Home/AboutSection'
import CardSection from './components/Home/CardSection'
import '@/styles/Home.css'
import DesignSection from './components/Home/DesignSection'
import GallerySection from './components/Home/GallerySection'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const HomeWrapper = () => {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS
      offset: 100,
      duration: 1000,
      easing: 'ease-in-out',
      delay: 200,
    });
  }, []);
  return (
    <div className='home-wrapper'>
    <HeroSection/>
    <AboutSection/>
    <CardSection/>
    <DesignSection/>
    <GallerySection/>
    </div>
  )
}

export default HomeWrapper

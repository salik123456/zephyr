import GallerySection from '@/app/components/Gallery/GallerySection'
import HeroSection from '@/app/components/Gallery/HeroSection'
import React from 'react'
import '@/styles/Gallery.css'

const Gallery = () => {
  return (
    <div className='gallery-wrapper'>
      <HeroSection/>
      <GallerySection/>
    </div>
  )
}

export default Gallery

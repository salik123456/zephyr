
import HeroSection from '@/app/components/Contact/HeroSection'
import React from 'react'
import '@/styles/Contact.css'
import FormSection from '@/app/components/Contact/FormSection'

const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <HeroSection/>
      <FormSection/>

    </div>
  )
}

export default Contact

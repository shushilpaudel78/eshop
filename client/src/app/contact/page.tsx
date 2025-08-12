import React from 'react'
import Footer from '@/common/Footer'
import Navbar from '@/common/Navbar'
import ContactForm from '@/components/contact/ContactForm'

const page = () => {
  return (
    <div className=' bg-purple-200'>
        <Navbar />
        <ContactForm />
        <Footer />

    </div>
  )
}

export default page
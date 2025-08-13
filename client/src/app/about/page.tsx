import React from 'react'
import Navbar from '@/common/Navbar';
import Footer from '@/common/Footer';
import Team from '@/components/about/Team';

const page = () => {
  return (
    <div>
        <Navbar />
        <Team />
        <Footer />

    </div>
  )
}

export default page
import Navbar from '@/common/Navbar'
import { Countergrid } from '@/components/home/Countergrid'
import Hero from '@/components/home/Hero'
import React from 'react'
import Footer from '@/common/Footer'
import { CartGrid } from '@/components/home/CartGrid'
import { ShowProduct } from '@/components/home/ShowProduct'



const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ShowProduct />
      <Countergrid />
      <CartGrid />
      <Footer />
    </div>
  )
}

export default page
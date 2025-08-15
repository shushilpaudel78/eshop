import React from 'react'
import Navbar from '@/common/Navbar';
import Footer from '@/common/Footer';
import Team from '@/components/about/Team';
import { AboutInfo } from '@/components/about/AboutInfo';
import CompanyHistory from '@/components/about/CompanyHistory';

const page = () => {
  return (
    <div>
        <Navbar />
        <AboutInfo />
        <Team />
        <CompanyHistory />
        <Footer />

    </div>
  )
}

export default page
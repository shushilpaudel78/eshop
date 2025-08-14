import React from 'react'
import Navbar from '@/common/Navbar';
import Footer from '@/common/Footer';
import { ShopingCartGroup } from '@/components/shop/ShopingCartGroup';
const page = () => {
    return (
        <div className=' bg-gray-50'>
            <Navbar />
            <ShopingCartGroup />
            <Footer />
        </div>
    )
}

export default page
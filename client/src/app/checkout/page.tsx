import Checkout from '@/components/checkout/Checkout'
import React from 'react'
import Navbar from '@/common/Navbar'

const page = () => {
    return (
        <div>
            <Navbar />
            <Checkout />
        </div>
    )
}

export default page
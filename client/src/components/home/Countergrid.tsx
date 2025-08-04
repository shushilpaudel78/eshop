import React from 'react'
import { Counter } from '@/common/Counter'

export const Countergrid = () => {
    return (
        <div className="w-full py-10">
            <div className='grid grid-cols-4 justify-center gap-8 p-8 '>
                <Counter number={1000} title="Happy Customers" symbol="+" />
                <Counter number={500} title="Products Sold" symbol="+" />
                <Counter number={300} title="New Arrivals" symbol="+" />
                <Counter number={150} title="Countries Served" symbol="+" />
            </div>
        </div>
    )
}

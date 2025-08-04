'use client'
import React from 'react'
import CountUp from 'react-countup'

type numberprops = {

  number:number;
  title:string;
  symbol:string;
}

export const Counter:React.FC<numberprops> = ({ number, title, symbol }) => {
  return (
    <>
      <div className="flex flex-col w-full py-10 items-center bg-gradient-to-r from-purple-600 to-pink-300 p-4 rounded-lg shadow-md">
        <div className="flex gap-2 bg-purple-300 px-3 py-5 rounded-lg shadow-lg items-center justify-center">
          <CountUp start={0} end={number} delay={2} className='font-frank font-bold  text-red-500 lg:text-[72px]  text-[30px] text-colorRed leading-[60px] '></CountUp>
          <p className='font-frank font-bold lg:text-[72px] sm:text-[50px] text-[30px] text--500 leading-[60px] '>{symbol}</p>
        </div>

        <p className='font-sans pt-3 font-semibold text-[20px] text-white '>{title}</p>
      </div>


    </>
  )
}


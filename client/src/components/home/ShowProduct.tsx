'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export const ShowProduct = () => {
    const products = [
        '/images/mobile1.png',
        '/images/mobile2.png',
        '/images/mobile3.png',
        '/images/mobile4.png',

    ];

    return (
        <div className=" w-full min-h-screen relative flex flex-col items-center justify-center  px-4 lg:py-20  ">

            <div className="absolute w-full h-full z-45 bg-purple-500 opacity-30">

            </div>

            <div className="absolute w-full h-full top-0 left-0 z-40 bg-purple-500 ">
                <div className="relative w-full h-full">
                    <Image
                        src="/images/leaf.jpg"
                        alt="Background Image"
                        fill
                        className="object-cover w-full h-full opacity-50"
                    />
                </div>

            </div>
            <div className="absolute w-full flex lg:py-10 py-5 px-2 lg:px-0 flex-col items-center justify-center z-50">
                <h1 className="text-3xl font-bold mb-4 text-white">Product Details</h1>
                <p className=" mb-6 text-white/80 text-center lg:text-start">This is where the product information will be shown.</p>

                {/* Swiper with built-in navigation */}
                <div className=" w-full flex justify-center ">
                    <div className="h-[400px] w-2/3 relative">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={10}
                            slidesPerView={2}
                            loop={false}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            navigation={true} // This enables Swiper's own navigation buttons
                            breakpoints={{
                                320: { 
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                640: { 
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                1024: { 
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                1280: { 
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                            }}
                            className="w-full h-full"
                        >
                            {products.map((product, index) => (
                                <SwiperSlide key={index} className="flex relative justify-center items-center rounded-4xl px-5">
                                    <Image
                                        src={product}
                                        alt={`Product ${index + 1}`}
                                        // width={500}
                                        // height={500}
                                        fill
                                        className="object-contain rounded-xl shadow-xl overflow-hidden px-13"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

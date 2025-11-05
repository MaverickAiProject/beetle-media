'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function HeroSection2() {
    const images = [
        '/banners/banner2.webp',
        '/banners/banner3.webp',
        '/banners/banner4.webp',
        '/banners/banner5.webp',
    ]

    return (
        <div className="relative w-full bg-black pt-10 overflow-hidden">
            {/* Top Arc */}
            <div className="absolute top-0 left-0 w-full h-20 bg-black rounded-b-[100%] z-20"></div>

            {/* Swiper Carousel */}
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={4000}
                className="w-full"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full  overflow-hidden rounded-xl shadow-lg">
                            <img
                                src={src}
                                alt={`banner-${index}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Bottom Arc */}
            {/* <div className="absolute bottom-0 left-0 w-full h-20 bg-black rounded-t-[100%] z-20"></div> */}
        </div>
    )
}

export default HeroSection2

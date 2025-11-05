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
            <div className="absolute top-0 left-0 w-full h-15 sm:h-20 bg-black rounded-b-[100%] z-20"></div>
            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={4000}
                breakpoints={{
                    0: { slidesPerView: 3, spaceBetween: 10 },    
                    640: { slidesPerView: 3, spaceBetween: 15 },     
                    1024: { slidesPerView: 3, spaceBetween: 20 },   
                    1440: { slidesPerView: 4, spaceBetween: 20 },    
                }}
                className="w-full"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden shadow-lg">
                            <img
                                src={src}
                                alt={`banner-${index}`}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HeroSection2

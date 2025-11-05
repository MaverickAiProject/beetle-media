'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

export default function Testimonials({ testimonials = [] }) {
    return (
        <section className="relative bg-black text-white pb-14 sm:pt-10 px-3 overflow-hidden" id="testimonials">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.15),transparent_70%)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <p className="text-[#ff4d4d] uppercase tracking-widest font-semibold mb-3">
                    Testimonials
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                    What Our Clients Say
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-16">
                    Hear from creators and brands who built their OTT dreams with us.
                </p>

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="!overflow-visible"
                >
                    {testimonials.map((t, idx) => (
                        <SwiperSlide key={idx}>
                            <div
                                className="relative bg-[#0b0606] border border-[#2a1a1a] rounded-3xl py-8 px-8 shadow-lg h-full
                                           transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_35px_-10px_#ff0000aa]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-red-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                                <div className="relative z-10 mt-4">
                                    <h4 className="text-xl font-semibold">{t.userName}</h4>
                                    <p className="text-sm text-gray-400 mt-1">
                                        {t.designation}, {t.company}
                                    </p>

                                    <div className="flex justify-center mt-3 text-yellow-400 text-lg">
                                        ★★★★★
                                    </div>

                                    <hr className="my-4 border-t border-[#2a1a1a]" />

                                    <blockquote className="text-gray-300 text-[15px] leading-relaxed">
                                        “{t.message}”
                                    </blockquote>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

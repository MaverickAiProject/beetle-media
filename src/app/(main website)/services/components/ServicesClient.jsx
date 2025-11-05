'use client'
import React from 'react'
import WebsiteLayout from '@/components/website/WebsiteLayout'

export default function ServicesClient() {

    return (
        <WebsiteLayout>
            <div className='mb-10'>
                {/* Enhanced Hero Section */}
                <div className="w-full bg-gradient-to-r from-[#001a33] to-[#002244] py-12 md:py-14 text-white mb-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl mb-4 tracking-tight'>
                            Our Services
                        </h1>
                        <p className='max-w-2xl mx-auto text-md md:text-lg text-blue-100 opacity-90'>
                            Expert solutions tailored to your specific needs
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className='max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8'>
                </div>
            </div>
        </WebsiteLayout>
    )
}
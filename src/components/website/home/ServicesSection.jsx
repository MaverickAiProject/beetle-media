'use client'
import React from 'react'
import { Video, Upload, Layers, Wrench, Lightbulb } from 'lucide-react'

function ServicesSection() {
    const services = [
        {
            id: 1,
            title: 'Custom OTT Platform Development',
            icon: <Video size={42} className="text-yellow-300" />,
            desc: `End-to-end OTT app and website development for brands, creators, and production houses.`,
        },
        {
            id: 2,
            title: 'Content Publishing on Our Platform',
            icon: <Upload size={42} className="text-yellow-300" />,
            desc: `Creators can publish and monetize content on our OTT platform without building their own system.`,
        },
        {
            id: 3,
            title: 'Multi-OTT Aggregator Platform',
            icon: <Layers size={42} className="text-yellow-300" />,
            desc: `Launch a unified OTT hub offering multiple subscription bundles and seamless streaming.`,
        },
        {
            id: 4,
            title: 'OTT Maintenance & Support',
            icon: <Wrench size={42} className="text-yellow-300" />,
            desc: `Comprehensive maintenance, updates, and performance optimization for OTT systems.`,
        },
        {
            id: 5,
            title: 'OTT Consultation & Strategy',
            icon: <Lightbulb size={42} className="text-yellow-300" />,
            desc: `Guidance on OTT technology stack, monetization models, and scalable launch strategies.`,
        },
    ]

    return (
        <section className="bg-[#130b0b] text-white py-34 px-5 sm:px-10">
            <div className="max-w-6xl mx-auto text-center mb-14">
                <h2 className="text-4xl sm:text-5xl font-bold">Our Services</h2>
                <p className="text-gray-400 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
                    Empowering brands and creators with next-gen OTT solutions that drive engagement and growth.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
                {services.map((item) => (
                    <div
                        key={item.id}
                        className="relative bg-[#0b0606] border border-[#2a1a1a] rounded-3xl px-8 py-10 w-[300px] sm:w-[390px]
                                   shadow-lg overflow-hidden transition-all duration-500 hover:scale-[1.03] 
                                   hover:shadow-[0_0_40px_-10px_#ff0000aa] group"
                    >
                        {/* Background gradient hover glow */}
                        <div className="absolute inset-0 bg-gradient-to-b from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                        {/* Faint background number */}
                        <span className="absolute text-[100px] font-extrabold text-gray-700 opacity-5 top-2 right-4 select-none">
                            {item.id}
                        </span>

                        {/* Icon */}
                        <div className="mb-6">{item.icon}</div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>

                        {/* Description */}
                        <p className="text-gray-400 text-[15px] leading-relaxed mb-4">
                            {item.desc}
                        </p>

                        {/* Read more */}
                        {/* <button className="text-sm text-red-400 font-semibold flex items-center gap-2 hover:text-red-300 transition-colors">
                            Read More <span className="text-red-400 group-hover:translate-x-1 transition-transform">→</span>
                        </button> */}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ServicesSection

'use client'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

export default function WhyChooseUs() {
    return (
        <section className="relative bg-[#1a0f0f] text-white pt-24 pb-10 overflow-hidden" >
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

                <div className="lg:w-1/2 relative">
                    <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_-10px_#ff000055]">
                        <Image
                            src="/whychoose.webp"
                            alt="Why Choose Us"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover rounded-2xl"
                        />
                    </div>

                    <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#d3b981] opacity-70 rotate-45 rounded-xl blur-md"></div>
                    <div className="absolute top-16 left-8 w-20 h-20 bg-[#ff5555] opacity-80 rotate-12 rounded-xl blur-md"></div>
                </div>

               <div className="lg:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Why Choose <span className="text-[#ff4d4d]">Beetle</span>
                    </h2>

                    <p className="text-gray-300 leading-relaxed mb-5">
                        We help creators, studios, and media companies launch their own OTT platforms with stunning UI,
                        high performance, and complete monetization control. Whether you’re building a new streaming brand
                        or publishing your series on our existing network, we make it simple.
                    </p>

                    <ul className="space-y-4 mb-10">
                        <li className="flex items-center gap-3">
                            <CheckCircle className="text-[#d3b981] w-5 h-5" />
                            <span className="text-gray-200">Custom OTT platform built under your brand</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle className="text-[#d3b981] w-5 h-5" />
                            <span className="text-gray-200">Option to publish your series on our OTT network</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle className="text-[#d3b981] w-5 h-5" />
                            <span className="text-gray-200">Multi-platform bundle solutions for Netflix, Prime & more</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

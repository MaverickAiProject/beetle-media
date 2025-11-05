    'use client'

    import React, { useState } from 'react'
    import { FaPlus, FaMinus } from 'react-icons/fa'

    const faqs = [
        {
            question: 'What exactly do you provide — software or a complete OTT solution?',
            answer:
                'We provide a full white-label OTT solution including website, apps, and backend.',
        },
        {
            question: 'Can I publish my own web series or movies on your platform?',
            answer:
                'Yes, we allow creators to upload and monetize their content easily.',
        },
        {
            question: 'Do you also create mobile apps for OTT platforms?',
            answer:
                'Yes, we build both web and mobile (Android/iOS) applications.',
        },
        {
            question: 'Can I customize the OTT design with my own branding?',
            answer:
                'Absolutely — everything from logo to color scheme can be customized.',
        },
        {
            question: 'How long does it take to develop a new OTT platform?',
            answer:
                'Typically 4–6 weeks depending on features and scale.',
        },
        {
            question: 'Do you handle video hosting and streaming servers?',
            answer:
                'Yes, we manage secure video hosting with global CDN support.',
        },
        {
            question: 'What payment methods can be integrated?',
            answer:
                'We can integrate Stripe, Razorpay, PayPal, and other gateways based on country.',
        },
        {
            question: 'Can users subscribe or pay per view?',
            answer:
                'Yes, we support both models — subscription-based and pay-per-view.',
        },
        {
            question: 'Is DRM or content security available?',
            answer:
                'Yes, we implement DRM and anti-piracy measures for all videos.',
        },
        {
            question: 'Do you provide post-launch support?',
            answer:
                'Yes, we offer complete maintenance, updates, and technical support after launch.',
        },
    ]

    export default function FAQSection() {
        const [activeIndex, setActiveIndex] = useState(null)

        const toggleFAQ = (index) => {
            setActiveIndex(activeIndex === index ? null : index)
        }

        return (
            <section className="relative bg-black text-white py-16" id='faqs'>
                <div className="absolute inset-0 bg-gradient-to-b from-[#190000] via-[#1a0005] to-black opacity-80"></div>

                <div className="relative max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-7 lg:mb-15 text-white">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-[#1c0004] to-[#2a000b] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 p-2"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="flex justify-between items-center w-full p-5 text-left text-base  text-gray-300 focus:outline-none"
                                >
                                    {faq.question}
                                    {activeIndex === index ? (
                                        <FaMinus className="text-yellow-500" />
                                    ) : (
                                        <FaPlus className="text-yellow-500" />
                                    )}
                                </button>

                                <div
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-6 pt-4 pb-5 text-gray-300 border-t border-red-900 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

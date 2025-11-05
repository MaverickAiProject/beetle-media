'use client'
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaEnvelopeOpenText } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', description: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setIsSubmitted(true);
                toast.success('Message sent successfully!');
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', description: '' });
                }, 3000);
            } else toast.error('Failed to send message.');
        } catch {
            toast.error('Something went wrong.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative  text-white py-24 overflow-hidden" id="contact">
            {/* Red glow background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,0,0,0.1),transparent_70%)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
                {/* Left Content */}
                <div className="lg:w-1/2 space-y-6">
                    <p className="text-[#ff4d4d] uppercase tracking-widest font-semibold">Get in Touch</p>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Let’s <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff3333] to-[#ff9900]">Build</span> Something Great Together
                    </h2>
                    <p className="text-gray-400 max-w-md">
                        Whether you’re ready to launch your OTT platform or need custom streaming solutions, our team is here to help you achieve it — faster and better.
                    </p>

                    <div className="mt-8 flex items-center gap-4 p-6 bg-[#111] rounded-2xl border border-[#2a1a1a] hover:border-[#ff3333] transition-all duration-300">
                        <div className="w-14 h-14 flex items-center justify-center bg-[#ff3333]/20 rounded-full">
                            <FaEnvelopeOpenText className="text-[#ff4d4d] text-2xl" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Email Us</p>
                            <h4 className="font-semibold text-lg text-white">contact@maverickelitetech.com</h4>
                        </div>
                    </div>
                </div>

                {/* Right Form */}
                <div className="lg:w-1/2 w-full bg-[#111] rounded-3xl border border-[#2a1a1a] p-8 shadow-[0_0_30px_-10px_#ff000055]">
                    {isSubmitted ? (
                        <div className="text-center py-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                            <p className="text-gray-400">We’ll get back to you soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>

                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-gray-200 placeholder-gray-500 focus:border-[#ff3333] focus:outline-none transition"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-gray-200 placeholder-gray-500 focus:border-[#ff3333] focus:outline-none transition"
                            />
                            <textarea
                                name="description"
                                placeholder="How can we help you?"
                                rows="5"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-gray-200 placeholder-gray-500 focus:border-[#ff3333] focus:outline-none transition"
                            ></textarea>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg 
                                ${isSubmitting
                                        ? 'bg-[#ff3333]/60 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-[#ff3333] to-[#ff6600] hover:from-[#ff4444] hover:to-[#ff7700]'
                                    }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
            <Toaster position="top-right" />
        </section>
    );
}

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const quickLinks = [
        { label: 'Home', href: '/' },
        { label: 'Our Services', href: '/services' },
        { label: 'Why Choose Us', href: '/#why' },
        { label: 'Testimonials', href: '/#testimonials' },
        { label: 'Contact', href: '/contact-us' },
        { label: 'Blogs', href: '/blogs' },
    ];

    const policyLinks = [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms & Conditions', href: '/terms&conditions' },
        { label: 'Refund Policy', href: '/refund-policy' },
    ];

    return (
        <footer className="relative overflow-hidden bg-[#0b0b0b] text-white pt-16 pb-8 px-4">

            {/* Red Gradient Accent */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff0022]/20 via-[#b3001b]/10 to-transparent opacity-70"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    {/* Brand & Contact */}
                    <div className="space-y-6">
                        <div className="flex items-center">
                            <div className="p-2">
                                <div className="relative w-40 h-16">
                                    <Image
                                        src="/logo.png"
                                        alt="Legal Services Logo"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {/* <div className="flex items-start gap-4">
                                <div className="mt-1 bg-gradient-to-r from-[#ff0022] to-[#b3001b] p-2 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Our Office</h4>
                                    <p className="text-gray-400">1334/1 1st Floor, Haibowal Khurd, Ludhiana, Punjab, 141001</p>
                                </div>
                            </div> */}

                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-gradient-to-r from-[#ff0022] to-[#b3001b] p-2 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Email Us</h4>
                                    <p className="text-gray-400">beetlemedia@gmail.com</p>
                                </div>
                            </div>

                            {/* <div className="flex items-start gap-4">
                                <div className="mt-1 bg-gradient-to-r from-[#ff0022] to-[#b3001b] p-2 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Call Us</h4>
                                    <p className="text-gray-400">+91 7696 000 201</p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-[#ff0022] inline-block">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href}>
                                        <p className="flex items-center gap-3 group text-gray-400 hover:text-white transition-colors">
                                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#ff0022] to-[#b3001b]"></span>
                                            <span className="group-hover:underline group-hover:underline-offset-4">{link.label}</span>
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Policies */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-[#ff0022] inline-block">Policies</h3>
                        <ul className="space-y-3">
                            {policyLinks.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href}>
                                        <p className="flex items-center gap-3 group text-gray-400 hover:text-white transition-colors">
                                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#ff0022] to-[#b3001b]"></span>
                                            <span className="group-hover:underline group-hover:underline-offset-4">{link.label}</span>
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Info Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-3 pb-2 border-b-2 border-[#ff0022] inline-block">Best Services</h3>
                        <p className="text-gray-400 mb-3">
                           Offering complete OTT development and publishing solutions to help creators, studios, and brands launch, manage, and grow their streaming platforms with ease. Subscribe to our newsletter for the latest OTT trends, tech updates, and streaming business insights.
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-[#ff0022]/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Beetle Media. All rights reserved.
                    </div>

                    <div className="text-sm text-gray-400">
                        Developed by{" "}
                        <a
                            href="https://matchbestsoftware.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#ff4d4d] text-[#ffffff] transition-colors font-semibold no-underline"
                        >
                            Matchbest Software
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    );
}

'use client'

import React from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import LoginButton from '@/components/auth/LoginButton'

export default function BigNav() {
  return (
    <div className="hidden xl:flex items-center space-x-6">
      {/* Menu Links */}
      <div className="flex items-center space-x-8 text-white text-sm font-medium">
        <Link href="/" className="hover:text-[#ff3333] transition-colors">
          Home
        </Link>
        <Link href="/services" className="hover:text-[#ff3333] transition-colors">
          Services
        </Link>
        <Link href="/about-us" className="hover:text-[#ff3333] transition-colors">
          About Us
        </Link>
      </div>

      {/* Buttons */}
      <div className="ml-6 flex items-center space-x-3">
        <LoginButton className="px-4 py-2 rounded-lg hover:bg-gray-800 text-white border border-gray-700" />
        <Link href="/contact-us">
          <button className="bg-[#ff3333] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#e60000] transition-colors flex items-center">
            Contact Us
            <FiArrowRight className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  )
}

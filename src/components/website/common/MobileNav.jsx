'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiX, FiArrowRight } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileNav({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-black text-white z-50 shadow-2xl overflow-y-auto"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <div className="flex items-center space-x-2">
                  <Image
                    alt="logo"
                    src="/logo.png"
                    height={200}
                    width={200}
                    className="h-14 w-auto"
                  />
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <FiX className="text-white" size={24} />
                </button>
              </div>

              {/* Navigation Content */}
              <div className="flex-1 overflow-y-auto py-6 px-6 space-y-4">
                <Link
                  href="/"
                  className="block py-3 text-lg font-medium border-b border-gray-800 hover:text-[#ff3333] transition-colors"
                  onClick={onClose}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="block py-3 text-lg font-medium border-b border-gray-800 hover:text-[#ff3333] transition-colors"
                  onClick={onClose}
                >
                  Services
                </Link>
                <Link
                  href="/about-us"
                  className="block py-3 text-lg font-medium border-b border-gray-800 hover:text-[#ff3333] transition-colors"
                  onClick={onClose}
                >
                  About Us
                </Link>

                <div className="pt-6 space-y-3">
                  <Link
                    href="/contact-us"
                    className="block text-center bg-[#ff3333] text-white rounded-xl font-medium py-3 hover:bg-[#e60000] transition-colors flex items-center justify-center"
                    onClick={onClose}
                  >
                    Contact Us <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-800 text-center text-xs text-gray-400">
                © {new Date().getFullYear()} Beetle Media. All rights reserved.
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

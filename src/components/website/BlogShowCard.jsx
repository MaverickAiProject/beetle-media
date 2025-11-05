'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogCard({ blog }) {
    return (
        <article className="group relative bg-[#0f0b0b] rounded-3xl overflow-hidden border border-[#2a1a1a] shadow-[0_0_20px_-10px_#ff000080] hover:shadow-[0_0_40px_-10px_#ff0000cc] transition-all duration-500 flex flex-col h-full">

            {/* Blog Image */}
            <Link href={`/blogs/${blog.slug}`} className="relative block overflow-hidden">
                <div className="relative h-56 w-full overflow-hidden">
                    <Image
                        src={blog.imageURL}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#ff3333]/90 text-white uppercase tracking-wide">
                        {blog.category?.name || 'OTT News'}
                    </span>
                </div>
            </Link>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-400 mb-3">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    {new Date(blog.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    })}
                </div>

                <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-[#ff4d4d] transition-colors duration-300">
                    {blog.title}
                </h2>

                <p className="text-gray-400 mb-6 line-clamp-3">{blog.shortDescription}</p>

                {/* Footer */}
                <div className="mt-auto border-t border-[#2a1a1a] pt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                        {blog.author?.name || 'OTT Expert'}
                    </span>
                    <span className="inline-flex items-center text-[#ff4d4d] font-medium group-hover:translate-x-1 transition-transform duration-300">
                        Read More
                        <svg
                            className="ml-1 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                </div>
            </div>
        </article>
    )
}

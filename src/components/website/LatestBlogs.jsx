import { getLatestBlogs } from '@/lib/main/getBlogsData'
import React from 'react'
import BlogCard from './BlogShowCard'

export default async function LatestBlogs() {
    const blogs = await getLatestBlogs()

    return (
        <section className="relative bg-black text-white py-10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08),transparent_70%)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-[#ff3333] uppercase font-semibold tracking-widest mb-3">
                        Insights
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Latest <span className="text-[#ff4d4d]">Streaming Updates</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore industry trends, OTT tech insights, and creative success stories from the world of streaming.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogs?.map((blog) => (
                        <div key={blog._id} className="transition-transform duration-500 hover:-translate-y-2">
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="/blogs"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-transparent border border-black hover:border-[#e62e2e] text-white font-semibold transition-all duration-300 shadow-[0_0_25px_-8px_#ff0000aa] hover:shadow-[0_0_35px_-8px_#ff0000cc]"
                    >
                        View All Articles
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M5 12h16" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

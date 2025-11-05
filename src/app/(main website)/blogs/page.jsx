// app/blogs/page.jsx
import React from 'react';
import BlogsClient from './components/BlogsClient';
import { getBlogsData } from '@/lib/main/getBlogsData';

export default async function page() {
    const blogsData = await getBlogsData();
    const blogs = blogsData?.data || [];

    return (
        <BlogsClient
            allBlogs={blogs}
        />
    );
}

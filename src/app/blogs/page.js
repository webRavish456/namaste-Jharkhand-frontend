'use client';
import Header from '@/component/header';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`);
        const data = await response.json();
        if (data.status === 'success') {
          setBlogs(data.data.reverse());
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
  

      <section className="relative h-[360px] flex flex-col overflow-hidden blogs-hero-image-section">
      
      {/* Background Image - Parasnath Temple */}
      <div className="absolute inset-0 w-full">
        <Image
          src="/deori-temple.jpeg"
          alt="Deori Temple - Jharkhand"
          fill
          className="object-cover w-full"
          style={{objectPosition: 'center 54%', objectFit: 'cover'}}
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      {/* Header inside hero section */}
      <div className="relative z-20">
        <Header />
      </div>
      
      {/* Smoke/Fog Effect at Bottom */}
      <div className= "blogs-smoke-effect-bottom" >
          <Image
            src="/smoke-group.webp"
            alt="Smoke"
            fill
            className="object-cover w-full opacity-100"
         
            priority
          />
        </div> 
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 flex-1 flex items-center justify-center">
        <h1 className='testimonial-journey-title'>Blogs</h1>
      </div>
   
    </section>

      {/* Blog Section */}
      <section className="pt-2 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-2 sm:px-2 lg:px-2">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Skeleton Cards */}
              {[...Array(6)].map((_, index) => (
                <div key={index} className="blog-card">
                  {/* Skeleton Image */}
                  <div className="blog-image-container">
                    <div className="w-full h-[250px] bg-gray-200 animate-pulse rounded-lg"></div>
                  </div>
                  
                  {/* Skeleton Content */}
                  <div className="blog-content">
                    {/* Skeleton Category */}
                    <div className="blog-category">
                      <div className="w-24 h-4 bg-gray-200 animate-pulse rounded"></div>
                    </div>
                    
                    {/* Skeleton Title */}
                    <div className="blog-title">
                      <div className="w-full h-6 bg-gray-200 animate-pulse rounded mb-2"></div>
                      <div className="w-3/4 h-6 bg-gray-200 animate-pulse rounded"></div>
                    </div>
                    
                    {/* Skeleton Metadata */}
                    <div className="blog-metadata">
                      <div className="w-32 h-4 bg-gray-200 animate-pulse rounded"></div>
                      <div className="w-24 h-4 bg-gray-200 animate-pulse rounded"></div>
                    </div>
                    
                    {/* Skeleton Description */}
                    <div className="blog-description">
                      <div className="w-full h-4 bg-gray-200 animate-pulse rounded mb-2"></div>
                      <div className="w-full h-4 bg-gray-200 animate-pulse rounded mb-2"></div>
                      <div className="w-2/3 h-4 bg-gray-200 animate-pulse rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => {
                const slug = (blog.blogTitle || 'blog')
                  .toLowerCase()
                  .replace(/[^a-z0-9\s-]/g, '')
                  .trim()
                  .replace(/\s+/g, '-')
                  .replace(/-+/g, '-');
                const href = `/blogs/${slug}?id=${blog._id}`;
                return (
                <Link key={blog._id} href={href} className="blog-card-link">
                  <div className="blog-card">
                    {/* Blog Image */}
                    <div className="blog-image-container">
                      <Image
                        src={blog.blogImage || "/blog-latehar.webp"}
                        alt={blog.blogTitle || "Blog Image"}
                        width={400}
                        height={250}
                        className="blog-image"
                      />
                    </div>
                    
                    {/* Blog Content */}
                    <div className="blog-content">
                      {/* Category Tags */}
                      <div className="blog-category">
                        Blog, Landscapes
                      </div>
                      
                      {/* Title */}
                      <h2 className="blog-title">
                        {blog.blogTitle || "Blog Title"}
                      </h2>
                      
                      {/* Metadata */}
                      <div className="blog-metadata">
                        <div className="blog-date">
                          <i className="far fa-clock"></i>
                          {new Date(blog.blogDate).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="blog-author">
                          <i className="far fa-user"></i>
                          {blog.blogCreatedBy || "Admin"}
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="blog-description">
                        {blog.blogDescription 
                        }
                      </p>
                    </div>
                  </div>
                </Link>
              );})}
            </div>
          )}
        </div>
      </section>

     
    </div>
  );
}

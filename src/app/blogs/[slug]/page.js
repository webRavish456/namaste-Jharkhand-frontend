'use client';
import Header from '@/component/header';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function BlogDetailBySlug() {
  const searchParams = useSearchParams();
  const params = useParams();
  const id = searchParams.get('id');
  const slug = params.slug;
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog-details/blog/${id}`);
        const data = await response.json();
        if (data.status === 'success') {
          setBlog(data.data);
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchRelatedBlogs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`);
        const data = await response.json();
        if (data.status === 'success') {
          setAllBlogs(data.data);
          // Find current blog index
          const currentBlogIndex = data.data.findIndex(blog => blog._id === id);
          if (currentBlogIndex !== -1) {
            // Get next 4 blogs after current blog
            const relatedBlogs = [];
            for (let i = 1; i <= 4; i++) {
              const nextIndex = (currentBlogIndex + i) % data.data.length;
              relatedBlogs.push(data.data[nextIndex]);
            }
            setRelatedBlogs(relatedBlogs);
          }
        }
      } catch (error) {
        console.error('Error fetching related blogs:', error);
      }
    };

    if (id) {
      fetchBlog();
      fetchRelatedBlogs();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section Skeleton */}
        <section className="relative h-[400px] flex flex-col overflow-hidden bg-gray-200">
          <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
          
          <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 flex-1 flex items-center justify-center">
            <div className="h-8 bg-gray-400 rounded animate-pulse w-80"></div>
          </div>
        </section>

        {/* Blog Content Section Skeleton */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-2 sm:px-2 lg:px-2">
            
            {/* Blog Description Skeleton */}
            <div className="space-y-4 mb-8">
              <div className="h-4 bg-gray-300 rounded animate-pulse w-full"></div>
              <div className="h-4 bg-gray-300 rounded animate-pulse w-full"></div>
              <div className="h-4 bg-gray-300 rounded animate-pulse w-4/5"></div>
              <div className="h-4 bg-gray-300 rounded animate-pulse w-full"></div>
              <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded animate-pulse w-full"></div>
              <div className="h-4 bg-gray-300 rounded animate-pulse w-5/6"></div>
              <div className="h-4 bg-gray-300 rounded animate-pulse w-full"></div>
            </div>

            {/* Meta Information Skeleton */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="h-4 bg-gray-300 rounded animate-pulse w-24"></div>
              <div className="h-4 bg-gray-300 rounded animate-pulse w-20"></div>
              <div className="h-4 bg-gray-300 rounded animate-pulse w-32"></div>
            </div>
          </div>
        </section>

        {/* Navigation Section Skeleton */}
        <section className="py-0 bg-white">
          <div className="max-w-6xl mx-auto px-2 sm:px-2 lg:px-2">
            <div className="flex justify-between items-center">
              <div className="h-6 bg-gray-300 rounded animate-pulse w-32"></div>
              <div className="h-6 bg-gray-300 rounded animate-pulse w-28"></div>
            </div>
          </div>
        </section>

        {/* Related Blogs Section Skeleton */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-2 sm:px-2 lg:px-2">
            <div className="h-8 bg-gray-300 rounded animate-pulse w-64 mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="blog-card-related">
                  <div className="blog-image-container-related">
                    <div className="h-48 bg-gray-300 rounded animate-pulse"></div>
                  </div>
                  <div className="blog-content-related">
                    <div className="h-6 bg-gray-300 rounded animate-pulse w-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
  if (!blog || blog.length === 0) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><p>Blog not found</p></div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-[400px] flex flex-col overflow-hidden">
        <div className="absolute inset-0 w-full">
          <Image
            src={blog[0].blogDetailBanner || '/parasnath-mandir.webp'}
            alt={blog[0].blogTitle || 'Blog Image'}
            fill
            className="object-cover w-full"
            priority
          />
          <div className="absolute inset-0 bg-black/0"></div>
        </div>
        <div className="relative z-20">
          <Header />
        </div>
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 flex-1 flex items-center justify-center">
          <h1 className='journey-title'>{blog[0].blogId?.blogTitle || 'Destination'}</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-2 sm:px-2 lg:px-2">

          {/* Blog Description */}
          <div className="blog-detail-content">
            <div
              className="blog-paragraph prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blog[0].blogDetailDescription }}
            />
          </div>

          {/* Date, Category, and Tags */}
          <div className="blog-meta">
            <div className="flex flex-wrap items-center gap-6 text-sm">
              {/* Date */}
              <div className="flex items-center">
                <span className="date-icon text-blue-600 font-medium">
                  {new Date(blog[0].date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </span>
              </div>

              {/* Category */}
              <div className="flex items-center">
                <span className="category-icon text-gray-600">
                  {blog[0].category}
                </span>
              </div>

              {/* Tags - only show if tags exist */}
              {blog[0].tags && blog[0].tags.length > 0 && (
                <div className="flex items-center">
                  <span className="tags-icon text-gray-600">
                    {blog[0].tags.join(', ')}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-0 bg-white ">
        <div className="max-w-6xl mx-auto px-2 sm:px-2 lg:px-2 ">
          <div className="flex justify-between items-center post-navigation-content">
            {allBlogs.length > 0 && (() => {
              const currentBlogIndex = allBlogs.findIndex(blog => blog._id === id);
              const prevBlogIndex = currentBlogIndex > 0 ? currentBlogIndex - 1 : allBlogs.length - 1;
              const nextBlogIndex = currentBlogIndex < allBlogs.length - 1 ? currentBlogIndex + 1 : 0;
              const prevBlog = allBlogs[prevBlogIndex];
              const nextBlog = allBlogs[nextBlogIndex];
              
              const prevBlogSlug = (prevBlog.blogTitle || 'blog')
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .trim()
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-');
              const nextBlogSlug = (nextBlog.blogTitle || 'blog')
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .trim()
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-');
              
              return (
                <>
                  <Link href={`/blogs/${prevBlogSlug}?id=${prevBlog._id}`}>
                    <span> <KeyboardArrowLeftIcon style={{ fontSize: '30px' }} /> {prevBlog.blogTitle || 'Previous'}</span>
                  </Link>
                  <Link href={`/blogs/${nextBlogSlug}?id=${nextBlog._id}`}>
                    <span>{nextBlog.blogTitle || 'Next'} <KeyboardArrowRightIcon  style={{ fontSize: '30px' }} /> </span>
                  </Link>
                </>
              );
            })()}
          </div>
         
        </div>
      </section>

      {/* You may also like these section */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-2 sm:px-2 lg:px-2">
          <h2 className="blog-related-title">
            You may also like these
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedBlogs.map((relatedBlog) => {
              const blogSlug = (relatedBlog.blogTitle || 'blog')
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .trim()
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-');
              const href = `/blogs/${blogSlug}?id=${relatedBlog._id}`;
              
              return (
                <Link key={relatedBlog._id} href={href} className="blog-card-link">
                  <div className="blog-card-related">
                    <div className="blog-image-container-related">
                      <Image
                        src={relatedBlog.blogImage || "/blog-latehar.webp"}
                        alt={relatedBlog.blogTitle || "Blog Image"}
                        width={300}
                        height={180}
                        className="blog-image"
                      />
                    </div>
                    <div className="blog-content-related">
                      <h3 className="text-center">
                        {relatedBlog.blogTitle || "Blog Title"}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}



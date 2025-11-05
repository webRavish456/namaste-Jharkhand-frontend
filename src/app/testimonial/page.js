'use client';

import { useState, useEffect } from 'react';
import Header from "@/component/header";
import Image from "next/image";

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/testimonials`);
      if (!response.ok) throw new Error('Failed to fetch testimonials');
      const data = await response.json();
      // Filter only active testimonials and reverse the order
      const activeTestimonials = (data.data || []).filter(t => t.status === 'active');
      setTestimonials([...activeTestimonials].reverse());
    } catch (err) {
      console.error('Error fetching testimonials:', err);
      setTestimonials([]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
     
      <section className="relative h-[320px] flex flex-col overflow-hidden testimonial-hero-image-section">
      
      {/* Background Image - Parasnath Temple */}
      <div className="absolute inset-0 w-full">
        <Image
          src="/testimonial.webp"
          alt="Explore Jharkhand - Jharkhand"
          fill
          className="object-cover w-full"
          style={{objectPosition: 'center 54%', objectFit: 'cover'}}
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Header inside hero section */}
      <div className="relative z-20">
        <Header />
      </div>
      
      {/* Smoke/Fog Effect at Bottom */}
   
      <div className= "testimonial-smoke-effect-bottom" >
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
        <h1 className='testimonial-journey-title'>Customer&apos;s Memories</h1>
      </div>
   
    </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 testimonial-section-new">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="testimonial-grid-container">
              {/* Skeleton Cards */}
              {[...Array(3)].map((_, index) => (
                <div key={index} className="testimonial-card-new testimonial-card-accent">
                  <div className="testimonial-card-header">
                    {/* Skeleton Avatar */}
                    <div className="testimonial-avatar-wrapper">
                      <div className="w-[120px] h-[120px] bg-gray-200 animate-pulse rounded-full border-4 border-white"></div>
                      <div className="testimonial-avatar-ring"></div>
                    </div>
                    <div className="testimonial-header-content">
                      {/* Skeleton Title */}
                      <div className="w-3/4 h-7 bg-gray-200 animate-pulse rounded mb-2"></div>
                      {/* Skeleton Date */}
                      <div className="w-1/2 h-5 bg-gray-200 animate-pulse rounded"></div>
                    </div>
                  </div>
                  
                  <div className="testimonial-card-body">
                    <div className="testimonial-quote-icon">"</div>
                    {/* Skeleton Description Lines */}
                    <div className="space-y-3">
                      <div className="w-full h-4 bg-gray-200 animate-pulse rounded"></div>
                      <div className="w-full h-4 bg-gray-200 animate-pulse rounded"></div>
                      <div className="w-full h-4 bg-gray-200 animate-pulse rounded"></div>
                      <div className="w-5/6 h-4 bg-gray-200 animate-pulse rounded"></div>
                      <div className="w-4/6 h-4 bg-gray-200 animate-pulse rounded"></div>
                    </div>
                  </div>
                  
                  <div className="testimonial-card-footer">
                    <div className="testimonial-signature-new">
                      {/* Skeleton Regards */}
                      <div className="w-32 h-4 bg-gray-200 animate-pulse rounded mb-2"></div>
                      {/* Skeleton Author */}
                      <div className="w-40 h-5 bg-gray-200 animate-pulse rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="mb-4">
                  <svg 
                    className="w-24 h-24 mx-auto text-gray-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Records Found</h3>
                <p className="text-gray-500">There are no testimonials available at the moment.</p>
              </div>
            </div>
          ) : (
            <div className="testimonial-grid-container">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial._id || index} className="testimonial-card-new testimonial-card-accent">
                  <div className="testimonial-card-header">
                    <div className="testimonial-avatar-wrapper">
                      <Image
                        src={testimonial.image || '/placeholder-image.webp'}
                        alt={testimonial.title || 'Testimonial'}
                        width={120}
                        height={120}
                        className="testimonial-avatar-image"
                        onError={(e) => {
                          e.target.src = '/placeholder-image.webp';
                        }}
                      />
                      <div className="testimonial-avatar-ring"></div>
                    </div>
                    <div className="testimonial-header-content">
                      <h3 className="testimonial-card-title">{testimonial.title || 'Testimonial'}</h3>
                      <span className="testimonial-date-new">{formatDate(testimonial.date)}</span>
                    </div>
                  </div>
                  
                  <div className="testimonial-card-body">
                    <div className="testimonial-quote-icon">"</div>
                    <p className="testimonial-text-new">
                      {testimonial.description || 'No description available.'}
                    </p>
                  </div>
                  
                  <div className="testimonial-card-footer">
                    <div className="testimonial-signature-new">
                      <span className="testimonial-regards">With Best Regards</span>
                      <span className="testimonial-author">{testimonial.authorName || 'Anonymous'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

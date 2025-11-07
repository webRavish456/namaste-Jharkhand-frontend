'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState('explore-jharkhand');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/namastey-jharkhand-logo.webp"
                alt="Namaste Jharkhand"
                width={200}
                height={200}
                className="h-14 w-auto sm:h-20 md:h-24 lg:h-28 xl:h-32 transition-all duration-300"
                priority
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:block relative right-4 mt-1">
            <ul className="flex space-x-6">
              <li>
                <Link 
                  href="/explore-jharkhand" 
                  className="text-white transition-all duration-300 font-medium nav-link"
                >
                  Explore Jharkhand
                </Link>
              </li>
              <li>
                <Link 
                  href="/testimonial" 
                  className="text-white transition-all duration-300 font-medium nav-link"
                >
                  Testimonial
                </Link>
              </li>
              <li>
                <Link 
                  href="/blogs" 
                  className="text-white transition-all duration-300 font-medium nav-link"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact-us" 
                  className="text-white transition-all duration-300 font-lg nav-link"
                >
                  Contact Us
                </Link> 
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none transition-all duration-300 cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/20"
              onClick={toggleMobileMenu}
            ></div>
            
            {/* Menu Panel - Top Drawer */}
            <div className="absolute top-0 left-0 right-0 bg-white shadow-2xl animate-slide-down">
              {/* Close Button */}
              <div className="flex justify-end p-2">
                <button
                  onClick={toggleMobileMenu}
                  className="p-1 border-2 border-dashed border-blue-400 rounded-md focus:outline-none cursor-pointer"
                  aria-label="Close menu"
                >
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <nav className="pb-3">
                <ul className="space-y-0">
                  <li 
                    className="border-t border-b border-gray-200"
                    onMouseEnter={() => setHoveredItem('explore-jharkhand')}
                  >
                    <Link 
                      href="/explore-jharkhand" 
                      className={`block font-normal  px-4 py-3 transition-colors duration-200 ${
                        hoveredItem === 'explore-jharkhand' ? 'text-green-600' : 'text-black'
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      Explore Jharkhand
                    </Link>
                  </li>
                  <li 
                    className="border-b border-gray-200"
                    onMouseEnter={() => setHoveredItem('testimonial')}
                  >
                    <Link 
                      href="/testimonial" 
                      className={`block font-normal px-4 py-3 transition-colors duration-200 ${
                        hoveredItem === 'testimonial' ? 'text-green-600' : 'text-black'
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      Testimonial
                    </Link>
                  </li>
                  <li 
                    className="border-b border-gray-200"
                    onMouseEnter={() => setHoveredItem('blogs')}
                  >
                    <Link 
                      href="/blogs" 
                      className={`block font-normal px-4 py-3 transition-colors duration-200 ${
                        hoveredItem === 'blogs' ? 'text-green-600' : 'text-black'
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      Blogs
                    </Link>
                  </li>
                  <li
                    onMouseEnter={() => setHoveredItem('contact-us')}
                  >
                    <Link 
                      href="/contact-us" 
                      className={`block font-normal px-4 py-3 transition-colors duration-200 ${
                        hoveredItem === 'contact-us' ? 'text-green-600' : 'text-black'
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
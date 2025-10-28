'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              className="text-white  focus:outline-none focus:font-bold transition-all duration-300"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
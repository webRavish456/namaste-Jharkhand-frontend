'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>

      <div className="text-white py-12 footer-section">
      <div className="max-w-6xl mx-auto px-6 sm:px-4 lg:px-2">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 footer-grid">
            {/* Logo and Tagline */}
            <div className="col-span-1">
              <div className="flex items-center mb-4">
                <Image
                  src="/namastey-jharkhand-logo.webp"
                  alt="Namaste Jharkhand"
                  width={90}
                  height={90}
                  className="h-23 w-23 rounded-full custom-image footer-logo"
                />
              </div>
              <p className="footer-tagline">
                Explore the Untamed Beauty of Jharkhand - Nature, Culture, and Heritage Unite.
              </p>
            </div>

            {/* Visit to Jharkhand */}
            <div>
              <h3 className="text-lg font-semibold footer-title">A Visit to Jharkhand</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-white transition-colors block pb-2 border-b border-white/20 footer-links">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/explore-jharkhand" className="text-white transition-colors block pb-2 border-b border-white/20 footer-links">
                    Explore Jharkhand
                  </Link>
                </li>
                <li>
                  <Link href="/testimonial" className="text-white transition-colors block pb-2 border-b border-white/20 footer-links">
                    Testimonial
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="text-white transition-colors footer-links">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold footer-title">Contact Info</h3>
              <div className="space-y-2 text-sm">
                <div className="flex">
                  <i className="fas fa-map-marker-alt mr-1 mt-2"></i>
                  <p className="footer-tagline">
                    Shop No M & N, Dream Height Building,
                    South Park Road, Bistupur,
                    Jamshedpur-831001
                  </p>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope mr-1"></i>
                  <a href="mailto:info@namastejharkhand.in" className="transition-colors footer-tagline">
                    info@namastejharkhand.in
                  </a>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone-volume mr-1"></i>
                  <a href="tel:+919102759985" className="transition-colors footer-tagline">
                    +919102759985
                  </a>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold footer-title">Useful Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy-policy" className="text-white transition-colors block pb-2 border-b border-white/20 footer-links">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="text-white transition-colors block pb-2 border-b border-white/20 footer-links">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-white transition-colors footer-links">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - White Background */}
      <div className="bg-white py-3">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center space-y-5">
            {/* Social Media Icons */}
            <div className="flex space-x-4 justify-center">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-facebook text-gray-800 hover:text-white transform scale-115 bg-gray-200 rounded-full p-2 hover:bg-blue-600 w-8 h-8 flex items-center justify-center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-instagram text-gray-800 hover:text-white transform scale-115 bg-gray-200 rounded-full p-2 hover:bg-pink-600 w-8 h-8 flex items-center justify-center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-youtube text-gray-800 hover:text-white transform scale-115 bg-gray-200 rounded-full p-2 hover:bg-red-600 w-8 h-8 flex items-center justify-center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}></i>
              </a>
            </div>
            
            {/* Border Line */}
            <div className="w-full border-t border-gray-300"></div>
            
            {/* Copyright */}
            <p className="footer-copyright">
              Copyright © {new Date().getFullYear()} Namaste Jharkhand
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className="fixed bottom-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-50 transition-colors z-50 shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="fas fa-chevron-up text-gray-800"></i>
      </button>
    </footer>
  );
}

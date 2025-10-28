'use client';

import { useState } from 'react';
import Header from '@/component/header';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      
      const response = await fetch(`${baseUrl}/enquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        }),
      });

      if (response.ok) {
        toast.success('Thank you for your enquiry! We will get back to you soon.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        console.error('Error submitting enquiry:', errorData);
        toast.error('Sorry, there was an error submitting your enquiry. Please try again.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error('Network error:', error);
      toast.error('Network error. Please check your connection and try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[320px] flex flex-col overflow-hidden">
      
      {/* Background Image - Parasnath Temple */}
      <div className="absolute inset-0 w-full">
        <Image
          src="/Jharkhand-Tourism.webp"
          alt="Jharkhand Tourism - Jharkhand"
          fill
          className="object-cover w-full"
          style={{objectPosition: 'center 68%', objectFit: 'cover'}}
          priority
        />
        <div className="absolute inset-0 bg-black/0"></div>
      </div>
      
      {/* Header inside hero section */}
      <div className="relative z-20">
        <Header />
      </div>
      
      {/* Smoke/Fog Effect at Bottom */}
      <div className= "explore-smoke-effect-bottom" >
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
        <h1 className='journey-title'>Reach Out to Us</h1>
      </div>
   
    </section>

      {/* Contact Section */}
      <section className="pt-4 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-4 lg:px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 md:gap-6 lg:gap-6">
            {/* Left Section - Contact Information */}
            <div className="contact-wrapper">
            <div className="contact-info-section">
              <h1 className="contact-title">Contact Us</h1>
              
              {/* Contact Details */}
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt contact-icon"></i>
                  <span className="contact-text">
                    Shop No M & N, Dream Height Building, South Park Road, Bistupur, Jamshedpur-831001, Jharkhand
                  </span>
                </div>
                
                <div className="contact-item">
                  <i className="fas fa-envelope contact-icon"></i>
                  <span className="contact-text">info@namastejharkhand.in</span>
                </div>
                
                <div className="contact-item">
                  <i className="fas fa-phone contact-icon"></i>
                  <span className="contact-text">9102759985</span>
                </div>
              </div>

              <div className="contact-image-container">
                <Image
                  src="/contact-jharkhand-land-tribes.webp"
                  alt="Jharkhand - Land of Tribals"
                  width={600}
                  height={300}
                  className="contact-image"
                />
              </div>
              
              {/* Jharkhand Image */}
          
            </div>
            <div className="contact-image-container-johar">
                <Image
                  src="/contact-us-johar-jharkhand.webp"
                  alt="Johar Jharkhand"
                  width={220}
                  height={100}
                  className="contact-image"
                />
              </div>

              </div>
            {/* Right Section - Enquiry Form */}
            <div className="enquiry-form-section">
              <h2 className="enquiry-title">Enquiry Form</h2>
              
              <form onSubmit={handleSubmit} className="enquiry-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Your Phone number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Your message (optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    rows="4"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
      
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

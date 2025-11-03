import Header from "@/component/header";
import Image from "next/image";

export default function Testimonial() {
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
          <div className="testimonial-grid-container">
            
            {/* Testimonial Card 1 */}
            <div className="testimonial-card-new testimonial-card-accent">
              <div className="testimonial-card-header">
                <div className="testimonial-avatar-wrapper">
                  <Image
                    src="/awesome-trip.webp"
                    alt="Awesome Trip"
                    width={120}
                    height={120}
                    className="testimonial-avatar-image"
                  />
                  <div className="testimonial-avatar-ring"></div>
                </div>
                <div className="testimonial-header-content">
                  <h3 className="testimonial-card-title">Awesome Trip</h3>
                  <span className="testimonial-date-new">December 2023</span>
                </div>
              </div>
              
              <div className="testimonial-card-body">
                <div className="testimonial-quote-icon">"</div>
                <p className="testimonial-text-new">
                  We truly had an amazing experience during the entire tour. Everything from hotels, visiting attractions to flight departure. We also met our team of experts who gave interesting insights about various monuments. Round-the clock assistance. We are highly impressed with all the services offered and would love to travel India with you again in future.
                </p>
              </div>
              
              <div className="testimonial-card-footer">
                <div className="testimonial-signature-new">
                  <span className="testimonial-regards">With Best Regards</span>
                  <span className="testimonial-author">Ms Margot Scholz</span>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="testimonial-card-new testimonial-card-accent">
              <div className="testimonial-card-header">
                <div className="testimonial-avatar-wrapper">
                  <Image
                    src="/great-trip.webp"
                    alt="Great Trip"
                    width={120}
                    height={120}
                    className="testimonial-avatar-image"
                  />
                  <div className="testimonial-avatar-ring"></div>
                </div>
                <div className="testimonial-header-content">
                  <h3 className="testimonial-card-title">Great Trip</h3>
                  <span className="testimonial-date-new">June 2024</span>
                </div>
              </div>
              
              <div className="testimonial-card-body">
                <div className="testimonial-quote-icon">"</div>
                <p className="testimonial-text-new">
                  We are greatly satisfied and enjoyed very much. Guide was very much professional, he spoke such English, so even those who spoke English poorly understood him almost 90%. And the country was amazing. So we liked everything. Thank you very much for your assistance.
                </p>
              </div>
              
              <div className="testimonial-card-footer">
                <div className="testimonial-signature-new">
                  <span className="testimonial-regards">Warm Regards</span>
                  <span className="testimonial-author">Mrs Elena Zhukova & Group</span>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="testimonial-card-new testimonial-card-accent">
              <div className="testimonial-card-header">
                <div className="testimonial-avatar-wrapper">
                  <Image
                    src="/amazing-trip.webp"
                    alt="Amazing Trip"
                    width={120}
                    height={120}
                    className="testimonial-avatar-image"
                  />
                  <div className="testimonial-avatar-ring"></div>
                </div>
                <div className="testimonial-header-content">
                  <h3 className="testimonial-card-title">Amazing Trip</h3>
                  <span className="testimonial-date-new">January 2024</span>
                </div>
              </div>
              
              <div className="testimonial-card-body">
                <div className="testimonial-quote-icon">"</div>
                <p className="testimonial-text-new">
                  Our Journey was absolutely amazing. We extend our heartfelt thanks to EaseMyTrip, which made our vacations memorable. Everything was planned perfectly, and we had a great time with our friends and family. Truly, it was the most beautiful experience we had during our vacation to Chandil.
                </p>
              </div>
              
              <div className="testimonial-card-footer">
                <div className="testimonial-signature-new">
                  <span className="testimonial-regards">Warm Regards</span>
                  <span className="testimonial-author">Mr Christian Zimmermann with Family</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

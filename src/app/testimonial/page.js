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
          src="/explore-jharkhand.webp"
          alt="Explore Jharkhand - Jharkhand"
          fill
          className="object-cover w-full"
          style={{objectPosition: 'center 54%', objectFit: 'cover'}}
          priority
        />
        <div className="absolute inset-0 bg-black/0"></div>
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
      <section className="bg-white" >


        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 testimonial-card-container-wrapper" >
          <div className="testimonial-card-container">
            {/* Testimonial Card */}
          
              {/* Background Image - Ocean/Lake */}
              <div className="testimonial-image">
                <Image
                  src="/awesome-trip.webp"
                  alt="Awesome Trip"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>

              <div>
              
              <div >
                <div className="testimonial-title-container">
                 <h2 className="testimonial-title">
                  Awesome Trip
                </h2>
                </div>

              <div className="relative rounded-3xl shadow-lg testimonial-card-content" style={{backgroundColor: '#FFE392AD', display:'flex',flexDirection: 'column', gap:'24px',boxSizing: 'border-box'}}>
                {/* Title */}
          
                
                {/* Date */}
                <div className="testimonial-date">
                  December 2023
                </div>
                
                {/* Review Content */}
                <div className="space-y-3">
                  <p className="testimonial-text">
                    We truly had an amazing experience during the entire tour.<br/>
                    Everything from hotels, visiting attractions to flight departure.<br/>
                    We also met our team of experts who gave interesting insights about various monuments.<br/>
                    Round-the clock assistance.<br/>
                    We are highly impressed with all the services offered and would love to travel India with you again in future.<br/>
                  </p>
                </div>
                
                {/* Signature */}
                <div className="testimonial-date">
                  <div>With Best Regards</div>
                  <div>Ms Margot Scholz</div>
                </div>
              </div>
              </div>

            </div>

          </div>
        
          <div className="testimonial-card-container">
            {/* Testimonial Card */}
          
              {/* Background Image - Ocean/Lake */}
              <div className="testimonial-image ">
                <Image
                  src="/great-trip.webp"
                  alt="Great Trip"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>

              <div>
              
              <div >
                <div className="testimonial-title-container">
                 <h2 className="testimonial-title">
                  Great Trip
                </h2>
                </div>

              <div className="relative rounded-3xl shadow-lg testimonial-card-content" style={{backgroundColor: '#FFE392AD', display:'flex',flexDirection: 'column', gap:'24px',boxSizing: 'border-box'}}>
                {/* Title */}
          
                
                {/* Date */}
                <div className="testimonial-date">
                  June 2024
                </div>
                
                {/* Review Content */}
                <div className="space-y-2">
                  <p className="testimonial-text">
                  We are greatly satisfied and enjoyed very much.<br/>

                   Guide was very much professional, he spoke such English, so even those who spoke English poorely understood him almost 90%. And the country was amazing. <br/>

                   So we liked everything. Thank you very much for your assistance. <br/>
                  </p>
                </div>
                
                {/* Signature */}
                <div className="testimonial-date">
                  <div>Warm Regards,</div>
                  <div>Mrs Elena Zhukova & Group</div>
                </div>
              </div>
              </div>

            </div>

          </div>
      
          <div className="testimonial-card-container">
            {/* Testimonial Card */}
          
              {/* Background Image - Ocean/Lake */}
              <div className="testimonial-image testimonial-image-shine">
                <Image
                  src="/amazing-trip.webp"
                  alt="Amazing Trip"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>

              <div>
              
              <div >
                <div className="testimonial-title-container">
                 <h2 className="testimonial-title">
                  Amazing Trip
                </h2>
                </div>

              <div className="relative rounded-3xl shadow-lg testimonial-card-content" style={{backgroundColor: '#FFE392AD', display:'flex',flexDirection: 'column', gap:'20px',boxSizing: 'border-box'}}>
                {/* Title */}
          
                
                {/* Date */}
                <div className="testimonial-date">
                  January 2024
                </div>
                
                {/* Review Content */}
                <div className="space-y-3">
                  <p className="testimonial-text">
                  Our Journey was absolutely amazing. <br/>
                  We extend our heartfelt thanks to EaseMyTrip, which made our vacations memorable.  <br/>
                  Everything was planned perfectly, and we had a great time with our friends and family. <br/>
                  Truly, it was the most beautiful experience we had during our vacation to Chandil. <br/>
                  </p>
                </div>
                
                {/* Signature */}  
                <div className="testimonial-date">
                  <div>Warm Regards,</div>
                  <div>Mr Christian Zimmermann with Family</div>
                </div>
              </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

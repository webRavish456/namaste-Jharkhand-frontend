import Header from '@/component/header';
import Image from 'next/image';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
     

      <section className="relative h-[320px] flex flex-col overflow-hidden ">
      
      {/* Background Image - Parasnath Temple */}
      <div className="absolute inset-0 w-full">
        <Image
          src="/Jharkhand-Tourism.webp"
          alt="Jharkhand Tourism - Jharkhand"
          fill
          className="object-cover w-full"
          priority
        />
        <div className="absolute inset-0 bg-black/0"></div>
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
        <h1 className='journey-title'>Terms and Conditions</h1>
      </div>
   
    </section>

      {/* Terms and Conditions Section */}
      <section className="pt-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-2">
          <div className="terms-content">
            <h1 className="terms-title">
              Welcome to Namaste Jharkhand
            </h1>
            
            <p className="terms-paragraph">
              By accessing or using the Namaste Jharkhand website <a href="https://www.namastejharkhand.in" className="terms-link">(https://www.namastejharkhand.in)</a>, you agree to comply with these Terms and Conditions. Please read them carefully before using this site.
            </p>

            <div className="terms-section">
              <h2 className="terms-section-title">1. Acceptance of Terms</h2>
              <p className="terms-paragraph">
                By using this website, you accept these Terms and Conditions in full. If you do not agree with any part of these terms, please do not use this website.
              </p>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title">2. Intellectual Property Rights</h2>
              <p className="terms-paragraph">
                All content on this website — including text, images, videos, logos, graphics, design, and software — is the property of Namaste Jharkhand and protected by Indian copyright and intellectual property laws.
              </p>
              <p className="terms-paragraph">
                You may view, download, and print content for personal, non-commercial use only. Any other use — including modification, reproduction, redistribution, republication, or commercial exploitation — requires prior written permission.
              </p>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title">3. Accuracy of Information</h2>
              <p className="terms-paragraph">
                We strive to ensure that all information provided on Namaste Jharkhand is accurate, up-to-date, and reliable. However, we do not guarantee the completeness, timeliness, or accuracy of any content. The use of any information on this website is at your own risk.
              </p>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title">4. External Links</h2>
              <p className="terms-paragraph">
                Namaste Jharkhand may contain links to third-party websites for your convenience. These links do not imply endorsement or responsibility for the content, policies, or practices of those websites. Please review the terms and policies of those websites before using them.
              </p>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title">5. Limitation of Liability</h2>
              <p className="terms-paragraph">
                Namaste Jharkhand shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:
              </p>
              <ul className="terms-list">
                <li>The use or inability to use this website</li>
                <li>Unauthorized access to or modification of your data</li>
                <li>Errors, omissions, or inaccuracies in the content</li>
                <li>Third-party websites or services linked to this site</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title">6. User Conduct</h2>
              <p className="terms-paragraph">
                You agree to use this website lawfully and not to:
              </p>
              <ul className="terms-list">
                <li>Upload or transmit harmful, illegal, obscene, or offensive content</li>
                <li>Interfere with the functioning or security of the website</li>
                <li>Attempt unauthorized access to any part of the website, data, or server</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title">7. Privacy</h2>
              <p className="terms-paragraph">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information.
              </p>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title">8. Changes to Terms</h2>
              <p className="terms-paragraph">
                Namaste Jharkhand reserves the right to update or modify these Terms and Conditions at any time without prior notice. Continued use of the website signifies your acceptance of the changes.
              </p>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title">9. Governing Law</h2>
              <p className="terms-paragraph">
                These Terms and Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Jharkhand.
              </p>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title">10. Contact Us</h2>
              <p className="terms-paragraph">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <p className="terms-paragraph">
                Email: info@namastejharkhand.in
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

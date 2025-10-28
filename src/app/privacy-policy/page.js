import Header from '@/component/header';
import Image from 'next/image';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
        <h1 className='journey-title'>Privacy Policy</h1>
      </div>
   
    </section>

      {/* Privacy Policy Section */}
      <section className="pt-26 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-2">
          <div className="privacy-policy-content">
            <h1 className="privacy-title">
                Welcome to <b>Namaste Jharkhand</b> <Link href="https://www.namastejharkhand.in" className="privacy-link"><em>(https://www.namastejharkhand.in)</em></Link>
            
             . Your privacy is important to us. This Privacy Policy outlines the types of personal information we may collect, how we use it, who we may share it with, and the measures we take to protect your data.
            </h1>
            
            <p className="privacy-paragraph">
              By using this website, you agree to the practices described in this policy. Please read this policy carefully to understand our data handling practices.
            </p>

            <div className="privacy-section">
              <h2 className="privacy-section-title">1. Information We Collect</h2>
              <p className="privacy-paragraph">
                We may collect the following types of information when you visit or use our website:
              </p>
              
              <h3 className="privacy-subsection-title">1.1 Personal Information</h3>
              <p className="privacy-paragraph">
                Information that can identify you personally, including:
              </p>
              <ul className="privacy-list">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Any other information you voluntarily submit through forms, comments, or communications</li>
              </ul>
              
              <h3 className="privacy-subsection-title">1.2 Non-Personal Information</h3>
              <p className="privacy-paragraph">
                Information that cannot identify you directly, such as:
              </p>
              <ul className="privacy-list">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device type and operating system</li>
                <li>Website usage data, including pages visited, time spent, and referring URLs</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-section-title">2. How We Use Your Information</h2>
              <p className="privacy-paragraph">
                Namaste Jharkhand uses the information we collect for purposes including, but not limited to:
              </p>
              <ul className="privacy-list">
                <li>Providing and personalizing our services</li>
                <li>Responding to inquiries, messages, and requests</li>
                <li>Improving the performance, usability, and content of the website</li>
                <li>Monitoring and analyzing trends and usage patterns</li>
                <li>Sending newsletters, promotional emails, and updates (if you have opted in)</li>
                <li>Protecting the security and integrity of our website</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-section-title">3. Cookies</h2>
              <p className="privacy-paragraph">
                Our website uses cookies — small data files placed on your device — to enhance your browsing experience. Cookies help us remember your preferences and compile aggregate data about site traffic and interactions.
              </p>
              <p className="privacy-paragraph">
                You can control the use of cookies at the browser level. If you disable cookies, some features of this website may not function properly.
              </p>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-section-title">4. Third-Party Services</h2>
              <p className="privacy-paragraph">
                We may use third-party services to facilitate our business operations, including:
              </p>
              <ul className="privacy-list">
                <li>Analytics tools (e.g. Google Analytics) to track and report site usage</li>
                <li>Advertising partners to deliver targeted advertisements</li>
                <li>Payment gateways (if applicable)</li>
              </ul>
              <p className="privacy-paragraph">
                These third parties have their own privacy policies. Namaste Jharkhand is not responsible for their practices.
              </p>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-section-title">5. Data Sharing and Disclosure</h2>
              <p className="privacy-paragraph">
                Namaste Jharkhand will not sell, trade, or otherwise transfer your personal information to third parties, except:
              </p>
              <ul className="privacy-list">
                <li>When required by law or legal processes</li>
                <li>To protect our rights, safety, and property</li>
                <li>With service providers who assist us in operating the website and conducting business, under confidentiality agreements</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-section-title">6. Data Security</h2>
              <p className="privacy-paragraph">
                We implement appropriate technical and organizational security measures to help protect your personal information from unauthorized access, loss, or disclosure. However, please note that no internet transmission or electronic storage is 100% secure, so we cannot guarantee absolute security.
              </p>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-section-title">7. Retention of Information</h2>
              <p className="privacy-paragraph">
                We retain personal data only for as long as is necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-section-title">8. Your Rights</h2>
              <p className="privacy-paragraph">
                Depending on your jurisdiction, you may have rights concerning your personal data, including:
              </p>
              <ul className="privacy-list">
                <li>Requesting access to the data we hold about you</li>
                <li>Requesting correction or deletion of your personal data</li>
                <li>Objecting to or restricting certain data processing activities</li>
                <li>Withdrawing your consent at any time (where consent was given)</li>
              </ul>
              <p className="privacy-paragraph">
                To exercise these rights, please contact us using the details below.
              </p>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-section-title">9. Children&apos;s Privacy</h2>
              <p className="privacy-paragraph">
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have inadvertently gathered personal data from a minor, we will take steps to delete such information promptly.
              </p>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-section-title">10. Changes to This Privacy Policy</h2>
              <p className="privacy-paragraph">
                Namaste Jharkhand may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or for other reasons. Any updates will be posted on this page with a revised &quot;Last updated&quot; date. Continued use of the website after changes indicates your acceptance of the revised Privacy Policy.
              </p>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-section-title">11. Contact Us</h2>
              <p className="privacy-paragraph">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data handling practices, please contact us at:
              </p>
              <p className="privacy-paragraph">
                Email: info@namastejharkhand.com
              </p>
            </div>

            <p className="privacy-paragraph privacy-footer">
              By using Namaste Jharkhand, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

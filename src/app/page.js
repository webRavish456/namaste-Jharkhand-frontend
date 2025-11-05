"use client"

import Link from 'next/link';
import Image from 'next/image';
import Header from '../component/header';
import { useMediaQuery } from "@mui/material";
export default function Home() {

  const isSmscreen = useMediaQuery("(max-width:768px)");

  return (
    <div>

      {/* Hero Section with Background Image */}
      <section className="relative h-[540px] flex flex-col overflow-hidden hero-image-section">
      
        {/* Background Image - Parasnath Temple */}
        <div className="absolute inset-0 w-full h-[100%]">
          <Image
            src="/parasnath-mandir.webp"
            alt="Parasnath Temple - Jharkhand"
            fill
            className="object-cover w-full"
            style={{objectPosition: 'center 68%', objectFit: 'cover'}}
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Header inside hero section */}
        <div className="relative z-20">
          <Header />
        </div>
        
        {/* Smoke/Fog Effect at Bottom */}
        <div className= "smoke-effect-bottom" >
          <Image
            src="/smoke-group.webp"
            alt="Smoke"
            fill
            className="object-cover w-full opacity-100"
            priority
          />
        </div> 
      
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 flex-1 grid gap-10 items-center justify-center relative sm:bottom-4 lg:bottom-6 bottom-0 ">
          <h1 className="mb-0 leading-tight grid gap-0">
            <div className="text-1xl sm:text-3xl md:text-5xl page-title">
              WELCOME TO
            </div>
            <div className="font-bold text-white/60 jharkhand-title" >
              JHARKHAND
            </div>
          </h1>
          <p className="lg:mt-6 sm:mt-4 xsm:mt-2  lg:mb-12 sm:mb-8 mb-4 mx-auto lg:max-w-5xl lg:px-12 sm:px-8 px-0  experience-title">
            Experience the untamed beauty of Jharkhand - where ancient forests meet cascading waterfalls, tribal culture thrives, and adventure awaits at every turn.
          </p>
        </div>
     
      </section>


      {/* Sarhul and Map Section */}
      <section className="pb-1  explore-section">

      

        <div className="max-w-6xl mx-auto px-2 sm:px-2 lg:px-2 relative">
      

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 sm:gap-8 gap-6 z-10 items-center justify-center">
           
            <div className="grid text-center gap-2">
              <div className="relative explore-image-container z-10">
          <Image
                  src="/explore_image.webp"
                  alt="Explore Jharkhand"
                  width={180}
                  height={120}
                  className="custom-image"
                />
              </div>
              <div className="grid gap-2">
                <h3 className="explore-title">Explore the soul of Jharkhand</h3>
                <h1 className="header-title explore-heading-title">Land of Forest : <span style={{color: "var(--secondary-color)"}}>Jharkhand</span></h1>
              </div>
            </div>
            
     
            <div className="flex justify-center lg:justify-start z-10 explore-land-image">
            <Image
              src="/Jharkhand.webp"
              alt="Jharkhand Map"
              width={600}
              height={450}
            />
            </div>
          </div>
        </div>
      </section>


      {/* Discover Perfect Experience Section */}
      <section  style={{backgroundColor: '#E7F6E9'}}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 text-center">
          <h1 className="header-title discover-header-title" style={{color: '#2B8C54'}}>
            Discover your perfect <span style={{color: '#682900'}}>Jharkhand Experience</span>
          </h1>
         
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 sm:px-3 lg:px-4 discover-image-container">
          
            <div className="text-center ">
              <div className="w-68 h-68 mx-auto mb-4 rounded-full overflow-hidden discover-image-card">
                <Image
                  src="/dalma-wildlife.webp"
                  alt="Dalma Wildlife Sanctuary"
                  width={300}
                  height={225}
                  className="w-full h-full object-fill"
                />
              </div>
              <h3 className="discover-image-title">Dalma Wildlife</h3>
            </div>

        
            <div className="text-center ">
              <div className="w-68 h-68 mx-auto mb-4 rounded-full overflow-hidden discover-image-card">
                <Image
                  src="/badrinath.webp"
                  alt="Baidyanath Dham"
                  width={300}
                  height={225}
                  className="w-full h-full"
                />
              </div>
              <h3 className="discover-image-title">Baidyanath Dham</h3>
            </div>


            <div className="text-center ">
              <div className="w-68 h-68 mx-auto mb-4 rounded-full overflow-hidden discover-image-card">
                <Image
                  src="/Jubilee-Park-picture.webp"
                  alt="Jubilee Park"
                  width={300}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="discover-image-title">Jubilee Park</h3>
            </div>

            <div className="text-center ">
              <div className="w-68 h-68 mx-auto mb-4 rounded-full overflow-hidden discover-image-card">
                <Image
                  src="/sun-temple.webp"
                  alt="Sun Temple"
                  width={300}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="discover-image-title">Sun Temple</h3>
            </div>

      
            <div className="text-center ">
              <div className="w-68 h-68 mx-auto mb-4 rounded-full overflow-hidden discover-image-card">
                <Image
                  src="/parasnath.webp"
                  alt="Parasnath Peak"
                  width={300}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="discover-image-title">Parasnath Peak</h3>
            </div>

  
              <div className="text-center ">
                <div className="w-68 h-68 mx-auto mb-4 rounded-full overflow-hidden discover-image-card">
                <Image
                  src="/patratu-dam.webp"
                  alt="Patratu Dam"
                  width={300}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="discover-image-title">Patratu Dam</h3>
            </div>
          </div>
          <Link href="/explore-jharkhand">
          <div className="view-more-button-container">
           
              <button className="view-more-button">View More</button>
            </div>
          </Link>
        </div>
      </section>
      <div className="border-discover"></div>

 

      {/* Rich Culture & Heritage Section */}
      <section className="py-9 bg-white cultural-heritage-section">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-4">
          <div className="text-center mb-12 flex flex-col gap-3 ">
            <h2 className="rich-culture-heritage-title">
              Rich Culture <span style={{color: '#682900'}}>Heritage</span>
            </h2>
            <h3 className="rich-culture-heritage-subtitle">
              Echoes of Our Ancestors, Colors of Our Culture
            </h3>
            <p className=" rich-culture-heritage-content" style={{position: 'relative', left: '-10px', width: '  102%'}}>
              Dive deep into the vibrant culture of Jharkhand, where ancient traditions blend seamlessly with modern life, creating a unique tapestry of experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 py-9 lg:grid-cols-2 gap-10 lg:gap-22 items-center">
          
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
            
              <div className="relative cultural-heritage-image z-2">
                <Image
                  src="/sarhul.webp"
                  alt="Sarhul Festival"
                  width={550}
                  height={600}
                  className="custom-image "
                />
                <div className="absolute bottom-2 left-4 text-white">
                  <h3 className="cultural-sarhul-title relative top-2">Sarhul <span style={{color: '#fff'}}>Festival</span></h3>
                  <p className="cultural-sarhul-content">Celebrating the <span style={{color: '#682900'}}>arrival of spring</span></p>
                </div>
              </div>

              <div className="absolute cultural-heritage-image-container z-1"></div>
           
            </div>
            </div>
            
         
            <div className="flex flex-col gap-10 sm:mt-0 mt-6">
    
              <div className="flex items-start cultural-heritage-card">
                <div className="heritage-icon mr-4">
                 <Image className="custom-image" src="/heritage.svg" alt="Tribal Heritage" width={62} height={62} />
                </div>
                <div>
                  <h3 className="cultural-heritage-title">Tribal Heritage</h3>
                  <p className="cultural-heritage-content">
                    Experience the rich traditions of 32 tribal communities, including Santhal, Munda, and Oraon tribes.
                  </p>
                </div>
              </div>

            
              <div className="flex items-start cultural-heritage-card">
                <div className="folk-icon mr-4">
                  <Image className="custom-image" src="/folk.svg" alt="Folk Music & Dance" width={62} height={62} />
                </div>
                <div>
                  <h3 className="cultural-heritage-title">Folk Music & Dance</h3>
                  <p className="cultural-heritage-content">
                    Immerse yourself in vibrant folk performances like Jhumar, Paika, and Chhau dance forms.
                  </p>
                </div>
              </div>

             
              <div className="flex items-start cultural-heritage-card">
                <div className="arts-icon mr-4">
                 <Image className="custom-image" src="/arts.svg" alt="Arts & Crafts" width={62} height={62} />
                 </div>
                <div>
                  <h3 className="cultural-heritage-title">Arts & Crafts</h3>
                  <p className="cultural-heritage-content">
                    Discover exquisite handicrafts, tribal paintings, and traditional pottery made by local artisans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


 
      <div className="lg:py-20 py-10 explore-heritage-section">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           
            <div className="shadow-lg cultural-card">
              <div className="culture">
              <h3 className="cultural-card-title">Tribal Heritage</h3>
              <p className="cultural-card-content">
                Experience the rich traditions of 32 tribal communities including Santhal, Munda, and Oraon tribes.
              </p>
              </div>
            </div>

   
            <div className="shadow-lg cultural-card">
              <div className="culture">
              <h3 className="cultural-card-title">Folk Music & Dance</h3>
              <p className="cultural-card-content">
                Immerse yourself in vibrant folk performances like Jhumar, Paika, and Chhau dance forms.
              </p>
              </div>
            </div>

          
            <div className="shadow-lg cultural-card">
              <div className="culture">
              <h3 className="cultural-card-title">Arts & Crafts</h3>
              <p className="cultural-card-content">
                Discover exquisite handicrafts, tribal paintings, and traditional pottery made by local artisans.
              </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

     
      {/* Explore Jharkhand Section */}
      <section className="relative explore-jharkhand-section">
        <div className="absolute inset-0 h-75 bg-cover bg-center bg-no-repeat explore-jharkhand"></div>
        <div className="explore-jharkhand-container">
          <div className="z-999 explore-jharkhand-content-container">
            <div className="rounded-3xl p-10 text-white max-w-2xl explore-jharkhand-card flex flex-col gap-4">
              <h2 className="explore-jharkhand-title">
                Want to Explore Jharkhand?
              </h2>
              <p className="explore-jharkhand-content" style={{color: '#FFFFFF'}}>
                Then feel free to connect with our team of experts who&apos;re always there to make your journey incredible.
              </p>
              <div className='explore-jharkhand-button-container'>
              <Link href="/contact-us">
                <button className="explore-jharkhand-button">
                  Send Us Query
                </button>
              </Link>
              <p className="explore-jharkhand-content" style={{color: '#FFFFFF'}}>
                OR Call Us at: <span className="text-white">+919102759985</span>
              </p>
              </div>
            </div>
            
            <div className="relative z-999 bottom-16 explore-jharkhand-image">
              <Image
                src="/jharkhand-home-image.webp"
                alt="Jharkhand Temple"
                width={440}
                height={280}
                className='custom-image rounded-lg'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Incredible Jharkhand Section */}
      <section className="bg-cover">
        <div className="w-full h-170 incredible-jharkhand-bg relative" style={{backgroundImage: 'url(/temple.jpg)',backgroundSize: 'cover', backgroundPosition: 'center 60%', filter: 'brightness(1.2) contrast(1.1)'}}>
          {/* Light overlay to make background lighter */}
          <div className="absolute inset-0 bg-white/0"></div>
           <div className="relative max-w-6xl mx-auto px-2  sm:px-4 lg:px-2 incredible-jharkhand-container z-10">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
            <div className="text-gray-800">
              <h2 className="text-4xl font-bold header-title incredible-jharkhand-title">
                <span>Incredible</span>{' '}
                <span style={{color: '#682900'}}>Jharkhand</span>
              </h2>
              <p className="incredible-jharkhand-content">
                Jharkhand is an emerging tourism hub, celebrated for its serene landscapes, spiritual sites, vibrant fairs, and eco-tourism spots. From rolling hills and pristine lakes to cultural richness, the state offers travelers unique experiences away from crowded destinations.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/component/header';
import Image from 'next/image';

export default function ExploreJharkhandDetail() {
  const params = useParams();

  const [detailData, setDetailData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch explore jharkhand detail data from API
  const fetchDetailData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/explore-jharkhand-details/explore/${params.id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch detail data');
      }
      
      const data = await response.json();
      setDetailData(data.data);
    } catch (err) {
      console.error('Error fetching detail data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };



  // Fetch data when component mounts
  useEffect(() => {
    if (loading) {
      fetchDetailData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);





  

  
  return (
    <>
      {loading ? (
       <div className="min-h-screen bg-gray-50">
    
         
         {/* Hero Section Skeleton */}
         <section className="relative h-[340px] flex flex-col overflow-hidden bg-gray-200 ">
           <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
           <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 flex-1 flex items-center justify-center bottom-4">
             <div className="h-8 bg-gray-400 rounded animate-pulse w-64"></div>
           </div>
         </section>

         {/* Content Section Skeleton */}
         <section className="pt-4 xs:pt-8 sm:pt-14 lg:pt-24 pb-4">
           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2">
             
             {/* Introduction Section Skeleton */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
               <div className="space-y-4">
                 <div className="h-4 bg-gray-300 rounded animate-pulse w-full"></div>
                 <div className="h-4 bg-gray-300 rounded animate-pulse w-full"></div>
                 <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4"></div>
                 <div className="h-4 bg-gray-300 rounded animate-pulse w-full"></div>
                 <div className="h-4 bg-gray-300 rounded animate-pulse w-2/3"></div>
               </div>
               <div className="relative h-96 bg-gray-300 rounded-lg animate-pulse"></div>
             </div>

             {/* Detail Description Skeleton */}
             <div className="mb-16 space-y-4">
               <div className="h-4 bg-gray-300 rounded animate-pulse w-full"></div>
               <div className="h-4 bg-gray-300 rounded animate-pulse w-full"></div>
               <div className="h-4 bg-gray-300 rounded animate-pulse w-4/5"></div>
               <div className="h-4 bg-gray-300 rounded animate-pulse w-full"></div>
               <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4"></div>
               <div className="h-4 bg-gray-300 rounded animate-pulse w-full"></div>
             </div>

             {/* Gallery Skeleton */}
             <div className="mb-8">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {[...Array(6)].map((_, index) => (
                   <div key={index} className="relative h-[250px] bg-gray-300 rounded-lg animate-pulse"></div>
                 ))}
               </div>
             </div>

           </div>
         </section>
       </div>
      ) : (
    <div className="min-h-screen bg-gray-50">
     
     <section className="relative h-[400px] flex flex-col overflow-hidden explore-details-hero-image-section">
      
      {/* Background Image - Parasnath Temple */}
      <div className="absolute inset-0 w-full">
      <Image
            src={detailData[0].bannerImage || '/placeholder-image.webp'}
            alt={detailData[0].title || 'Explore Destination'}
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
      <div className= "explore-id-smoke-effect-bottom" >
          <Image
            src="/smoke-group.webp"
            alt="Smoke"
            fill
            className="object-cover w-full opacity-100"
            priority
          />
        </div> 
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 flex-1 flex items-center justify-center bottom-4">
        <h1 className='explore-header-title'>{detailData[0].exploreJharkhandId.title || 'Destination'}</h1>
      </div>
   
    </section>
     
     

        <section className=" pt-4 xs:pt-8 sm:pt-14 lg:pt-24 pb-4 explore-jharkhandId-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2">
          
    
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            
            <div>
              <div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed introduction-description"
                dangerouslySetInnerHTML={{ __html: detailData[0].introductionDescription }}
              />
            </div>
            
      
            <div className="relative h-full">
              <Image
                src={detailData[0].introductionImage || '/placeholder-image.webp'}
                alt={`${detailData.title} - Introduction`}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mb-16 ">
            <div 
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed introduction-detail-description"
              dangerouslySetInnerHTML={{ __html: detailData[0].detailDescription || 'No detailed information available.' }}
            />
          </div>

         
          {detailData[0].viewMoreImages && detailData[0].viewMoreImages.length > 0 && (
            <div className="mb-8 ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {detailData[0].viewMoreImages.map((image, index) => (
                  <div key={index} className="relative group ">
                    <Image
                      src={image}
                      alt={`${detailData[0].title} - Gallery ${index + 1}`}
                      width={315}
                      height={315}
                      className="w-full h-[250px] object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0  transition-colors duration-300 rounded-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>


    </div>
     )
    }
    </>
  )}    

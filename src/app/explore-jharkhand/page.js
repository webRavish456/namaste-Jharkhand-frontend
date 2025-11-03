'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/component/header';
import Image from 'next/image';

export default function ExploreJharkhand() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [exploreData, setExploreData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleItems, setVisibleItems] = useState(6);
  const [hasMore, setHasMore] = useState(true);

  // Fetch explore jharkhand data from API
  const fetchExploreData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/explore-jharkhand`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch explore data');
      }
      
      const data = await response.json();
      setExploreData(data.data || []);
      
      // Check if there are more items to show
      setHasMore((data.data || []).length > 6);
    } catch (err) {
      console.error('Error fetching explore data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Load more data
  const handleLoadMore = () => {
    if (!loading && hasMore) {
      const newVisibleItems = visibleItems + 6;
      
      // If remaining items are less than 6, show all remaining items
      if (newVisibleItems >= exploreData.length) {
        setVisibleItems(exploreData.length);
        setHasMore(false);
      } else {
        setVisibleItems(newVisibleItems);
      }
    }
  };

  // Set client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Initial data fetch
  useEffect(() => {
    if (isClient) {
      fetchExploreData();
    }
  }, [isClient]);

  // Update hasMore when exploreData changes
  useEffect(() => {
    if (exploreData.length > 0) {
      setHasMore(visibleItems < exploreData.length);
    }
  }, [exploreData, visibleItems]);

  // Handle card click
  const handleCardClick = (item) => {
    // Navigate to detail page
    router.push(`/explore-jharkhand/${item._id}`);
  };
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        </div>
      </div>
    );
  }



  return (
    <div className="min-h-screen bg-gray-50">


      <section className="relative h-[400px] flex flex-col overflow-hidden explore-hero-image-section ">
      
      {/* Background Image - Parasnath Temple */}
      <div className="absolute inset-0 w-full">
        <Image
          src="/Jharkhand-tours.webp"
          alt="Jharkhand Tours - Jharkhand"
          fill
          className="object-cover w-full"
          style={{objectPosition: 'center 56%', objectFit: 'cover'}}
          priority
        />
        <div className="absolute inset-0 bg-black/25"></div>
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
        <h1 className='explore-jharkhand-journey-title'>Journey Through Jharkhand</h1>
      </div>
   
    </section>

      {/* Hero Section */}
      <section className="explore-jharkhand-section ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2 pb-12">
      <div className='explore-jharkhand-content'>
        <p>Discover the mesmerizing beauty and rich cultural heritage of Jharkhand — a state blessed with lush green forests, majestic waterfalls, sacred shrines, diverse wildlife, and an array of tribal traditions. From the scenic hills of Netarhat to the vibrant tribal festivals, every corner of Jharkhand tells a story of its glorious past and natural splendor.</p>
         <p>Whether you seek adventure, spiritual enlightenment, or a peaceful retreat in nature, Jharkhand offers something unique for every traveler. Wander through dense national parks, admire historic forts, and experience the warmth of local communities and their colorful art forms.</p>
      </div>
      </div>
     
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2 pt-6 pb-12">
          
          <div style={{padding: '10px',backgroundColor: '#fff', display:'flex',flexDirection: 'column', alignItems: 'center', borderRadius: '14px'}}>
          
          {/* Skeleton Loading State */}
          {loading && exploreData.length === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white overflow-hidden hover:shadow-xl transition-shadow" style={{ borderRadius: '16px', height: '466px', width: '25vw'}}>
                  <div className="h-full flex flex-col">
                    {/* Image Skeleton */}
                    <div className="h-2/3 bg-gray-300 animate-pulse w-full"></div>
                    {/* Content Skeleton */}
                    <div className="h-3/8 flex flex-col gap-2" style={{padding: '10px'}}>
                      <div className="h-6 bg-gray-300 rounded animate-pulse w-full"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-300 rounded animate-pulse w-full"></div>
                        <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="flex justify-center items-center py-12">
              <div className="text-center">
                <p className="text-red-600 text-lg mb-4">Error: {error}</p>
                <button 
                  onClick={() => fetchExploreData()}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {/* Dynamic Cards Grid */}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[...exploreData].slice(0, visibleItems).map((item, index) => (
                <div 
                  key={`${item._id || 'item'}-${index}`}
                  className="bg-white overflow-hidden hover:shadow-xl transition-shadow cursor-pointer" 
                  style={{backgroundColor: '#2B8C54', borderRadius: '16px', height: '466px'}}
                  onClick={() => handleCardClick(item)}
                >
                  <div className="h-full flex flex-col">
                    <div className="h-2/3">
                        <Image
                          src={item.exploreImage || '/placeholder-image.webp'}
                          alt={item.title || 'Explore Destination'}
                          width={600}
                          height={240}
                          className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="h-3/8 flex flex-col gap-2" style={{padding: '10px'}}>
                      <h2 className="explore-image-title">{item.title || 'Destination'}</h2>
                      <p className="explore-image-content">
                        {item.description || 'Discover this amazing destination in Jharkhand.'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Data State */}
          {!loading && !error && exploreData.length === 0 && (
            <div className="flex justify-center items-center py-12">
              <p className="text-gray-600 text-lg">No destinations found.</p>
            </div>
          )}

          {/* Load More Button */}
          {exploreData.length > 0 && !loading && hasMore && (
            <div className="load-more-button-container mt-6"  onClick={handleLoadMore}>
              <button 
                className="load-more-button"
           
              >
                Load More
              </button>
            </div>
          )}

          {/* Bottom margin when Load More is not shown */}
          {exploreData.length > 0 && !loading && !hasMore && (
            <div className="mb-10"></div>
          )}

          {/* Load More Skeleton */}
          {loading && exploreData.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
              {[...Array(3)].map((_, index) => (
                <div key={`skeleton-${index}`} className="bg-white overflow-hidden hover:shadow-xl transition-shadow explore-skeleton-card">
                  <div className="h-full flex flex-col">
                    {/* Image Skeleton */}
                    <div className="h-2/3 bg-gray-300 animate-pulse w-full"></div>
                    {/* Content Skeleton */}
                    <div className="h-3/8 flex flex-col gap-2" style={{padding: '10px'}}>
                      <div className="h-6 bg-gray-300 rounded animate-pulse w-full"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-300 rounded animate-pulse w-full"></div>
                        <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          </div>
        </div>
      </section>

    </div>
  );
}

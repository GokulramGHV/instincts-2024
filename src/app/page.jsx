'use client';
import AboutUs from '@/sections/landing/about_us';
import Footer from '@/sections/footer/footer';
import GallerySection from '@/sections/landing/gallery-section';
import HeroSection from '@/sections/landing/hero-section';
import { useEffect, useState } from 'react';
import { NavButton } from '@/components/navbar/navbar';
import BentoGrid from '@/components/bento-grid/bento-grid';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 100); // Change 100 to your desired scroll threshold
    };

    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <main className="min-h-screen">
      {isVisible && (
        <div className="z-[100] fixed top-14 right-10 md:top-20 md:right-20">
          <NavButton className='text-white' />
        </div>
      )}
      <HeroSection />
      <AboutUs />
      <BentoGrid />
      <GallerySection />
      <Footer />
    </main>
  );
}

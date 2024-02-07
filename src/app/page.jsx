import AboutUs from '@/sections/landing/about_us';
import Footer from '@/sections/footer/footer';
import GallerySection from '@/sections/landing/gallery-section';
import HeroSection from '@/sections/landing/hero-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutUs />
      <GallerySection/>
      <Footer />
    </main>
  );
}

import GallerySection from '@/sections/landing/gallery-section';
import Footer from '@/sections/footer/footer';
import HeroSection from '@/sections/landing/hero-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <GallerySection/>
      <Footer />
    </main>
  );
}

import AboutUs from '@/sections/landing/about_us';
import Footer from '@/sections/footer/footer';
import HeroSection from '@/sections/landing/hero-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutUs />
      <Footer />
    </main>
  );
}

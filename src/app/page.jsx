import AboutUs from '@/sections/landing/about_us';
import HeroSection from '@/sections/landing/hero-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutUs />
    </main>
  );
}

import Footer from '@/sections/footer/footer';
import SponsorsHero from '@/sections/sponsors/SponsorsHero';
import SponsorsMain from '@/sections/sponsors/SponsorsMain';

export const metadata = {
  title: 'Instincts 2024 | Sponsors',
  description: 'Instincts 2024 | Sponsors',
};

export default function SponsorsPage() {
  return (
    <main className="min-h-screen">
      <SponsorsHero />
      <SponsorsMain />
      <Footer />
    </main>
  );
}

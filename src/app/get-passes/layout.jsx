import Hero from '@/sections/events-page/hero';
import Footer from '@/sections/footer/footer';

export const metadata = {
  title: 'Instincts 2024 | Get Passes',
  description:
    "Get your passes now! Join us for an unforgettable experience. Don't miss out - reserve your spot today",
};

export default function GetPassesLayout({ children }) {
  return (
    <>
      <Hero
        headingName="GET PASSES"
        heroColor={'#FDAF46'}
        heroImage={'/get_passes/get-passes-hero-image.svg'}
        fontColor={'#202020'}
      />
      {children}
      <Footer />
    </>
  );
}

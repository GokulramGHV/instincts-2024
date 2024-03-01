import Hero from '@/sections/events-page/hero';
import Footer from '@/sections/footer/footer';

export const metadata = {
  title: 'Instincts 2024 | Central Events',
  description: 'Instincts 2024 Central Events',
};

export default function EventLayout({ children }) {
  return (
    <>
      <Hero
        headingName="CENTRAL EVENTS"
        heroColor={'#FEDE88'}
        heroImage={'/central_events/hero-pattern.svg'}
        fontColor={'#202020'}
      />
      {children}
      <Footer />
    </>
  );
}

'use client';
import CarouselPagination from '@/components/landing/carousel-pagination';
import Countdown from '@/components/landing/countdown';
import HeroCarousel from '@/components/landing/hero-carousel';
import PetalPattern from '@/components/landing/petal-pattern';
import Sparkles from '@/components/landing/sparkles';
import SpinningBackground from '@/components/landing/spinning-background';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [slideNo, setSlideNo] = useState(1);

  // increments slideNo every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (slideNo >= 6) {
        setSlideNo(1);
      } else setSlideNo((slideNo) => slideNo + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideNo]);

  return (
    <section className="relative flex h-screen flex-col justify-center items-center  overflow-hidden w-full p-8 sm:px-16 sm:py-12 md:px-24 md:py-20 2xl:py-28 2xl:px-36">
      <SpinningBackground slideNo={slideNo} />
      <div className="z-10 relative w-full h-full">
        <PetalPattern />
        <CarouselPagination slideNo={slideNo} setSlideNo={setSlideNo} />

        <div className="z-10 relative flex flex-col justify-center items-center w-full h-full rounded-[20px] overflow-hidden">
          <Sparkles />
          <HeroCarousel slideNo={slideNo} />
          <div className="absolute left-8 top-8 sm:left-10 sm:top-10 z-20 flex items-center gap-5 sm:gap-10">
            <Image
              src="/logos/SNU.png"
              alt="SNU"
              width={656}
              height={182}
              className="w-20 sm:w-28 lg:w-36"
            />

            <Image
              src="/logos/SSN.png"
              alt="SNU"
              width={404}
              height={178}
              className="w-16 sm:w-24 lg:w-32"
            />
          </div>
          <Image
            src="/logos/Instincts_white.svg"
            alt="SNU"
            width={504}
            height={200}
            className="z-20 w-60 sm:w-96 xl:w-fit"
          />
          <div className="z-20 absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
            <Countdown slideNo={slideNo} />
          </div>
        </div>
      </div>
    </section>
  );
}

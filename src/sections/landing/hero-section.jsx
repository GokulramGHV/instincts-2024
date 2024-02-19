'use client';
import CarouselPagination from '@/components/landing/carousel-pagination';
import Countdown from '@/components/landing/countdown';
import HeroCarousel from '@/components/landing/hero-carousel';
import PetalPattern from '@/components/landing/petal-pattern';
import Sparkles from '@/components/landing/sparkles';
import SpinningBackground from '@/components/landing/spinning-background';
import Navbar, { NavButton } from '@/components/navbar/navbar';
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
    <section className="relative flex h-screen flex-col justify-center items-center  overflow-hidden w-full py-[5vh] px-[10vw] ">
      <SpinningBackground slideNo={slideNo} />
      <div className="z-10 relative w-full h-full">
        {/* <PetalPattern /> */}
        <CarouselPagination slideNo={slideNo} setSlideNo={setSlideNo} />

        <div className="z-10 relative flex flex-col justify-center items-center w-full h-full rounded-[20px] overflow-hidden">
          <Sparkles />
          <HeroCarousel slideNo={slideNo} />
          <div className="absolute left-8 top-8 sm:left-10 sm:top-10 md:right-12 md:top-12 z-20 flex items-center gap-5 sm:gap-10">
            <Image
              src="/logos/SNU.png"
              alt="SNU"
              width={656}
              height={182}
              className="w-20 sm:w-28 lg:w-36"
            />
          </div>

          <div className="flex gap-3 absolute right-8 top-8 sm:right-10 sm:top-10 md:right-12 md:top-12 z-30">
            <Image
              src="/logos/SSN.png"
              alt="SNU"
              width={404}
              height={178}
              className="w-16 sm:w-24 h-fit lg:w-28"
            />
          </div>
          <Image
            src="/logos/Instincts_white.svg"
            alt="SNU"
            width={504}
            height={200}
            className="z-40 w-60 sm:w-[50vh] "
          />
          <div
            className="absolute cursor-pointer height:auto  right-8 top-8 sm:right-10 sm:top-10 z-30 flex items-center gap-5 sm:gap-10"
            onClick={() => setOverlayVisible(!isOverlayVisible)}
          ></div>
          <div className="z-20 absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
            <div className="relative bottom-28 sm:bottom-[21vh] gap-3 flex flex-col justify-center items-center">
              <Image
                src="/logos/hcl-logo-white.png"
                alt="hcl logo"
                className="w-[160px]"
                width={1116}
                height={600}
                quality={100}
              />
              <h3 className="font-satoshi font-bold text-white text-lg sm:text-xl md:text-2xl">
                Presents
              </h3>
            </div>
          </div>

          <div className="z-20 absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
            <Countdown slideNo={slideNo} />
          </div>
        </div>
      </div>
    </section>
  );
}

import { NavButton } from '@/components/navbar/navbar';
import Image from 'next/image';

export default function ComingSoonPage() {
  return (
    <div className="h-screen flex justify-center items-end bg-[#202020] w-full overflow-hidden">
      <Image
        alt="logo"
        className="absolute top-12 left-10 sm:left-20 lg:w-[15vw]"
        src="/logos/Instincts_white.svg"
        width="180"
        height="150"
      />
      <NavButton className="absolute right-10 top-16 sm:right-20 bg-white text-[#202020] z-[100]" />
      <Image
        alt=""
        className="relative bottom-16 scale-[1.5] lg:bottom-0 lg:scale-100 xl:w-[80vw] max-h-[90vh] ml-20"
        src="/coming_soon/bgelement.svg"
        width={886}
        height={694}
      />
      <h2 className="absolute right-20 sm:left-32 top-[25vh] lg:top-[55%] xl:top-[60%] font-satoshi text-xl lg:text-3xl xl:text-4xl text-white font-medium">
        Stay tuned.
      </h2>
      <div className="absolute left-0 top-0 sm:top-[50%] sm:translate-y-[-50%] w-full">
        <div className="relative">
          <Image
            alt=""
            className="relative top-[32vh] sm:top-0 left-10 sm:left-24 lg:-top-32 w-[180px] sm:w-[18vw] z-40"
            src="/coming_soon/undercon.svg"
            width={312}
            height={312}
          />
          <Image
            alt=""
            className="w-full hidden md:block absolute left-0 top-0 lg:-top-32 z-10"
            src="/coming_soon/strip2.svg"
            width={1280}
            height={431}
          />
          <Image
            alt=""
            className="absolute left-0 -top-32 z-30 w-full hidden max-sm:block"
            src="/coming_soon/smstrip2.svg"
            width={390}
            height={932}
          />
          <Image
            alt=""
            className="absolute left-0 top-20 z-20 w-full hidden max-sm:block"
            src="/coming_soon/smstrip1.svg"
            width={390}
            height={665}
          />
          <Image
            alt=""
            className="absolute hidden top-10 left-0 md:block w-full z-10 max-sm:hidden"
            src="/coming_soon/strip1.svg"
            width="100"
            height="100"
          />
        </div>
      </div>
    </div>
  );
}

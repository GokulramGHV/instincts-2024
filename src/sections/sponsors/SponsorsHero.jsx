import { NavButton } from '@/components/navbar/navbar';
import Image from 'next/image';

export default function SponsorsHero() {
  return (
    <header className="w-full bg-[#FFFCEA] pb-6 overflow-x-clip">
      <div className="md:px-12 px-6 pt-10 flex justify-between items-center w-full ">
        <Image
          src="/events-page/top-logo.svg"
          className="sm:w-[276px] w-[200px] sm:h-[106px] h-[77px]"
          width={276}
          height={106}
          alt="instincts-logo"
        />
        <NavButton />
      </div>
      <div className="flex items-center py-8 pl-6 w-full justify-between overflow-hidden">
        <Image
          src="/sponsors/title.svg"
          alt="sponsors title"
          className="w-1/2"
          width={556}
          height={109}
        />
        <Image
          alt="sponsors-pattern"
          src="/sponsors/pattern.svg"
          className="w-1/2 ml-12"
          width={630}
          height={318}
        />
        <Image
          alt="sponsors-pattern"
          src="/sponsors/pattern.svg"
          className="w-1/2 hidden lg:block"
          width={630}
          height={318}
        />
      </div>
    </header>
  );
}

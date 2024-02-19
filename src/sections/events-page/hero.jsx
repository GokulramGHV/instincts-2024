import { NavButton } from '@/components/navbar/navbar';
import { Londrina_Solid } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
const londonFont = Londrina_Solid({
  weight: ['100', '300', '400', '900'],
  subsets: ['latin'],
});

export default function Hero({
  heroImage,
  headingName,
  fontColor,
  heroColor,
}) {
  return (
    <>
      <div className="relative overflow-clip" style={{
        backgroundColor: heroColor,
      }}>
        <div className="">
          <div className="md:px-12 px-6 pt-10 flex justify-between items-center">
            <Link href={'/'}>
              <Image
                src="/events-page/top-logo.svg"
                className="sm:w-[276px] w-[200px] sm:h-[106px] h-[77px]"
                width={276}
                height={106}
                alt="instincts-logo"
              />
            </Link>
            <NavButton className="text-white" />
          </div>
          <div className="flex items-center py-12 md:pl-12 pl-6 gap-6 sm:gap-12 xl:gap-32 2xl:gap-40">
            <h1
              className={`${londonFont.className} md:text-9xl xl:text-[10rem] 2xl:text-[13rem] text-7xl sm:my-auto mt-auto`}
              style={{
                color: fontColor
              }}
            >
              {headingName.split(" ")[0]}
              <br />
              {headingName.split(" ")[1]}
            </h1>
            <Image
              alt="hero-pattern"
              src={heroImage}
              className="h-full object-cover w-full"
              width={797}
              height={290}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

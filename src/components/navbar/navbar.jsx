'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { RiCloseFill } from 'react-icons/ri';
import navContext from '@/hooks/navContext';
import { Londrina_Solid } from 'next/font/google';

const londrina_solid = Londrina_Solid({
  subsets: ['latin'],
  weight: ['400', '100', '300', '900'],
});

const navOptions = [
  { label: 'HOME', imageSrc: '/navbar_images/home.png', link: '/' },
  {
    label: 'CLUB EVENTS',
    imageSrc: '/navbar_images/club_events.png',
    link: '/events',
  },
  {
    label: 'CENTRAL EVENTS',
    imageSrc: '/navbar_images/central_events.png',
    link: '/central-events',
  },
  {
    label: 'SCHEDULE',
    imageSrc: '/navbar_images/get_passes.png',
    link: '/schedule',
  },
  {
    label: 'GALLERY',
    imageSrc: '/navbar_images/gallery.png',
    link: '/#gallery_section',
  },
  {
    label: 'CONTACT US',
    imageSrc: '/navbar_images/contact_us.png',
    link: '/contact-us',
  },
  {
    label: 'SPONSORS',
    imageSrc: '/navbar_images/sponsors.png',
    link: '/sponsors',
  },
];

export function NavButton({ className = '', iconClassName = '' }) {
  const { isNavOpen, setNavOpen } = useContext(navContext);
  return (
    <>
      {!isNavOpen && (
        <div
          className={`${className} cursor-pointer z-30 bg-[#202020] p-2 rounded-xl`}
          onClick={() => setNavOpen(!isNavOpen)}
        >
          <FaBars className="text-inherit text-2xl sm:text-3xl lg:text-4xl transition-transform transform hover:scale-110" />
        </div>
      )}
    </>
  );
}

const Navbar = () => {
  const [hoveredOption, setHoveredOption] = useState(null);
  const { isNavOpen, setNavOpen } = useContext(navContext);

  return (
    <>
      {isNavOpen && (
        <div
          onMouseOut={() => setHoveredOption(null)}
          className="fixed top-0 left-0 h-[100vh]  w-[100vw] z-[100] bg-[#202020] overflow-y-auto md:lg:overflow-hidden"
        >
          {hoveredOption && (
            <Image
              alt="nav-background"
              src={hoveredOption?.imageSrc}
              unoptimized
              width={0}
              height={0}
              sizes="100vw"
              className="absolute w-screen z-[-1]"
            />
          )}
          {isNavOpen && hoveredOption === null && (
            <div
              className="fixed right-12 md:right-24 lg:right-32 top-16 cursor-pointer z-30 md:bg-inherit p-1 rounded md:p-0 max-w-min"
              onClick={() => setNavOpen(!isNavOpen)}
            >
              <RiCloseFill className="text-white text-3xl sm:text-4xl lg:text-5xl transition-transform transform hover:scale-110" />
            </div>
          )}
          <Image
            src="/logos/Instincts_white.svg"
            alt="SNU"
            width={250}
            height={100}
            className="lg:block hidden fixed right-12 md:right-24 lg:right-32 bottom-16"
          />

          <div className="relative flex justify-between py-16 md:py-24 lg:py-10 px-12 md:px-24 lg:px-32 h-screen w-screen">
            <ul
              className={`flex flex-col sm:gap-7 w-full ${londrina_solid.className}`}
            >
              {navOptions.map((option, index) => (
                <li
                  key={index}
                  className="flex flex-1 items-center transition-all duration-500"
                >
                  <div
                    className={`cursor-pointer h-full ${hoveredOption === option
                      ? 'text-black font-semibold md:text-7xl sm:text-6xl text-5xl '
                      : 'text-white md:text-6xl sm:text-5xl text-4xl'
                      }`}
                    onMouseOver={() => setHoveredOption(option)}
                  >
                    <Link
                      href={option.link}
                      onClick={() => {
                        setNavOpen(!isNavOpen);
                        setHoveredOption(null);
                      }}
                    >
                      <p
                        className="transition-text duration-200"
                        style={
                          hoveredOption !== option && hoveredOption !== null
                            ? {
                              color: 'transparent',
                              WebkitTextStrokeWidth: '2px',
                              WebkitTextStrokeColor: 'black',
                            }
                            : {}
                        }
                      >
                        {option.label}
                      </p>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";

const navOptions = [
  { label: "HOME", imageSrc: "/navbar_images/home.png", link: "/" },
  {
    label: "CLUB EVENTS",
    imageSrc: "/navbar_images/club_events.png",
    link: "/",
  },
  {
    label: "CENTRAL EVENTS",
    imageSrc: "/navbar_images/central_events.png",
    link: "/",
  },
  { label: "GALLERY", imageSrc: "/navbar_images/gallery.png", link: "/" },
  { label: "CONTACT US", imageSrc: "/navbar_images/contact_us.png", link: "/" },
  { label: "SPONSORS", imageSrc: "/navbar_images/sponsors.png", link: "/" },
  { label: "GET PASSES", imageSrc: "/navbar_images/get_passes.png", link: "/" },
];

const Navbar = () => {
  const [hoveredOption, setHoveredOption] = useState(null); // Added state for hoveredOption
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="z-10">
      <div
        className="absolute cursor-pointer z-30 right-0 top0 md:my-[calc(5vh+50px)] md:mx-[calc(10vw+70px)] my-[calc(5vh+20px-0.5rem)] mx-[calc(10vw+20px-0.5rem)] bg-black md:bg-inherit p-1 rounded md:p-0"
        onClick={() => setNavbarOpen(!isNavbarOpen)}
      >
        {isNavbarOpen ? (
          hoveredOption === null && (
            <RiCloseFill className="text-white text-3xl sm:text-4xl lg:text-5xl transition-transform transform hover:scale-110" />
          )
        ) : (
          <FaBars className="text-white text-2xl sm:text-3xl lg:text-4xl transition-transform transform hover:scale-110" />
        )}
      </div>
      {isNavbarOpen && (
        <div
          className="fixed z-20 inset-0 bg-cover"
          style={
            hoveredOption
              ? { backgroundImage: `url(${hoveredOption.imageSrc})` }
              : { backgroundColor: "black" }
          }
        >
          <Image
            src="/logos/Instincts_white.svg"
            alt="SNU"
            width={504}
            height={200}
            style={{
              transform: "translate(70%, 125%) scale(.5)",
            }}
            className="transition-all absolute z-40 w-60 sm:w-96 xl:w-fit lg:left-0 lg:top-0 lg:right-0 lg:bottom-0 lg:m-auto lg:block hidden"
          />
          <div className="relative py-16 md:py-24 lg:py-10 px-16 md:px-24 lg:px-32 font-londrina-solid font-normal">
            <ul style={{ fontFamily: "Londrina Solid, sans-serif" }}>
              {navOptions.map((option, index) => (
                <li
                  key={index}
                  className="mb-10 sm:mb-12 lg:mb-6 flex items-center transition-all duration-500 gap-10"
                >
                  <div
                    className={`cursor-pointer ${
                      hoveredOption === option
                        ? "text-black font-semibold md:text-7xl sm:text-6xl text-5xl "
                        : "text-white md:text-6xl sm:text-5xl text-4xl"
                    }`}
                    onMouseOver={() => setHoveredOption(option)}
                    onMouseOut={() => setHoveredOption(null)}
                  >
                    <Link
                      href={option.link}
                      onClick={() => {
                        setNavbarOpen(!isNavbarOpen);
                        setHoveredOption(null);
                      }}
                    >
                      <p
                        className="transition-text duration-200"
                        style={
                          hoveredOption !== option && hoveredOption !== null
                            ? {
                                color: "transparent",
                                WebkitTextStrokeWidth: "2px",
                                WebkitTextStrokeColor: "black",
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
    </div>
  );
};

export default Navbar;

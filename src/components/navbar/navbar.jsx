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
        className="absolute cursor-pointer right-8 top-8 sm:right-60 sm:top-20 z-30"
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
            className="transition-all absolute z-40 w-60 sm:w-96 xl:w-fit left-0 top-0 right-0 bottom-0 m-auto"
          />
          <div className="relative py-10 px-32 font-londrina-solid font-normal">
            <ul
              className="text-white text-3xl"
              style={{ fontFamily: "Londrina Solid, sans-serif" }}
            >
              {navOptions.map((option, index) => (
                <li
                  key={index}
                  className="mb-6 flex items-center transition-all duration-500 gap-10"
                >
                  <div
                    className={`cursor-pointer ${
                      hoveredOption === option
                        ? "text-black font-semibold text-7xl"
                        : "text-white text-6xl"
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

"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";

const navOptions = [
  { label: "HOME", imageSrc: "/navbar_images/home.png" },
  { label: "CLUB EVENTS", imageSrc: "/navbar_images/club_events.png" },
  { label: "CENTRAL EVENTS", imageSrc: "/navbar_images/central_events.png" },
  { label: "GALLERY", imageSrc: "/navbar_images/gallery.png" },
  { label: "CONTACT US", imageSrc: "/navbar_images/contact_us.png" },
  { label: "SPONSORS", imageSrc: "/navbar_images/sponsors.png" },
  { label: "GET PASSES", imageSrc: "/navbar_images/get_passes.png" },
];

const Navbar = () => {
  const [hoveredOption, setHoveredOption] = useState(null); // Added state for hoveredOption
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  return (
    <div className="z-10">
      <div
        className="absolute cursor-pointer right-8 top-8 sm:right-52 sm:top-20 z-30"
        onClick={() => setOverlayVisible(!isOverlayVisible)}
      >
        {isOverlayVisible ? (
          hoveredOption === null && (
            <RiCloseFill className="text-white text-3xl sm:text-4xl lg:text-5xl transition-transform transform hover:scale-110" />
          )
        ) : (
          <FaBars className="text-white text-2xl sm:text-3xl lg:text-4xl transition-transform transform hover:scale-110" />
        )}
      </div>
      {isOverlayVisible && (
        <div
          className="fixed z-20 inset-0"
          style={
            hoveredOption
              ? { backgroundImage: `url(${hoveredOption.imageSrc})` }
              : { backgroundColor: "black" }
          }
        >
          <div className="relative top-25.5 left-108 p-46 p-20 gap-17  rounded-[20px] text-white font-londrina-solid font-normal">
            <ul
              className="text-white text-3xl"
              style={{ fontFamily: "Londrina Solid, sans-serif" }}
            >
              {navOptions.map((option, index) => (
                <li
                  key={index}
                  className="my-4 flex items-center transition-all duration-500 "
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
                    <p
                      className="transition-text duration-200"
                      style={
                        hoveredOption !== option && hoveredOption !== null
                          ? { color: "black" } // need to make the text fill none and have only border in this case
                          : {}
                      }
                    >
                      {option.label}
                    </p>
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

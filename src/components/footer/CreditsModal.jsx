"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const development = [
  {
    name: "Gokul Ram",
    link: "https://www.linkedin.com/in/gokulrama/",
  },
  {
    name: "Nithin",
    link: "https://www.linkedin.com/in/thenithinbalaji/",
  },
  {
    name: "Gagan",
    link: "https://www.linkedin.com/in/gagan-sai-c-s-b82041245/",
  },
  {
    name: "Prajeeth",
    link: "https://www.linkedin.com/in/bprajeeth/",
  },
  {
    name: "Gavutham",
    link: "https://www.linkedin.com/in/gavutham-kanagaraj/",
  },
  {
    name: "Joshua",
    link: "https://www.linkedin.com/in/joshuabharathi/",
  },
  {
    name: "Akash",
    link: "https://www.linkedin.com/in/akash-rangesh-3bb445249",
  },
  {
    name: "Vaishnave",
    link: "https://www.linkedin.com/in/vaishnavejp/",
  },
  {
    name: "Nitheesh",
    link: "https://www.linkedin.com/in/nitheeshraajar/",
  },
  {
    name: "Vishal",
    link: "https://www.linkedin.com/in/vishal-murugan-251b80258",
  },
  {
    name: "Vetrivel M",
    link: "https://www.linkedin.com/in/vetrivel-m-458a3a1b7/",
  },
  {
    name: "Judah",
    link: "https://www.linkedin.com/in/judahjacinth/",
  },
  {
    name: "Charumathi",
    link: "https://www.linkedin.com/in/charumathi-p/",
  },
];

const design = [
  { name: "Supraja", link: "https://www.linkedin.com/in/suprajasridh/" },
  { name: "Vishwajith", link: "https://www.linkedin.com/in/vshwjth/" },
];

const Name = ({ item }) => {
  return (
    <a
      href={item.link}
      target="_blank"
      className="underline font-bold font-satoshi "
      style={{ color: "#4A4A4A" }}
    >
      {item.name}
    </a>
  );
};

export function CreditsModal({ isModalOpen, setModalOpen }) {
  const yScroll = typeof window !== "undefined" ? window.scrollY : 0;
  const ref = useRef();

  const closeModal = () => {
    document.body.style.overflow = "inherit";
    setModalOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      event.preventDefault();
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.getAttribute("name") !== "button"
      ) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen, setModalOpen]);

  return (
    isModalOpen && (
      <div
        style={{
          top: yScroll,
          background: "rgba(0, 0, 0, 0.4)",
        }}
        className="absolute top-0 right-0 w-[100vw] h-[100vh] lg:py-[50px] lg:px-[100px] md:p-[50px] flex items-center justify-center p-[10px] z-50"
      >
        <div
          style={{
            border: "5px solid black",
            borderRadius: "20px",
            background: "white",
          }}
          ref={ref}
          className="flex flex-col items-center mx-auto lg:w-[65vw] 2xl:w-[50vw] md:py-[30px] md:px-[30px] lg:max-h-[max-content] py-[20px] px-[25px] max-h-[100%] overflow-y-auto "
        >
          <AiOutlineCloseCircle
            color="#8F8D8D"
            onClick={closeModal}
            size={30}
            className="self-end"
          />
          <h1 className="text-xl md:text-2xl lg:text-2xl font-light tracking-widest mb-[12px] md:mb-[16px] lg:mb-[20px] font-satoshi ">
            DEVELOPMENT
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-[18px] md:gap-[20px] lg:gap-[28px] text-xl md:text-2xl lg:text-2xl md:mx-[28px] lg:mx-[50px] mb-[36px] md:mb-[40px] lg:mb-[50px]">
            {development.map((item) => (
              <Name key={item.name} item={item} />
            ))}
          </div>
          <h1 className="text-xl md:text-2xl lg:text-2xl font-light tracking-widest mb-[12px] md:mb-[16px] lg:mb-[20px] font-satoshi ">
            DESIGN
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-[18px] md:gap-[20px] lg:gap-[28px] text-xl md:text-2xl lg:text-2xl md:mx-[50px] lg:mx-[100px] mb-[36px] md:mb-[40px] lg:mb-[50px]">
            {design.map((item) => (
              <Name key={item.name} item={item} />
            ))}
          </div>
          <div
            className="text-lg md:text-xl font-bold font-satoshi "
            style={{ color: "#C1C1C1" }}
          >
            made without ❤️ in Chennai
          </div>
        </div>
      </div>
    )
  );
}

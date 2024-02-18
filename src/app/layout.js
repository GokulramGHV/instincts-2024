"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { useState } from "react";
import navContext from "@/hooks/navContext";
import { ProgressLoader } from "nextjs-progressloader";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Instincts 2024</title>
        <meta
          name="description"
          content="SSN-SNUC Instincts is one of the most awaited cultural events in the country. This year, Instincts will be held over three days with an exciting prize pool of over ₹5,00,000 across more than 50 events hosted by over 20 clubs!"
        />
      </head>
      <body
        className={inter.className}
        style={{
          position: "relative",
          overflowY: isNavOpen ? "hidden" : "scroll",
        }}
      >
        <ProgressLoader
          color="#fff"
          height={7}
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="h-screen w-full bg-[#202020] fixed left-0 top-0 flex flex-col gap-2 md:gap-4 justify-center items-center z-[500]" role="spinner"><img src="/logos/Instincts_white.svg" class="w-[180px] sm:w-[30vw] lg:w-[22vw] mb-5" alt="logo" /><div class="w-6 h-6 sm:w-10 sm:h-10 rounded-full animate-spin border-4 border-dashed border-white border-t-transparent"></div></div>'
        />
        <navContext.Provider value={{ isNavOpen, setNavOpen }}>
          <Navbar />
          {children}
        </navContext.Provider>
      </body>
    </html>
  );
}

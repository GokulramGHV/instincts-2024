"use client";
import AboutUs from "@/sections/landing/about_us";
import Footer from "@/sections/footer/footer";
import GallerySection from "@/sections/landing/gallery-section";
import HeroSection from "@/sections/landing/hero-section";
import { useEffect, useState } from "react";
import { NavButton } from "@/components/navbar/navbar";
import TheTeam from "@/sections/landing/the-team";
import BentoGrid from "@/sections/landing/bento-grid";
import { CreditsModal } from "@/components/footer/CreditsModal";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCreditsOpen, setCreditsOpen] = useState(false);

  useEffect(() => {
    document.title = "Instincts 2024";
    const metaTag = document.createElement("meta");

    metaTag.setAttribute("name", "description");
    metaTag.setAttribute(
      "content",
      "SSN-SNUC Instincts is one of the most awaited cultural events in the country. This year, Instincts will be held over three days with an exciting prize pool of over ₹5,00,000 across more than 50 events hosted by over 20 clubs!"
    );

    document.head.appendChild(metaTag);

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 100); // Change 100 to your desired scroll threshold
    };

    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="min-h-screen">
      {isVisible && (
        <div className="z-[100] fixed top-14 right-10 md:top-20 md:right-20">
          <NavButton className="text-white" />
        </div>
      )}
      <HeroSection />
      <AboutUs />
      <TheTeam />
      <BentoGrid />
      <GallerySection />
      <Footer setCreditsOpen={setCreditsOpen} />
      <CreditsModal isModalOpen={isCreditsOpen} setModalOpen={setCreditsOpen} />
    </main>
  );
}

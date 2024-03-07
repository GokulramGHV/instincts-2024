"use client";

import { CreditsModal } from "@/components/footer/CreditsModal";
import Hero from "@/sections/events-page/hero";
import Footer from "@/sections/footer/footer";
import { useEffect, useState } from "react";

export default function GetPassesLayout({ children }) {
  const [isCreditsOpen, setCreditsOpen] = useState(false);

  useEffect(() => {
    document.title = "Instincts 2024 | Get Passes";
    const metaTag = document.createElement("meta");

    metaTag.setAttribute("name", "description");
    metaTag.setAttribute(
      "content",
      "Get your passes now! Join us for an unforgettable experience. Don't miss out - reserve your spot today"
    );

    document.head.appendChild(metaTag);
  }, []);
  return (
    <>
      <Hero
        headingName="GET PASSES"
        heroColor={"#FDAF46"}
        heroImage={"/get_passes/get-passes-hero-image.svg"}
        fontColor={"#202020"}
      />
      {children}

      <Footer setCreditsOpen={setCreditsOpen} />
      <CreditsModal isModalOpen={isCreditsOpen} setModalOpen={setCreditsOpen} />
    </>
  );
}

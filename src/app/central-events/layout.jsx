"use client";

import { CreditsModal } from "@/components/footer/CreditsModal";
import Hero from "@/sections/events-page/hero";
import Footer from "@/sections/footer/footer";
import { useEffect, useState } from "react";

export default function EventLayout({ children }) {
  const [isCreditsOpen, setCreditsOpen] = useState(false);

  useEffect(() => {
    document.title = "Instincts 2024 | Central Events";
    const metaTag = document.createElement("meta");

    metaTag.setAttribute("name", "description");
    metaTag.setAttribute("content", "Instincts 2024 Central Events");

    document.head.appendChild(metaTag);
  }, []);

  return (
    <>
      <Hero
        headingName="CENTRAL EVENTS"
        heroColor={"#FEDE88"}
        heroImage={"/central_events/hero-pattern.svg"}
        fontColor={"#202020"}
      />
      {children}
      <Footer setCreditsOpen={setCreditsOpen} />
      <CreditsModal isModalOpen={isCreditsOpen} setModalOpen={setCreditsOpen} />
    </>
  );
}

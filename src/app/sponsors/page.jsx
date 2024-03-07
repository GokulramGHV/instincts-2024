"use client";

import { CreditsModal } from "@/components/footer/CreditsModal";
import Footer from "@/sections/footer/footer";
import SponsorsHero from "@/sections/sponsors/SponsorsHero";
import SponsorsMain from "@/sections/sponsors/SponsorsMain";
import { useEffect, useState } from "react";

export default function SponsorsPage() {
  const [isCreditsOpen, setCreditsOpen] = useState(false);

  useEffect(() => {
    document.title = "Instincts 2024 | Sponsors";
    const metaTag = document.createElement("meta");

    metaTag.setAttribute("name", "description");
    metaTag.setAttribute("content", "Instincts 2024 | Sponsors");

    document.head.appendChild(metaTag);
  }, []);
  return (
    <main className="min-h-screen">
      <SponsorsHero />
      <SponsorsMain />
      <Footer setCreditsOpen={setCreditsOpen} />
      <CreditsModal
        isModalOpen={isCreditsOpen}
        setModalOpen={setCreditsOpen}
      />{" "}
    </main>
  );
}

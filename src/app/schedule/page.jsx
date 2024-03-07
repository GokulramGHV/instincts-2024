"use client";

import { CreditsModal } from "@/components/footer/CreditsModal";
import Footer from "@/sections/footer/footer";
import ScheduleHero from "@/sections/schedule/ScheduleHero";
import ScheduleMain from "@/sections/schedule/ScheduleMain";
import { useEffect, useState } from "react";

// #FFFCEA

export default function Schedule() {
  const [isCreditsOpen, setCreditsOpen] = useState(false);

  useEffect(() => {
    document.title = "Instincts 2024 | Schedule";
    const metaTag = document.createElement("meta");

    metaTag.setAttribute("name", "description");
    metaTag.setAttribute("content", "Instincts 2024 | Schedule");

    document.head.appendChild(metaTag);
  }, []);
  return (
    <>
      <main className="min-h-screen">
        <ScheduleHero />
        <ScheduleMain />
        <Footer setCreditsOpen={setCreditsOpen} />
        <CreditsModal
          isModalOpen={isCreditsOpen}
          setModalOpen={setCreditsOpen}
        />{" "}
      </main>
    </>
  );
}

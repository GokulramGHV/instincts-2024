"use client";

import Hero from "@/sections/events-page/hero";
import CategoryPicker from "@/sections/events-page/categoryPicker";
import EventsSection from "@/sections/events-page/eventsSection";
import Footer from "@/sections/footer/footer";
import { useState } from "react";
import EventModal from "@/components/events-page/EventModal";
import { categories, events } from "./events";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Events");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const sortedcategories = categories.sort((a, b) => a.name.localeCompare(b.name));

  const filteredEvents = events.sort((a, b) => a.title.localeCompare(b.title)).filter((event) => {
    if (selectedCategory === "All Events") {
      return true;
    } else {
      return event.category === selectedCategory;
    }
  });

  return (
    <div className="font-satoshi">
      <div>
        <Hero />
        <CategoryPicker
          categories={sortedcategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <EventsSection
          events={filteredEvents}
          setModalOpen={setModalOpen}
          setSelectedEvent={setSelectedEvent}
        />
        <Footer />
      </div>
      <EventModal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        event={selectedEvent}
      />
    </div>
  );
}

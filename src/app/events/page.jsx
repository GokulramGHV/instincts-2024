"use client";

import Hero from "@/sections/events-page/hero";
import CategoryPicker from "@/sections/events-page/categoryPicker";
import EventsSection from "@/sections/events-page/eventsSection";
import Footer from "@/sections/footer/footer";

import { useState } from "react";
import EventModal from "@/components/events-page/EventModal";

const categories = [
  {
    name: "All Events",
    color: "#202020",
  },
  {
    name: "Tamil Lit.",
    color: "#DB2525",
  },
  {
    name: "Tamil Lit.",
    color: "#DB2525",
  },
  {
    name: "Tamil Lit.",
    color: "#DB2525",
  },
  {
    name: "Tamil Lit.",
    color: "#DB2525",
  },
  {
    name: "Tamil Lit.",
    color: "#DB2525",
  },
  {
    name: "Tamil Lit.",
    color: "#DB2525",
  },
  {
    name: "Tamil Lit.",
    color: "#DB2525",
  },
  {
    name: "Tamil Lit.",
    color: "#DB2525",
  },
  {
    name: "Tamil Lit.",
    color: "#DB2525",
  },
  {
    name: "Tamil Lit.",
    color: "#DB2525",
  },
  {
    name: "Photography",
    color: "#00644C",
  },
];

const events = [
  {
    title: "Tamil Lit. Event",
    dayDetail: "DAY 2",
    category: "Tamil Lit.",
    image: "/events-page/event-dummy.png",
    color: "#DB2525",
  },
  {
    title: "Tamil Lit. Event",
    dayDetail: "DAY 2",
    category: "Tamil Lit.",
    image: "/events-page/event-dummy.png",
    color: "#DB2525",
  },
  {
    title: "Tamil Lit. Event",
    dayDetail: "DAY 2",
    category: "Tamil Lit.",
    image: "/events-page/event-dummy.png",
    color: "#DB2525",
  },
  {
    title: "Tamil Lit. Event",
    dayDetail: "DAY 2",
    category: "Tamil Lit.",
    image: "/events-page/event-dummy.png",
    color: "#DB2525",
  },
  {
    title: "Tamil Lit. Event",
    dayDetail: "DAY 2",
    category: "Tamil Lit.",
    image: "/events-page/event-dummy.png",
    color: "#DB2525",
  },
  {
    title: "Tamil Lit. Event",
    dayDetail: "DAY 2",
    category: "Tamil Lit.",
    image: "/events-page/event-dummy.png",
    color: "#DB2525",
  },
  {
    title: "Tamil Lit. Event",
    dayDetail: "DAY 2",
    category: "Tamil Lit.",
    image: "/events-page/event-dummy.png",
    color: "#DB2525",
  },
  {
    title: "Tamil Lit. Event",
    dayDetail: "DAY 2",
    category: "Tamil Lit.",
    image: "/events-page/event-dummy.png",
    color: "#DB2525",
  },
  {
    title: "Tamil Lit. Event",
    dayDetail: "DAY 2",
    category: "Tamil Lit.",
    image: "/events-page/event-dummy.png",
    color: "#DB2525",
  },
  {
    title: "Tamil Lit. Event",
    dayDetail: "DAY 2",
    category: "Tamil Lit.",
    image: "/events-page/event-dummy.png",
    color: "#DB2525",
  },
  {
    title: "Photography Event",
    dayDetail: "DAY 2",
    category: "Photography",
    image: "/events-page/event-dummy.png",
    color: "#3D3D3D",
  },
];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Events");
  const [isModalOpen, setModalOpen] = useState(false);

  const filteredEvents = events.filter((event) => {
    if (selectedCategory === "All Events") {
      return true;
    } else {
      return event.category === selectedCategory;
    }
  });

  return (
    <div className="">
      <div>
        <Hero />
        <CategoryPicker
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <EventsSection events={filteredEvents} setModalOpen={setModalOpen} />
        <Footer />
      </div>
      <EventModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

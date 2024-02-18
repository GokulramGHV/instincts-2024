"use client";
import { useState } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function EventCard({ event, setModalOpen, setSelectedEvent }) {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsBeingHovered(true);
  };

  const handleMouseLeave = () => {
    setIsBeingHovered(false);
  };

  return (
    <Tilt
      scale={1.05}
      glareEnable={true}
      glareMaxOpacity={0.25}
      glareColor={event.color}
      glarePosition="all"
      glareBorderRadius="10px"
      className={`rounded-xl ${isBeingHovered ? "shadow-2xl" : "shadow-sm"}`}
    >
      <div
        style={{
          borderColor: isBeingHovered ? event.color : "black",
          boxShadow: isBeingHovered ? `0 0 15px ${event.color}` : "none",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          setSelectedEvent(event);
          setModalOpen(true);
        }}
        className="sm:min-h-80 flex flex-col transition-all duration-300 rounded-xl box-border border-4 border-black"
      >
        <div className="flex sm:flex-col flex-row">
          <div className="w-32 h-32 sm:w-auto sm:h-auto overflow-hidden">
            <Image
              src={event.image}
              alt="event-image"
              className="p-4 sm:px-5 sm:pt-5 sm:pb-0 w-full h-full object-cover"
              width={400}
              height={200}
            />
          </div>
          <div className="sm:px-5 pt-4 sm:pt-3 sm:min-h-40 flex-1">
            <h1
              className="text-2xl w-44 sm:w-full line-clamp-2 text-ellipsis overflow-hidden xl:text-3xl font-[900]"
              title={event.title}
            >
              {event.title}
            </h1>
            <p className="sm:text-lg mt-1">Date: {event.dayDetail}</p>
          </div>
        </div>
        <p
          style={{ backgroundColor: event.color }}
          className="text-lg mt-auto rounded-b-lg text-right font-semibold text-white px-2"
        >
          {event.category}
        </p>
      </div>
    </Tilt>
  );
}

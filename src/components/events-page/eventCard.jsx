import { useState } from "react";

export default function EventCard({ event, setModalOpen, setSelectedEvent }) {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsBeingHovered(true);
  };

  const handleMouseLeave = () => {
    setIsBeingHovered(false);
  };

  return (
    <div
      style={{ borderColor: isBeingHovered ? event.color : "black" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        setSelectedEvent(event);
        setModalOpen(true);
      }}
      className="lg:w-[calc(25%-20px)] md:w-[calc(33%-20px)] sm:w-[calc(45%-20px)] transition-colors flex flex-col md:lg:w-[calc(33.33%-20px)] h-80 bg-[#F2F2F2] rounded-xl box-border mr-5 mb-5 md:flex-wrap border-4 border-black"
    >
      <img className="w-full p-5" src={event.image} alt="" />
      <div className="p-5">
        <h1 className="text-2xl font-bold">{event.title}</h1>
        <p className="text-lg">{event.dayDetail}</p>
      </div>
      <p
        style={{ backgroundColor: event.color }}
        className="text-lg mt-auto rounded-b-lg text-right font-semibold text-white px-2"
      >
        {event.category}
      </p>
    </div>
  );
}

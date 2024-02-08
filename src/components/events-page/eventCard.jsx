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
      className="lg:w-[calc(25%-20px)] md:w-[calc(33%-20px)] sm:w-[calc(45%-20px)] w-full transition-colors flex flex-col md:lg:w-[calc(33.33%-20px)] sm:min-h-80 bg-[#F2F2F2] rounded-xl box-border mr-5 mb-12 md:flex-wrap border-4 border-black">
        <div className="flex sm:flex-col flex-row">
            <img className="sm:w-full p-5 sm:aspect-auto aspect-square sm:h-auto h-32 w-h-32" src={event.image} alt="" />
            <div className="p-5 sm:pl-5 pl-0">
                <h1 className="text-2xl font-bold">{event.title}</h1>
                <p className="text-lg">{event.dayDetail}</p>
            </div>
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

import { useState } from 'react';
import Image from 'next/image';

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
      style={{ borderColor: isBeingHovered ? event.color : 'black' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        setSelectedEvent(event);
        setModalOpen(true);
      }}
      className="sm:min-h-80 flex flex-col transition-colors rounded-xl box-border border-4 border-black"
    >
      <div className="flex sm:flex-col flex-row">
        <div className="w-32 h-32 sm:w-auto sm:h-auto overflow-hidden">
          <Image
            src={event.image}
            alt="event-image"
            className="p-4 sm:px-5 sm:pt-5 sm:pb-0 w-full h-full"
            width={300}
            height={200}
          />
        </div>
        <div className="sm:px-5 pt-4 sm:pt-3 sm:min-h-40 flex-1">
          <h1
            className="text-2xl w-44 sm:w-full whitespace-nowrap text-ellipsis overflow-hidden xl:text-3xl font-[900]"
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
  );
}

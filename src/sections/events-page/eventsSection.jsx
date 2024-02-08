import EventCard from "@/components/events-page/eventCard";

export default function EventsSection({
  events,
  setModalOpen,
  setSelectedEvent,
}) {
  return (
    <>
      <div className="md:px-12 px-6 flex flex-wrap mb-48 sm:flex-row flex-col">
        {events.map((event, index) => {
          return (
            <EventCard
              key={index}
              event={event}
              setModalOpen={setModalOpen}
              setSelectedEvent={setSelectedEvent}
            />
          );
        })}
      </div>
    </>
  );
}

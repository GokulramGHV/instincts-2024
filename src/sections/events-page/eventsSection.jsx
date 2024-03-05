import EventCard from '@/components/events-page/eventCard';

export default function EventsSection({
  events,
  setModalOpen,
  setSelectedEvent,
}) {

  return (
    <>
      <div className="md:px-12 px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-5 xl:gap-10 mb-48 sm:flex-row flex-col">
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

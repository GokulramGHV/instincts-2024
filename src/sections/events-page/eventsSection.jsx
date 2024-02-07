import EventCard from "@/components/events-page/eventCard";

export default function EventsSection({ events, setModalOpen }) {
  return (
    <>
      <div className="md:px-20 px-6 flex flex-wrap mb-48">
        {events.map((event, index) => {
          return (
            <EventCard
              key={index}
              eventColor={event.color}
              eventImage={event.image}
              eventTitle={event.title}
              eventDayDetail={event.dayDetail}
              eventCategory={event.category}
              setModalOpen={setModalOpen}
            />
          );
        })}
      </div>
    </>
  );
}

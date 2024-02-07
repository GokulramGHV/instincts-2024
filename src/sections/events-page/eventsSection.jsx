import EventCard from "@/components/events-page/eventCard"


export default function EventsSection({ events }) {
    
    return <>
        {
            events.map((event, index) => {
                return <EventCard key={index} eventImage={event.image} eventTitle={event.title} eventDayDetail={event.dayDetail} eventCategory={event.category} />
            })
        }
    </>
}
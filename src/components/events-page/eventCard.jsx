export default function EventCard({ eventImage, eventTitle, eventDayDetail, eventCategory }) {
    return <div className="w-80 h-80 bg-[#F2F2F2] rounded-xl">
        <img src={eventImage} alt="" />
        <div className="p-5">
            <h1 className="text-2xl font-bold">{eventTitle}</h1>
            <p className="text-lg">{eventDayDetail}</p>
            <p className="text-lg">{eventCategory}</p>
        </div>
    </div>
}
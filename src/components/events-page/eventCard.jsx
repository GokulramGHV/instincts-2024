import { useState } from "react"


export default function EventCard({ eventImage, eventColor, eventTitle, eventDayDetail, eventCategory }) {
    const [isBeingHovered, setIsBeingHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsBeingHovered(true)
    }

    const handleMouseLeave = () => {
        setIsBeingHovered(false)
    }
    
    return <div style={{ borderColor: isBeingHovered ? eventColor : "black" }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="lg:w-[calc(25%-20px)] md:w-[calc(33%-20px)] sm:w-[calc(45%-20px)] w-full transition-colors flex flex-col md:lg:w-[calc(33.33%-20px)] min-h-80 bg-[#F2F2F2] rounded-xl box-border mr-5 mb-12 md:flex-wrap border-4 border-black">
        <img className="w-full p-5" src={eventImage} alt="" />
        <div className="p-5">
            <h1 className="text-2xl font-bold">{eventTitle}</h1>
            <p className="text-lg">{eventDayDetail}</p>
        </div>
        <p style={{ backgroundColor: eventColor }} className="text-lg mt-auto rounded-b-lg text-right font-semibold text-white px-2">{eventCategory}</p>
    </div>
}
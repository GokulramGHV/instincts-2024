import Image from "next/image";
import Link from "next/link";

import { Londrina_Solid } from 'next/font/google';

const londonFont = Londrina_Solid({
    weight: ['100', '300', '400', '900'],
    subsets: ['latin'],
});

export default function CentralEventCard(
    { eventTitle,
        eventBG,
        eventLink, cardColor, shouldBreak}
) {
    return <Link href={eventLink}>
        <div className="bg-cover relative rounded-xl overflow-hidden" style={{
            backgroundColor: cardColor
        }}>
            <Image src={eventBG} height={100} width={100} className="h-full w-full" />
            <p className={`absolute z-10 bottom-0 left-0 ${londonFont.className} text-white text-6xl p-5`}>{(!shouldBreak) ? eventTitle : (eventTitle === "FIRE SILAMBAM") ? <>{eventTitle.split(" ")[0]} <br/> {eventTitle.split(" ")[1]}</> : <>{eventTitle.split(" ")[0]} <br/> {eventTitle.split(" ")[1]} {eventTitle.split(" ")[2]}</>}</p>
        </div>
    </Link>
}
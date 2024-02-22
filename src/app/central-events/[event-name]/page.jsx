import Link from "next/link";
import { eventDetails } from "./eventsDetail"


import { Londrina_Solid } from 'next/font/google';
import Image from "next/image";

const londonFont = Londrina_Solid({
    weight: ['100', '300', '400', '900'],
    subsets: ['latin'],
});

function MaterialSymbolsLightArrowCircleLeftOutline(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m12 15.288l.688-.688l-2.1-2.1H15.5v-1h-4.912l2.1-2.1L12 8.712L8.712 12zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21M12 20q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"></path></svg>
    )
}

export default function EventDetails({ params }) {

    console.log();

    return <main className="px-5 sm:px-10 py-5">
        <div className="flex items-center pb-3">
            <Link href={"/central-events"}>
                <MaterialSymbolsLightArrowCircleLeftOutline className="text-5xl sm:text-[80px] text-[#919191]" />
            </Link>
            <p className={`${londonFont.className} text-5xl sm:text-[80px] text-[#202020] sm:ml-5`}>{eventDetails[params["event-name"]]["name"]}</p>
        </div>
        <div className="sm:px-16 px-6">
            <p className="text-justify font-satoshi sm:text-xl text-[#5C5C5C]">{eventDetails[params["event-name"]]["description"]
            }</p>
            <div className="grid sm:grid-cols-2 sm:grid-cols-3 gap-5 mt-5">
                {
                    eventDetails[params["event-name"]]["images"].map((eventImage) => {
                        return <div key={eventImage} className="w-full  bg-[#5C5C5C] col-span-1 rounded-lg overflow-hidden">
                            <Image src={eventImage} width={200} height={100} quality={100} unoptimized className="h-full w-full"/>
                        </div>
                    })
                }
            </div>
        </div>
    </main>
}
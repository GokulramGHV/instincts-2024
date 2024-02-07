import { Londrina_Solid } from "next/font/google"
import { useEffect, useState } from 'react';

const londonFont = Londrina_Solid({
    weight: ["100", "300", "400", "900"],
    subsets: ["latin"],
})

export default function Hero() {

    const [backgroundSize, setBackgroundSize] = useState("900px")

    const isMobile = () => {
        if (typeof window !== "undefined") {
            return window.innerWidth < 768
        }
    }

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (isMobile()) {
                setBackgroundSize("500px")
            } else {
                setBackgroundSize("900px")
            }
        })
    }, [])

    return (
        <>
            <div className="min-h-[60vh] bg-[#FB6655] relative">
                <div className="sm:min-h-[60vh] min-h-[30vh]">
                    <div className="md:px-12 px-6 pt-10">
                        <img src="/events-page/top-logo.svg" alt="" />
                    </div>
                    <div className="flex sm:min-h-[50vh] min-h-[40vh] pb-16 mt-6 md:pl-12 pl-6">
                        <h1 className={`${londonFont.className} md:text-9xl text-7xl text-[#FFFCEA] sm:my-auto mt-auto sm:mr-12 mr-6`}>CLUB<br />EVENTS</h1>
                        <div style={{ backgroundSize: backgroundSize }} className="min-h-full w-full bg-[url('/events-page/hero-pattern.svg')] "></div>
                    </div>
                </div>
            </div>
        </>
    );
}

import { Londrina_Solid } from "next/font/google"

const londonFont = Londrina_Solid({
    weight: ["100", "300", "400", "900"],
    subsets: ["latin"],
})

export default function Hero() {
    
    return <>
        <div className="min-h-[60vh] bg-[#FB6655] relative">
            <div className="min-h-[60vh]">
                <div className="px-12 pt-10">
                    <img src="/events-page/top-logo.svg" alt="" />
                </div>
                <div className="flex min-h-[50vh] pb-16 mt-6 pl-12">
                    <h1 className={`${londonFont.className} text-9xl text-[#FFFCEA] my-auto mr-12`}>CLUB<br/>EVENTS</h1>
                    <div style={{ backgroundSize: "900px" }} className="min-h-full w-full bg-[url('/events-page/hero-pattern.svg')] "></div>
                </div>
            </div>
        </div>
    </>
}
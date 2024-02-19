import Hero from "@/sections/events-page/hero";
import Footer from "@/sections/footer/footer";

export default function EventLayout({children}) {
    return <>
        <Hero headingName="CENTRAL EVENTS" heroColor={"#FEDE88"} heroImage={"/central_events/hero-pattern.svg"} fontColor={"#202020"}/>
        {children}
        <Footer />
    </>
}
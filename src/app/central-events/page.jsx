import CentralEventCard from "@/components/central-events/EventCard";
import Hero from "@/sections/events-page/hero";
import Footer from "@/sections/footer/footer";

export default function CentralEvents(){
    return <main>
        <Hero headingName="CENTRAL EVENTS" heroColor={"#FEDE88"} heroImage={"/central_events/hero-pattern.svg"} fontColor={"#202020"}/>
        <div className="grid sm:grid-cols-2 gap-10 px-10 py-10">
            <CentralEventCard eventTitle="CHOREONITE" eventBG="/central_events/choreonite.svg" eventLink="/central-events/chorenite" cardColor="#DB2525"/>
            <CentralEventCard eventTitle="DJ NITE" eventBG="/central_events/djnite.svg" eventLink="/central-events/djnite" cardColor="#05B163"/>
            <CentralEventCard eventTitle="PRO SHOW" eventBG="/central_events/pro_show.svg" eventLink="/central-events/pro-show" cardColor="#C31C80"/>
            <CentralEventCard eventTitle="CELEBRITY VARIETY SHOW" shouldBreak eventBG="/central_events/celeb_show.svg" eventLink="/central-events/celeb-show" cardColor="#F6800E"/>
            <CentralEventCard eventTitle="WOMEN'S DAY" eventBG="/central_events/womens-day.svg" eventLink="/central-events/womens-day" cardColor="#4FB6F0"/>
            <CentralEventCard eventTitle="BIKE STUNT" eventBG="/central_events/bike-stunt.svg" eventLink="/central-events/bike-stunt" cardColor="#2E3192"/>
            <CentralEventCard eventTitle="FIRE SILAMBAM" shouldBreak eventBG="/central_events/fire_silambam.svg" eventLink="/central-events/fire-silambam" cardColor="#00644C"/>
        </div>
        <Footer />
    </main>
}

// #C31C80
// #F6800E
// #4FB6F0
// #2E3192
// #00644C
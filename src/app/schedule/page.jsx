import Footer from "@/sections/footer/footer";
import ScheduleHero from "@/sections/schedule/ScheduleHero";
import ScheduleMain from "@/sections/schedule/ScheduleMain";



export const metadata = {
    title: 'Instincts 2024 | Schedule',
    description: 'Instincts 2024 | Schedule',
};

// #FFFCEA

export default function Schedule() {
    return <>
        <main className="min-h-screen">
            <ScheduleHero />
            <ScheduleMain />
            <Footer />
        </main>
    </>
}
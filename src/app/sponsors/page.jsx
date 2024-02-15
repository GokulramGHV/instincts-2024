import Footer from "@/sections/footer/footer";
import SponsorsHero from "@/sections/sponsors/SponsorsHero";
import SponsorsMain from "@/sections/sponsors/SponsorsMain";

export default function SponsorsPage() {
  return (
    <main className="min-h-screen">
      <SponsorsHero />
      <SponsorsMain />
      <Footer />
    </main>
  )
}
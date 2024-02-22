import Hero from "@/sections/events-page/hero";
import Footer from "@/sections/footer/footer";

export default function GetPassesLayout({ children }) {
  return (
    <>
      <Hero
        headingName="GET PASSES"
        heroColor={"#FDAF46"}
        heroImage={"/get_passes/get-passes-hero-image.svg"}
        fontColor={"#202020"}
      />
      {children}
      <Footer />
    </>
  );
}

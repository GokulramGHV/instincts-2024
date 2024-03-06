import DefaultLayout from "@/components/footer/DefaultLayout";
import MobileLayout from "@/components/footer/MobileLayout";
import Image from "next/image";

export default function Footer({ setCreditsOpen }) {
  return (
    <footer className="bg-[#0C5AB9] w-full flex flex-col items-center justify-between">
      <DefaultLayout setCreditsOpen={setCreditsOpen} />
      <MobileLayout setCreditsOpen={setCreditsOpen} />
      <Image
        src="/logos/Instincts_footer.svg"
        alt="instincts_logo"
        className="w-full hidden lg:md:block"
        width={1440}
        height={50}
      />
    </footer>
  );
}

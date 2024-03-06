import Image from "next/image";
import { Row } from "./Row";
import Accordion from "./Accordian";

export default function MobileLayout({ setCreditsOpen }) {
  return (
    <div className="lg:md:hidden flex flex-col gap-14 w-full items-center justify-between">
      <div className="mt-10">
        <Row gap={10}>
          <Image src="/logos/SNU.png" alt="snu_logo" width={120} height={120} />
          <Image src="/logos/SSN.png" alt="snu_logo" width={120} height={120} />
        </Row>
      </div>
      <Accordion setCreditsOpen={setCreditsOpen} />
      <Image
        src="/logos/Instincts_footer.svg"
        alt="instincts_logo"
        className="w-full mb-8"
        width={1440}
        height={50}
      />
    </div>
  );
}

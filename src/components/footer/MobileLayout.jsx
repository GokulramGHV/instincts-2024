import Image from 'next/image';
import { Row } from './Row';
import Accordion from './Accordian';

export default function MobileLayout() {
  return (
    <div className="lg:md:hidden h-full flex flex-col mt-10 gap-8 w-full items-center justify-evenly">
      <div className="mb-14 ">
        <Row gap={10}>
          <Image src="/logos/SNU.png" alt="snu_logo" width={100} height={100} />
          <Image src="/logos/SSN.png" alt="snu_logo" width={100} height={100} />
        </Row>
      </div>
      <Accordion />
    </div>
  );
}

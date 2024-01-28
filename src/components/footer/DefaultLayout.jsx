import Image from 'next/image';
import { JoinUs, ReachOut, Socials } from './Categories';
import { Row } from './Row';

export default function DefaultLayout() {
  return (
    <div className="lg:md:flex w-full items-center justify-between p-16 hidden">
      <div className="lg:md:flex gap-20 hidden">
        <div className="flex flex-col gap-5">
          <p className="text-slate-50 font-satoshi">SOCIALS</p>
          <div className="flex flex-col">
            <Socials />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-slate-50 font-satoshi">REACH OUT</p>
          <div className="flex flex-col">
            <ReachOut />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-slate-50 font-satoshi">JOIN US</p>
          <JoinUs />
        </div>
      </div>
      <div className="mb-20 flex gap-10 items-center justify-center">
        <Row gap={10}>
          <Image src="/logos/SNU.png" alt="snu_logo" width={100} height={100} />
          <Image src="/logos/SSN.png" alt="snu_logo" width={100} height={100} />
        </Row>
      </div>
    </div>
  );
}

import Image from 'next/image';
import { JoinUs, ReachOut, Socials } from './Categories';
import { Row } from './Row';

export default function DefaultLayout() {
  return (
    <div className="lg:md:flex w-full items-center justify-between p-16 hidden">
      <div className="lg:md:flex gap-20 hidden">
        <div className="flex flex-col gap-5">
          <p className="text-slate-50 text-[22px] font-satoshi">REACH OUT</p>
          <div className="flex flex-col gap-2">
            <Socials />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-slate-50 font-satoshi text-[22px]">KNOW MORE</p>
          <div className="flex flex-col gap-2">
            <ReachOut />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-slate-50 font-satoshi text-[22px]">JOIN US</p>
          <div className="flex flex-col gap-2">
            <JoinUs />
          </div>
        </div>
      </div>
      <div className="mb-20 flex gap-10 items-center justify-center">
        <Row gap={10}>
          <Image src="/logos/SNU.png" alt="snu_logo" width={140} height={140} />
          <Image src="/logos/SSN.png" alt="snu_logo" width={140} height={140} />
        </Row>
      </div>
    </div>
  );
}

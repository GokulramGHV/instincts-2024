import { FaInstagram } from 'react-icons/fa';
import { Row } from './Row';
import Link from 'next/link';
import { RiFacebookBoxLine } from 'react-icons/ri';

export function Socials() {
  return (
    <>
      <Row gap={2} onHoverScaleTo={110}>
        <FaInstagram color="white" className="ml-[0.09rem]" size={30} />
        <Link
          href={'https://www.instagram.com/ssnsnucinstincts'}
          className="text-white font-semibold font-satoshi text-[22px]"
          target="_blank"
        >
          Instagram
        </Link>
      </Row>
      <Row gap={2} onHoverScaleTo={110}>
        <RiFacebookBoxLine color="white" size={30} />
        <Link
          href={'https://www.facebook.com/instincts.ssn/'}
          className="text-white font-semibold font-satoshi text-[22px]"
          target="_blank"
        >
          Facebook
        </Link>
      </Row>
    </>
  );
}

export function ReachOut() {
  return (
    <>
      <Link
        href={"/contact-us"}
        className="text-white font-semibold font-satoshi text-[22px] hover:scale-110"
      >
        Contact Us
      </Link>
      <Link
        href={'/sponsors'}
        className="text-white font-semibold font-satoshi text-[22px] hover:scale-110"
      >
        Sponsors
      </Link>
    </>
  );
}

export function JoinUs() {
  return (
    <>
      <Link
        href={"/get-passes"}
        className="text-white font-semibold font-satoshi text-[22px] hover:scale-110"
      >
        Get Passes
      </Link>
      <Link
        href={"/coming-soon"}
        className="text-white font-semibold font-satoshi text-[22px] hover:scale-110"
      >
        Schedule
      </Link>
    </>
  );
}

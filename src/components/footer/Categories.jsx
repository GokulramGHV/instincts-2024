import { FaInstagram } from 'react-icons/fa';
import { Row } from './Row';
import Link from 'next/link';
import { RiFacebookBoxLine, RiLinkedinBoxLine } from 'react-icons/ri';

export function Socials() {
  return (
    <>
      <Row gap={2}>
        <FaInstagram color="white" className="ml-[0.09rem]" />
        <Link href={'/'} className="text-white font-semibold font-satoshi">
          Instagram
        </Link>
      </Row>
      <Row gap={2}>
        <RiFacebookBoxLine color="white" size={19} />
        <Link href={'/'} className="text-white font-semibold font-satoshi">
          Facebook
        </Link>
      </Row>
      <Row gap={2}>
        <RiLinkedinBoxLine color="white" size={19} />
        <Link href={'/'} className="text-white font-semibold font-satoshi">
          LinkedIn
        </Link>
      </Row>
    </>
  );
}

export function ReachOut() {
  return (
    <>
      <Link href={'/'} className="text-white font-semibold font-satoshi">
        Contact Us
      </Link>
      <Link href={'/'} className="text-white font-semibold font-satoshi">
        Sponsors
      </Link>
    </>
  );
}

export function JoinUs() {
  return (
    <Link href={'/'} className="text-white font-semibold font-satoshi">
      Get Passes
    </Link>
  );
}

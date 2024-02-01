import { FaInstagram } from 'react-icons/fa';
import { Row } from './Row';
import Link from 'next/link';
import { RiFacebookBoxLine, RiLinkedinBoxLine } from 'react-icons/ri';

export function Socials() {
  return (
    <>
      <Row gap={2}>
        <FaInstagram color="white" className="ml-[0.09rem]" size={30} />
        <Link
          href={'https://www.instagram.com/ssnsnucinstincts'}
          className="text-white font-semibold font-satoshi text-[22px]"
          target="_blank"
        >
          Instagram
        </Link>
      </Row>
      <Row gap={2}>
        <RiFacebookBoxLine color="white" size={30} />
        <Link
          href={'/'}
          className="text-white font-semibold font-satoshi text-[22px]"
        >
          Facebook
        </Link>
      </Row>
      <Row gap={2}>
        <RiLinkedinBoxLine color="white" size={30} />
        <Link
          href={'/'}
          className="text-white font-semibold font-satoshi text-[22px]"
        >
          LinkedIn
        </Link>
      </Row>
    </>
  );
}

export function ReachOut() {
  return (
    <>
      <Link
        href={'/'}
        className="text-white font-semibold font-satoshi text-[22px]"
      >
        Contact Us
      </Link>
      <Link
        href={'/'}
        className="text-white font-semibold font-satoshi text-[22px]"
      >
        Sponsors
      </Link>
    </>
  );
}

export function JoinUs() {
  return (
    <Link
      href={'/'}
      className="text-white font-semibold font-satoshi text-[22px]"
    >
      Get Passes
    </Link>
  );
}

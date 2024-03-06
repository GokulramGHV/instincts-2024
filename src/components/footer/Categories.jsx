"use client";

import { FaInstagram } from "react-icons/fa";
import { Row } from "./Row";
import Link from "next/link";
import { RiFacebookBoxLine } from "react-icons/ri";

export function Socials() {
  return (
    <>
      <Link
        href={"/contact-us"}
        className="text-white font-semibold font-satoshi text-[22px] hover:scale-110"
      >
        Contact Us
      </Link>

      <Row gap={2}>
        <Link
          href={"https://www.instagram.com/ssnsnucinstincts"}
          className="text-white font-semibold font-satoshi text-[22px] hover:scale-110"
          target="_blank"
        >
          <FaInstagram color="white" className="ml-[0.09rem]" size={30} />
        </Link>

        <Link
          href={"https://www.facebook.com/instincts.ssn/"}
          className="text-white font-semibold font-satoshi text-[22px] hover:scale-110"
          target="_blank"
        >
          <RiFacebookBoxLine color="white" size={30} />
        </Link>
      </Row>
    </>
  );
}

export function ReachOut({ setCreditsOpen }) {
  return (
    <>
      <Link
        href={"/sponsors"}
        className="text-white font-semibold font-satoshi text-[22px] hover:scale-110 mx-auto lg:mx-0"
      >
        Sponsors
      </Link>
      <Link
        href={"/events"}
        className="text-white font-semibold font-satoshi text-[22px] hover:scale-110 mx-auto lg:mx-0"
      >
        Events
      </Link>
      <div
        onClick={() => setCreditsOpen(true)}
        className="text-white font-semibold font-satoshi text-[22px] hover:scale-110 mx-auto lg:mx-0 cursor-pointer"
      >
        Website Team
      </div>
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
        href={"/schedule"}
        className="text-white font-semibold font-satoshi text-[22px] hover:scale-110"
      >
        Schedule
      </Link>
    </>
  );
}

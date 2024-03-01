import { Londrina_Solid } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const londrinaSolid = Londrina_Solid({
  weight: ['400', '900'],
  subsets: ['latin'],
});

export default function GetPassesPage() {
  return (
    <div className=" px-10 xl:px-20 py-20 font-satoshi bg-[#F9FAFB]" id="main">
      <div className="w-full grid lg:grid-cols-2 justify-center">
        <div>
          <h3
            className={`${londrinaSolid.className} text-2xl md:text-4xl xl:text-5xl text-center mb-4`}
          >
            How to register?
          </h3>
          <div>
            <Image
              src="/get_passes/steps.svg"
              alt="Event registeration steps"
              width={1000}
              height={1000}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex">
          {/* ------------------------ DIVIDER -------------------------*/}
          <div className="lg:block hidden my-20 w-1 rounded-full bg-[#AAAAAA] ml-4 mr-10 xl:mr-20 xl:ml-8" />

          <div className="flex flex-col justify-center items-center mt-10 lg:mt-0">
            <div className="flex gap-3 sm:gap-5 items-center">
              <Link
                href="/events"
                target="_blank"
                className="rounded-full bg-[#0C5AB9] border border-[#2E3192] text-white whitespace-nowrap text-sm sm:text-xl 2xl:text-2xl font-[900] px-16 sm:px-20 2x:px-28 h-12 sm:h-14 2xl:h-16 flex justify-center items-center hover:shadow-xl transition-all duration-200 hover:opacity-90"
              >
                VIEW EVENTS
              </Link>
            </div>
            <div className="flex flex-col text-[#303030] mt-20 w-full">
              <h4 className="text-xl 2xl:text-2xl font-bold mb-6">
                Please Note:
              </h4>
              <ul className="list-disc text-lg 2xl:text-xl ml-8 space-y-3">
                <li>
                  Payment must be only made through{' '}
                  <a
                    href="https://rzp.io/l/INSTINCTS-2024"
                    target="_blank"
                    className="text-[#0C5AB9] font-bold"
                  >
                    Razorpay.
                  </a>
                </li>
                <li>
                  No other payment methods are accepted for online
                  registrations.
                </li>
                <li>
                  Club passes are valid for individual registration only. (Team
                  registration is not possible with a club pass)
                </li>
                <li>On-spot registration is available.</li>
                <li>All participants must carry valid college IDs.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

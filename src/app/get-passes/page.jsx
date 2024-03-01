import { Londrina_Solid } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const londrinaSolid = Londrina_Solid({
  weight: ['400', '900'],
  subsets: ['latin'],
});

export default function GetPassesPage() {
  return (
    <div className="px-10 xl:px-20 py-20 font-satoshi bg-[#F9FAFB]" id="main">
      <div className="w-full">
        <h3 className={`${londrinaSolid.className} text-3xl sm:text-4xl xl:text-5xl text-center mb-4`}>
          How to get Passes?
        </h3>

        <div className="flex flex-col justify-center items-center mt-10">
          <div className="flex gap-3 sm:gap-5 items-center">

            <div className="flex flex-col items-center">
              <div className="w-7 h-7 sm:w-10 sm:h-10 flex justify-center items-center border-[3px] border-[#A0A0A0] text-[#A0A0A0] rounded-full sm:text-2xl font-bold">
                1
              </div>
              <div className="border-l-[3px] border-dashed h-6 sm:h-12 border-[#A0A0A0]"></div>
              <div className="w-7 h-7 sm:w-10 sm:h-10 flex justify-center items-center border-[3px] border-[#A0A0A0] text-[#A0A0A0] rounded-full sm:text-2xl font-bold">
                2
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6">
              <Link
                href="/events"
                target="_blank"
                className="rounded-full bg-[#0C5AB9] border border-[#2E3192] text-white whitespace-nowrap text-sm sm:text-xl 2xl:text-2xl font-[900] px-16 sm:px-20 2x:px-28 h-12 sm:h-14 2xl:h-16 flex justify-center items-center hover:shadow-xl transition-all duration-200 hover:opacity-90 w-fit"
              >
                VIEW EVENTS
              </Link>

              <div
                className={`${londrinaSolid.className} my-5 text-black whitespace-nowrap text-lg sm:text-2xl 2xl:text-3xl font-[400] opacity-85 flex justify-center items-center sm:block`}
              >
                Tap REGISTER in the Pop-up
              </div>
            </div>
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
              <li>All participants must carry valid college IDs.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

'use client';
import { events } from '@/app/events/events';
import { Londrina_Solid } from 'next/font/google';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useEffect } from 'react';

const londrinaSolid = Londrina_Solid({
  weight: ['400', '900'],
  subsets: ['latin'],
});

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const eventName = searchParams.get('event');

  const event = events.find((event) => event.title === eventName);

  useEffect(() => {
    document.title = `Buy Passes for ${event.title}`;
    const metaTag = document.createElement('meta');

    metaTag.setAttribute('name', 'description');
    metaTag.setAttribute('content', `Buy Passes for ${event.title}`);

    document.head.appendChild(metaTag);
  }, [event.title]);

  if (searchParams.get('event') && searchParams.get('event') !== '') {
    return (
      <>
        <div
          className=" px-10 xl:px-20 py-12 font-satoshi bg-[#F9FAFB]"
          id="main"
        >
          <h2 className="font-satoshi  text-2xl lg:text-4xl text-center font-bold">
            BUY PASSES FOR
          </h2>
          <h1
            className={`${londrinaSolid.className} font-[900] text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-center text-[#202020] mb-10 lg:mb-16`}
          >
            {event.title}
          </h1>
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
                    <a
                      href="https://rzp.io/l/INSTINCTS-2024"
                      target="_blank"
                      className="rounded-full bg-[#0C5AB9] border border-[#2E3192] h-12 sm:h-14 2xl:h-16 w-full flex justify-center items-center hover:shadow-xl transition-all duration-200 hover:opacity-90"
                    >
                      <Image
                        src="/get_passes/razorpay_logo.png"
                        alt="razorpay_logo"
                        width={200}
                        height={200}
                        className="w-[100px] sm:w-[130px] 2xl:w-[160px]"
                      />
                    </a>
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      className="rounded-full bg-[#05B163] text-white whitespace-nowrap text-sm sm:text-xl 2xl:text-2xl font-[900] px-16 sm:px-20 2x:px-28 h-12 sm:h-14 2xl:h-16 flex justify-center items-center hover:shadow-xl transition-all duration-200 hover:opacity-90"
                    >
                      UPLOAD RECIEPT
                    </a>
                  </div>
                </div>
                <div className="flex flex-col text-[#303030] mt-20 w-full">
                  <h4 className="text-xl 2xl:text-2xl font-bold mb-6">
                    Please read the following before registering:
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
                      Club passes are valid for individual registration only.
                      (Team registration is not possible with a club pass)
                    </li>
                    <li>On-spot registration is available.</li>
                    <li>All participants must carry valid college IDs.</li>
                    <li>
                      For any clarifications regarding registering for this
                      event please contact any one of the following PoCs:{' '}
                      <span className="font-medium">
                        {event.contacts.join(' / ')}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    router.push('/coming-soon');
    return <div className="px-20 py-10"></div>;
  }
}

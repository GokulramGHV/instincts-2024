'use client';
import Image from 'next/image';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';

import { Londrina_Solid } from 'next/font/google';

const londonFont = Londrina_Solid({
  weight: ['100', '300', '400', '900'],
  subsets: ['latin'],
});

export default function CentralEventCard({
  eventTitle,
  eventBG,
  eventLink,
  cardColor,
  shouldBreak,
}) {
  return (
    <Tilt
      scale={1}
      glareEnable={true}
      glareMaxOpacity={0.25}
      glareColor={'white'}
      glarePosition="all"
      glareBorderRadius="10px"
      tiltMaxAngleX="5"
      tiltMaxAngleY="5"
    >
      <Link href={eventLink}>
        <div
          className="bg-cover relative rounded-xl overflow-hidden hover:border-4"
          style={{
            backgroundColor: cardColor,
            borderColor: 'black',
          }}
        >
          <Image
            src={eventBG}
            height={100}
            width={100}
            className="h-full w-full"
          />
          <p
            className={`absolute z-10 bottom-0 left-0 ${londonFont.className} text-white text-5xl sm:text-6xl p-5`}
          >
            {!shouldBreak ? (
              eventTitle
            ) : eventTitle === 'FIRE SILAMBAM' ? (
              <>
                {eventTitle.split(' ')[0]} <br /> {eventTitle.split(' ')[1]}
              </>
            ) : (
              <>
                {eventTitle.split(' ')[0]} <br /> {eventTitle.split(' ')[1]}{' '}
                {eventTitle.split(' ')[2]}
              </>
            )}
          </p>
        </div>
      </Link>
    </Tilt>
  );
}

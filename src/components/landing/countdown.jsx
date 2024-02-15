'use client';

import { useCountdown } from '@/hooks/useCountDown';
import { Londrina_Sketch, Londrina_Solid } from 'next/font/google';

const londrina_sketch = Londrina_Sketch({
  subsets: ['latin'],
  weight: '400',
});

const londrina_solid = Londrina_Solid({
  subsets: ['latin'],
  weight: ['400', '100', '300', '900'],
});

const font_colors = [
  '#FFFCEA',
  '#FA99B4',
  '#202020',
  '#FF4E84',
  '#202020',
  '#FA99B4',
];

export default function Countdown({ slideNo }) {
  const [days, hours, minutes, seconds] = useCountdown('Mar 7, 2024 00:00:00');
  return (
    <div
      id="countdown"
      className="flex flex-col justify-center items-center relative top-28 sm:top-[20vh]"
    >
      <h1
        className={`${londrina_sketch.className} absolute top-0 left-0 whitespace-nowrap text-[4.3rem] leading-4 sm:text-[11vh] opacity-80`}
        style={{ color: font_colors[slideNo - 1] }}
      >
        TO GO
      </h1>
      <div
        className={`${londrina_solid.className} flex gap-2 sm:gap-[2vh] text-white relative top-2 sm:top-[1.3vh]`}
      >
        {' '}
        <div className="flex items-end gap-0.5">
          <h2 className="text-3xl sm:text-[5vh]">{('0' + days).slice(-2)}</h2>
          <h3 className="text-xl sm:text-[3vh] font-light">d</h3>
        </div>
        <div className="flex items-end gap-0.5">
          <h2 className="text-3xl sm:text-[5vh]">{('0' + hours).slice(-2)}</h2>
          <h3 className="text-xl sm:text-[3vh] font-light">h</h3>
        </div>
        <div className="flex items-end gap-0.5">
          <h2 className="text-3xl sm:text-[5vh]">
            {('0' + minutes).slice(-2)}
          </h2>
          <h3 className="text-xl sm:text-[3vh] font-light">m</h3>
        </div>
      </div>
    </div>
  );
}

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
      className="flex flex-col justify-center items-center z-10 relative top-28 sm:top-40 xl:top-56"
    >
      <h1
        className={`${londrina_sketch.className} text-[4.3rem] leading-4 sm:text-8xl xl:text-9xl opacity-80`}
        style={{ color: font_colors[slideNo - 1] }}
      >
        TO GO
      </h1>
      <div
        className={`${londrina_solid.className} flex gap-2 sm:gap-4 text-white relative -top-3 sm:-top-10 xl:-top-16`}
      >        <div className="flex items-end gap-0.5">
          <h2 className="text-3xl sm:text-4xl xl:text-6xl">
            {('0' + days).slice(-2)}
          </h2>
          <h3 className="text-xl sm:text-2xl xl:text-4xl font-light">d</h3>
        </div>
        <div className="flex items-end gap-0.5">
          <h2 className="text-3xl sm:text-4xl xl:text-6xl">
            {('0' + hours).slice(-2)}
          </h2>
          <h3 className="text-xl sm:text-2xl xl:text-4xl font-light">h</h3>
        </div>
        <div className="flex items-end gap-0.5">
          <h2 className="text-3xl sm:text-4xl xl:text-6xl">
            {('0' + minutes).slice(-2)}
          </h2>
          <h3 className="text-xl sm:text-2xl xl:text-4xl font-light">m</h3>
        </div>
      </div>
    </div>
  );
}

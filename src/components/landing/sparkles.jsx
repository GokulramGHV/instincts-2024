'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Sparkles() {
  const [sparkles, setSparkles] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sparkles >= 3) {
        setSparkles(1);
        return;
      } else setSparkles((sparkles) => sparkles + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [sparkles]);

  return (
    <>
      {sparkles === 1 && (
        <Image
          src="/shapes/sparkles-1.svg"
          alt="sparkles"
          width={1100}
          height={685}
          className="z-30 absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]"
        />
      )}
      {sparkles === 2 && (
        <Image
          src="/shapes/sparkles-2.svg"
          alt="sparkles"
          width={1100}
          height={685}
          className="z-30 absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]"
        />
      )}
      {sparkles === 3 && (
        <Image
          src="/shapes/sparkles-3.svg"
          alt="sparkles"
          width={1100}
          height={685}
          className="z-30 absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]"
        />
      )}
    </>
  );
}

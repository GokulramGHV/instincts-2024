'use client';
import Image from 'next/image';
import { useEffect } from 'react';

const images = [
  '/landing_images/arudhra.png',
  '/landing_images/andrea 1.png',
  '/landing_images/crowd.png',
  '/landing_images/siddharth.png',
  '/landing_images/n2k.png',
  '/landing_images/flame 1.png',
];

export default function HeroCarousel({ slideNo }) {
  // changes the opacity of the images based on slideNo
  useEffect(() => {
    for (let i = 1; i <= 6; i++) {
      const image = document.getElementById(`image${i}`);
      image.style.opacity = i === slideNo ? 1 : 0;
    }
  }, [slideNo]);

  return (
    <>
      {images.map((src, index) => (
        <Image
          key={index}
          id={`image${index + 1}`}
          src={src}
          alt="landing_image"
          fill
          quality={100}
          style={{ objectFit: 'cover', opacity: slideNo === index + 1 ? 1 : 0 }}
          sizes="(min-width: 1540px) calc(100vw - 288px), (min-width: 780px) calc(100vw - 192px), (min-width: 640px) calc(100vw - 128px), 100w"
          priority={slideNo === index + 1}
          className="transition-opacity duration-700 ease-in-out"
        />
      ))}
    </>
  );
}

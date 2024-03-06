import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

function debounce(cb, time) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => cb(...args), time);
  };
}

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleSwipe = debounce((e) => {
    setCurrentIndex(
      Math.ceil(
        (e.target.scrollLeft / e.target.scrollWidth) * (images.length - 1)
      )
    );
  }, 100);

  const images = [
    '/gallery_images/pic1.png',
    '/gallery_images/pic2.jpg',
    '/gallery_images/pic3.png',
    '/gallery_images/pic4.JPG',
    '/gallery_images/pic5.JPG',
    '/gallery_images/pic6.JPG',
    '/gallery_images/pic7.JPG',
    '/gallery_images/pic8.jpg',
    '/gallery_images/pic9.png',
    '/gallery_images/pic10.jpg',
  ];

  return (
    <>
      <div
        onScroll={handleSwipe}
        className="h-full w-full relative bg-[#CCCCCC] scrollbar-hidden flex overflow-x-scroll rounded-3xl snap-mandatory snap-x"
      >
        {images.map((image, index) => (
          <div
            key={image}
            className={
              'h-full mr-[1px] relative sm:absolute snap-center aspect-[900/520] object-cover ' +
              (currentIndex !== index ? 'inactive-image' : '')
            }
            style={{ transition: 'opacity .3s ease-in-out' }}
          >
            <Image
              src={image}
              fill
              loading="lazy"
              alt=""
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
        <div
          className="h-full w-1/2 z-20 hidden cursor-pointer sm:block"
          style={{ cursor: 'url(gallery_images/left-arrow.cur), pointer'
          onClick={handlePrevious}
        ></div>
        <div
          className="h-full w-1/2 z-20 hidden cursor-pointer sm:block"
          style={{ cursor: 'url(gallery_images/right-arrow.cur), pointer'
          onClick={handleNext}
        ></div>
      </div>

      <div className="h-4 right-0 left-0 bottom-[-1.5rem] flex gap-2 justify-center absolute sm:hidden">
        {images.map((image, index) => (
          <span
            key={image}
            style={{
              backgroundColor: currentIndex === index ? '#4FB6F0' : '#D9D9D9',
            }}
            className={`w-2 h-2 rounded-full`}
          ></span>
        ))}
      </div>
    </>
  );
}

import { useState, useEffect, useRef } from 'react';

function debounce(cb, time) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => cb(...args), time)
  }
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

  const handleSwipe = debounce(e => {
    setCurrentIndex(Math.ceil((e.target.scrollLeft / e.target.scrollWidth) * (images.length-1)))
  }, 100)

  const images = [
    "/gallery_images/pic1.png",
    "/gallery_images/pic2.png",
    "/gallery_images/pic3.png",
  ];

  return (
    <>
      <div
        onScroll={handleSwipe}
        className='h-full w-full relative bg-white scrollbar-hidden flex overflow-x-scroll rounded-3xl snap-mandatory snap-x'>
        {images.map((image, index) => <img
          key={image}
          src={image}
          className={'h-full sm:absolute snap-center aspect-[900/520] object-cover ' + (currentIndex !== index ? 'inactive-image' : '') }
          style={{ transition: 'opacity .3s ease-in-out' }}
          alt=''
          />)}
        <div className='h-full w-1/2 z-20 hidden sm:block' onClick={handlePrevious}></div>
        <div className='h-full w-1/2 z-20 hidden sm:block' onClick={handleNext}></div>
      </div>

      <div className='h-4 right-0 left-0 bottom-[-1.5rem] flex gap-2 justify-center absolute sm:hidden'>
        {images.map((image, index) => (
          <span
            key={image}
            style={{ backgroundColor: currentIndex === index ? '#4FB6F0' : '#D9D9D9' }}
            className={`w-2 h-2 rounded-full`}></span>
          ))}
      </div>
    </>  
  );
}

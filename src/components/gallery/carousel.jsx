import { useState, useEffect } from 'react';

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const handleNext = () => {
    setOpacity(0.7); 
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    }, 100); 
  };

  const handlePrevious = () => {
    setOpacity(0.7);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      );
    }, 100);
  };

  const images = [
    "/gallery_images/pic1.png",
    "/gallery_images/pic2.png",
    "/gallery_images/pic3.png",
  ];

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }, [currentIndex]);

  return (
    <div key={currentIndex} className="flex z-10">
      <div className='flex w-[70vw] h-[65vh] relative'>
        <img
          src={images[currentIndex]}
          className='h-full w-full object-cover rounded-3xl transition-opacity duration-200 ease-in-out absolute'
          style={{ opacity: opacity }}
        />
        <div className='h-full w-1/2 z-20 hover:cursor-pointer' onClick={handlePrevious}></div>
        <div className='h-full w-1/2 z-20 hover:cursor-pointer' onClick={handleNext}></div>
      </div>
    </div>
  );
}

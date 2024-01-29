"use client"
import Carousel from "@/components/gallery/carousel";
import GalleryDesign from "@/components/gallery/gallery_design";
import Squiggly from "@/components/gallery/squiggly";
import Wheel from "@/components/gallery/wheel";


export default function GallerySection() {
    return (
        <section 
            className="flex overflow-hidden justify-center items-center relative aspect-[39/35] w-full sm:h-screen">
            {/* First div with background */}
            <div className="absolute h-full flex items-center inset-0 z-[-1] overflow-hidden bg-[#FC6655]">
                <img
                    src="./gallery_images/bg.png"
                    className="object-cover h-full sm:w-full"
                    alt="Background" />
            </div>
    
            {/* Second div with Carousel on top */}
            <div className='w-[80%] sm:w-auto sm:h-[55%] aspect-[900/520] relative'>
                <Carousel />
                <GalleryDesign />
                <div 
                    id="gallery-title" 
                    className="absolute top-[-2.5rem] sm:top-[-3.5rem] right-4 flex items-center justify-self-end">
                        <img src="shapes/title_wheel_1.svg" className='w-4 sm:w-6' alt="" />
                        <img src="shapes/title_wheel_2.svg" className='w-4 sm:w-6' alt="" />
                        <img src="shapes/title_wheel_3.svg" className='w-4 sm:w-6' alt="" />
                        <img src="shapes/gallery_title.svg" className='h-[2rem] sm:h-[3rem] mx-1' alt="" />
                        <div className="flex flex-col">
                            <img src="shapes/title_wheel_1.svg" className='w-4 sm:w-6' alt="" />
                            <img src="shapes/title_wheel_3.svg" className='w-4 sm:w-6' alt="" />
                        </div>
                </div>
            </div>
        </section>
    );
};



"use client"
import Carousel from "@/components/gallery/carousel";
import GalleryDesign from "@/components/gallery/gallery_design";


export default function GallerySection() {
    return (
        <section 
            className="flex overflow-hidden justify-center items-center relative aspect-[39/35] max-[1024px]:max-h-[40rem] max-[850px]:max-h-[35rem] w-full sm:h-screen">
            {/* First div with background */}
            <div className="absolute h-full flex items-center inset-0 z-[-1] overflow-hidden bg-[#FC6655]">
                <img
                    src="./gallery_images/bg.png"
                    className="object-cover h-full sm:w-full"
                    alt="Background" />
            </div>
    
            {/* Second div with Carousel on top */}
            <div className='w-[80%] sm:w-auto sm:h-[65%] aspect-[900/520] relative'>
                <Carousel />
                <GalleryDesign />
                <div 
                    id="gallery-title" 
                    className="absolute right-4 flex items-center justify-self-end h-[14%] top-[-15.5%]">
                        {/* top-[-2.5rem] h-[2rem] 
                        sm:top-[-3.5rem] sm:h-[3rem]
                        2xl:top-[-6.5rem] 2xl:h-[6rem] 2xl:right-8 */}
                        <img src="shapes/title_wheel_1.svg" className='h-1/2' alt="" />
                        <img src="shapes/title_wheel_2.svg" className='h-1/2' alt="" />
                        <img src="shapes/title_wheel_3.svg" className='h-1/2' alt="" />
                        <img src="shapes/gallery_title.svg" className='h-full mx-1' alt="" />
                        <div className="flex flex-col h-full">
                            <img src="shapes/title_wheel_1.svg" className='h-1/2' alt="" />
                            <img src="shapes/title_wheel_3.svg" className='h-1/2' alt="" />
                        </div>
                </div>
            </div>
        </section>
    );
};



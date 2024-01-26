"use client"
import GalleryCarousel from "@/components/gallery/carousel";


export default function GallerySection(){
    return (



        <div className="flex justify-center items-center relative h-screen">
            {/* First div with background */}
            <div className="absolute inset-0 z-[-1] overflow-hidden bg-[#DB2525]">
                <img
                    src="./gallery_images/bg.png"
                    className="object-cover h-full w-full bg-white opacity-20"
                    alt="Background"
                />
            </div>
    
            {/* Second div with GalleryCarousel on top */}
            <div className="relative object-cover z-10">
                <GalleryCarousel />
            </div>
        </div>



    );
};



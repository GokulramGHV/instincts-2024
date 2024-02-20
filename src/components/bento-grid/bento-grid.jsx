'use client'
import { useEffect, useState } from 'react';
import Pattern from './pattern';
import "./bento-grid.css"

function BentoGridSmall() {
    return (
        <div className="flex flex-row items-center justify-center w-full min-h-screen h-fit z-5">
            <div className='flex flex-col gap-2'>
                <div className='flex flex-row gap-2'>
                    <div className='flex flex-col gap-3'>
                        <img src={"/bento_grid/gallery_mobile.png"} className=" " />
                        <img src={"/bento_grid/club_events_mobile.png"} className=" " />
                        <img src={"/bento_grid/schedule_mobile.png"} className="" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <img src={"/bento_grid/sponsors_mobile.png"} className=" " />
                        <img src={"/bento_grid/central_events_mobile.png"} className="" />
                        <img src={"/bento_grid/contact_mobile.png"} className=" " />
                    </div>
                </div>
                <div>
                    <img src={"/bento_grid/pass_mobile.png"} className=" " />
                </div>
            </div>
        </div>
    )
}


function BentoGridLarge() {
    return (
        <div className="flex flex-row items-center justify-center w-full h-screen z-5">
            <div className="flex flex-col md:grid grid-cols-[1fr_1.2fr_repeat(6,1fr)] grid-rows-6 gap-2 w-[65%] aspect-auto max-h-[80%] overflow-auto">
                <div className="col-span-3 row-span-2 image-container"><img src={"/bento_grid/gallery_default.png"} className="  image" /></div>
                <div className="col-span-2 row-span-4 col-start-1 row-start-3 image-container"><img src={"/bento_grid/club_events_default.png"} className="w-full  image" /></div>
                <div className="col-span-3 row-span-2 col-start-4 row-start-1 image-container"><img src={"/bento_grid/sponsors_default.png"} className="w-full image" /></div>
                <div className="col-span-4 row-span-2 col-start-3 row-start-3 image-container"><img src={"/bento_grid/pass_default.png"} className="w-full image" /></div>
                <div className="col-span-3 row-span-2 col-start-3 row-start-5 image-container"><img src={"/bento_grid/contact_default.png"} className=" image" /></div>
                <div className="md:block col-span-2 col-start-7 row-start-1"><Pattern /></div>
                <div className="col-span-2 row-span-3 col-start-7 row-start-2 image-container"><img src={"/bento_grid/central_events_default.png"} className="w-full h-full image" /></div>
                <div className="col-span-3 row-span-2 col-start-6 row-start-5 image-container"><img src={"/bento_grid/schedule_default.png"} className="w-full  image" /></div>
            </div>
        </div>
    )
}

export default function BentoGrid() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 820)
    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 820);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return isDesktop ? BentoGridLarge() : BentoGridSmall();
}
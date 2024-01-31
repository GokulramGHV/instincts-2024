"use client";

import MarqueeClouds from "@/components/marquee-clouds";

export default function AboutUs() {
  return (
    <div className="relative overflow-hidden">
      <MarqueeClouds />
      <div className="bg-[#B0E9F9] min-h-screen w-full flex flex-col justify-center p-5">
        <div className="mx-auto flex md:flex-row flex-col justify-center relative py-20">
          <div className="my-auto mx-auto md:mx-0 z-10">
            <img src="/about_us/blimp.png" />
          </div>
          <div className="hidden md:block -ml-3 z-0 md:-ml-5 lg:w-64 xl:w-60 2xl:w-40">
            <div className="h-1/2">
              <img src="/about_us/top.svg" className="h-full float-bottom" />
            </div>
            <div className="h-1/2">
              <img src="/about_us/bottom.svg" className="h-full" />
            </div>
          </div>
          <div className="md:hidden flex -mt-3 -ml-1.5 z-0">
            <div className="md:w-1/2 -rotate-[6.5deg] z-10">
              <img src="/about_us/top.svg" className="w-full h-full" />
            </div>
            <div className="md:w-1/2">
              <img src="/about_us/bottom.svg" className="w-full h-full" />
            </div>
          </div>
          <div className="bg-white md:w-[40%] p-5 md:mx-0 mx-auto z-20 lg:text-base text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sed
            sunt illo qui nulla dolorem eos nobis adipisci blanditiis
            exercitationem amet optio dignissimos minus, reiciendis ducimus id
            dolore cum temporibus.
            <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            repudiandae illum atque aspernatur facere impedit, molestiae animi
            quod! Maiores nesciunt accusamus ipsa. Nobis quidem at et
            accusantium eos provident obcaecati!
          </div>
        </div>
      </div>
    </div>
  );
}

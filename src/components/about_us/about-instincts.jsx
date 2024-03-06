"use client";

import MarqueeClouds from "@/components/about_us/marquee-clouds";

export default function AboutInstincts({ slide }) {
  return (
    <div className="absolute top-0 w-full h-full overflow-hidden transition-opacity duration-[500ms]" style={{ opacity: slide === 2 ? 1 : 0 }}>
      <MarqueeClouds />
      <MarqueeClouds second={true} />
      <div className="bg-[#B0E9F9] min-h-screen w-full flex flex-col justify-center p-5">
        <div className="mx-auto flex md:flex-row flex-col justify-center relative py-20">
          <div className="my-auto mx-auto md:mx-0 z-10">
            <img src="/about_us/blimp.png" />
          </div>
          <div className="hidden md:block -ml-3 z-0 md:-ml-5 lg:w-64 xl:w-60 2xl:w-40 -mr-3">
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
          <div className="bg-white md:w-[40%] p-7 z-10 lg:text-xl font-satoshi text-xs">
            Marching towards its 19th year, INSTINCTS has set a benchmark in
            the conduct of college fests where intellectual, social, cultural and
            artistic talents are brought to view. This alluring platform showcases
            the latent talents of students from colleges across the nation.
            Instincts has seen an average footfall of 30000+ every year.
            <br /><br />
            SSN SNUC Instincts is one of the most awaited cultural events in the
            country. This year, Instincts will be held over three days with an
            exciting prize pool of ₹5,00,000+ across 50 + events hosted by 20+
            clubs!
          </div>
        </div>
      </div>
    </div>
  );
}

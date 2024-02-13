import Image from "next/image";

export default function ComingSoon() {
    return(
        <div className="flex-row bg-[#202020] w-full h-screen">
             <div className="flex w-full h-1/5">
                <Image className="ml-28 mt-14 max-sm:ml-10 max-sm:mt-0 max-sm:w-[120px]" src='/logos/Instincts_white.svg' width="180" height="150" />
             </div>
             <div className="w-full h-fit">
                <Image className="absolute z-30 left-28 max-sm:w-48 max-sm:left-6 " src="/coming_soon/undercon.svg" width="260" height="1000" />
                
                <Image className="absolute bottom-0 w-fit max-sm:w-full left-1/3 max-sm:left-0 z-10" src="/coming_soon/bgelement.svg" width="100" height="100" />

                <p className="bg-[#202020] text-white max-sm:text-right relative sm:left-48 sm:top-72 z-0 max-sm:right-14">Stay tuned</p>

                {/* Large screen strips  */}
                <Image className="absolute w-full bottom-1 z-10 max-sm:hidden" src='/coming_soon/strip1.svg' width="100" height="100" />
                <Image className="absolute top-48 w-full z-10 max-sm:hidden" src='/coming_soon/strip2.svg' width="100" height="100" />
                
                {/* Small screen strips */}
                <Image className="absolute z-20 w-full hidden max-sm:block max-sm:top-0" src='/coming_soon/smstrip1.svg' width="100" height="100" />
                <Image className="absolute z-20 w-full hidden max-sm:block max-sm:bottom-0" src='/coming_soon/smstrip2.svg' width="100" height="100" />
             </div>
        </div>
    );
}
'use client';
import Image from 'next/image';

export default function AboutUs() {
    return(
        <div className='bg-[#B0E9F9] min-h-screen w-full flex flex-col justify-center p-5'>
            <div className='mx-auto flex md:flex-row flex-col justify-center relative'>
                <div class="my-auto mx-auto md:mx-0 z-10">
                    <img src="/about_us/blimp.png" />
                </div>
                <div class="hidden md:block -ml-2 z-0">
                <div class="h-1/2">
                    <img src="/about_us/top.png" class="h-full" />
                </div>

                <div class="h-1/2">
                    <img src="/about_us/bottom.png" class="h-full" />
                </div>
            </div>

            <div class="md:hidden flex -mt-3 -ml-1.5 z-0">
                <div class="w-[40%] md:w-1/2 -rotate-[6.5deg] z-10">
                    <img src="/about_us/top.png" class="w-full h-full" />
                </div>

                <div class="w-[60%] md:w-1/2">
                    <img src="/about_us/bottom.png" class="w-full h-full" />
                </div>
            </div>
                <div className="bg-white md:w-[40%] p-5 md:mx-0 mx-auto z-20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sed sunt illo qui nulla dolorem eos nobis adipisci blanditiis exercitationem amet optio dignissimos minus, reiciendis ducimus id dolore cum temporibus.
                    <br /> <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos repudiandae illum atque aspernatur facere impedit, molestiae animi quod! Maiores nesciunt accusamus ipsa. Nobis quidem at et accusantium eos provident obcaecati!
                </div>
            </div>
        </div>
    )
}
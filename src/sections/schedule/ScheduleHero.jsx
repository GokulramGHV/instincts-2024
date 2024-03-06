import Link from "next/link";
import Image from "next/image";
import { NavButton } from "@/components/navbar/navbar";
import { Londrina_Solid } from "next/font/google"

const londonFont = Londrina_Solid({
    weight: ['100', '300', '400', '900'],
    subsets: ['latin'],
});

export default function ScheduleHero() {
    return (
        <header className="w-full bg-[#FFFCEA] pb-6 overflow-x-clip">
            <div className="md:px-12 px-6 pt-10 flex justify-between items-center w-full ">
                <Link href={"/"}>
                    <Image
                        src="/events-page/top-logo.svg"
                        className="sm:w-[276px] w-[200px] sm:h-[106px] h-[77px]"
                        width={276}
                        height={106}
                        alt="instincts-logo"
                    />
                </Link>
                <NavButton className='text-white' />
            </div>
            <div className="flex items-center py-8 pl-6 w-full justify-between overflow-hidden">
                <h1
                    className={`${londonFont.className} md:text-9xl xl:text-[10rem] 2xl:text-[13rem] text-7xl sm:my-auto mt-auto`}

                >
                    SCHEDULE
                </h1>
                <Image
                    alt="sponsors-pattern"
                    src="/sponsors/pattern.svg"
                    className="w-1/2 ml-12"
                    width={630}
                    height={318}
                />
                <Image
                    alt="sponsors-pattern"
                    src="/sponsors/pattern.svg"
                    className="w-1/2 hidden lg:block"
                    width={630}
                    height={318}
                />
            </div>
        </header>
    );
}

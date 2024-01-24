import Image from 'next/image';

export default function BentoGrid() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#FFFCEA]">
      <div className="grid grid-cols-7 w-[80rem] bg-gray-200 gap-5">
        <div className="w-full h-32 bg-blue-500 col-span-5"></div>
        <div className="w-full h-full bg-green-500 col-span-2 row-span-2">
          <div className="flex gap-5 w-full">
            <Image
              src="/logos/Instincts_black.svg"
              alt=""
              width={250}
              height={100}
            />
            <div className="bg-[#0C5AB9] w-24 h-20 rounded-[20px]"></div>
          </div>
        </div>
        <div className="w-full h-full bg-blue-500 col-span-2 row-span-2"></div>
        <div className="w-full h-32 bg-blue-500 col-span-3"></div>
        <div className="w-full h-32 bg-blue-500 col-span-5"></div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function MarqueeClouds() {
  return (
    <div className="absolute w-full top-0 right-0 h-full grid grid-rows-12 marqueeDiv">
      <div></div>
      <div className="grid grid-cols-2 place-items-center">
        <Image src="/about_us/cloud.svg" width="100" height="100" alt="Cloud" />
        <Image src="/about_us/cloud.svg" width="100" height="100" alt="Cloud" />
      </div>
      <div className="grid">
        <Image src="/about_us/cloud.svg" width="100" height="100" alt="Cloud" />
      </div>
      <div className="grid place-items-end">
        <Image src="/about_us/cloud.svg" width="100" height="100" alt="Cloud" />
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="grid grid-cols-2">
        <div className="pl-20">
          <Image
            src="/about_us/cloud.svg"
            width="100"
            height="100"
            alt="Cloud"
          />
        </div>
        <div className="pl-20">
          <Image
            src="/about_us/cloud.svg"
            width="100"
            height="100"
            alt="Cloud"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 place-items-center">
        <Image src="/about_us/cloud.svg" width="100" height="100" alt="Cloud" />
        <Image src="/about_us/cloud.svg" width="100" height="100" alt="Cloud" />
      </div>
    </div>
  );
}

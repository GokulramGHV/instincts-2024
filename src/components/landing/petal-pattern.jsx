import Image from "next/image";
export default function PetalPattern() {
  return (
    <div className="absolute z-30 -left-[18px] sm:-left-[25px]  xl:-left-[30px] bottom-[6vh]">
      <div>
        {[1, 2, 3, 4].map((i) => (
          <Image
            key={i}
            src={`/shapes/4_petal.svg`}
            alt="4_petal"
            width={73}
            height={73}
            className="w-9 sm:w-[50px] xl:w-[60px] transition ease-in-out transform hover:rotate-45 duration-500"
          />
        ))}
      </div>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Image
            key={i}
            src={`/shapes/4_petal.svg`}
            alt="4_petal"
            width={73}
            height={73}
            className="w-9 sm:w-[50px] xl:w-[60px] transition ease-in-out transform hover:rotate-45 duration-500"
          />
        ))}
      </div>
    </div>
  );
}

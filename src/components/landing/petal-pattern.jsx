import Image from 'next/image';
export default function PetalPattern() {
  return (
    <>
      <div className="w-fit absolute z-30 -left-[18px] bottom-[76px] sm:-left-[25px] sm:bottom-[98px] xl:-left-[30px] xl:bottom-[140px]">
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
      <div className="w-fit flex absolute z-30 -left-[18px] bottom-10 sm:-left-[25px] sm:bottom-12  xl:-left-[30px] xl:bottom-20">
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
    </>
  );
}

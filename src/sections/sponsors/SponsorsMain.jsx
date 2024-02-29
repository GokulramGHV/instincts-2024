import { Londrina_Solid } from 'next/font/google';
import Image from 'next/image';
const londonFont = Londrina_Solid({
  weight: ['100', '300', '400', '900'],
  subsets: ['latin'],
});

const companies = [
  { name: 'unstop', website: 'https://unstop.com/', width: 474, height: 188 },
  {
    name: 'sattva',
    website: 'https://www.sattva.in/',
    width: 297,
    height: 64,
  },
  {
    name: 'ags_cinemas',
    website: 'https://www.agscinemas.com/',
    width: 220,
    height: 136,
  },
  {
    name: 'tnie',
    website: 'https://www.newindianexpress.com/',
    width: 400,
    height: 161,
  },
  {
    name: 'accord',
    website: 'https://www.theaccordhotels.com/',
    width: 300,
    height: 167,
  },
];

export default function SponsorsMain() {
  return (
    <section className="w-full bg-[#05B163] pb-20 pt-16 lg:pb-28 lg:pt-24 2xl:pb-36 2xl:pt-32 overflowy-auto">
      <div className="w-full flex items-center justify-center flex-col">
        <h2
          className={`
          ${londonFont.className} 
          text-[#FFFCEA] text-center 
          text-4xl md:text-7xl lg:text-8xl
          pb-8 lg:pb-16`}
        >
          Title Sponsor
        </h2>
        <a
          href="https://www.hcltech.com/"
          target="_blank"
          className="flex items-center justify-center aspect-[2] 
            h-[9rem] md:h-[14rem] 2xl:h-[16rem]"
          style={{
            backgroundImage: 'url(/sponsors/clip3.svg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Image
            src="/sponsors/hcl_logo.png"
            alt="hcl logo"
            className="w-full"
            width={418}
            height={221}
          />
        </a>
      </div>
      <div className="w-full mt-20 lg:mt-28 2xl:mt-32">
        <h2
          className={`${londonFont.className} text-[#FFFCEA] text-center text-4xl md:text-7xl lg:text-8xl pb-8 lg:pb-16`}
        >
          Other Sponsors
        </h2>
        <div className="flex flex-wrap flex-col w-[95%] mx-auto gap-8 md:gap-y-16 md:flex-row justify-center">
          {companies.map((company, index) => (
            <a
              key={company.name}
              href={company.website}
              target="_blank"
              className="aspect-[2] h-[7rem] md:h-[11rem] 2xl:h-[18rem] flex items-center justify-center"
              style={{
                backgroundImage: `url(/sponsors/clip${index + 1}.svg)`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <Image
                src={`/sponsors/${company.name}_logo.png`}
                alt={company.name + ' logo'}
                className='w-[30%] sm:w-1/2'
                width={company.width}
                height={company.height}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

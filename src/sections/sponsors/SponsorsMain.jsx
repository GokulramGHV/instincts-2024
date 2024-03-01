import { Londrina_Solid } from 'next/font/google';
import Image from 'next/image';
const londonFont = Londrina_Solid({
  weight: ['100', '300', '400', '900'],
  subsets: ['latin'],
});

const companies = [
  { 
    name: 'unstop', 
    website: 'https://unstop.com/', 
    backgroundClip: 1,
    width: 474, 
    height: 188,
  },
  {
    name: 'sattva',
    website: 'https://www.sattva.in/',
    backgroundClip: 2,
    width: 297,
    height: 64,
  },
  {
    name: 'ags_cinemas',
    website: 'https://www.agscinemas.com/',
    backgroundClip: 3,
    width: 220,
    height: 136,
  },
];

const accord = {
  name: 'accord',
  website: 'https://www.theaccordhotels.com/',
  backgroundClip: 5,
  width: 300,
  height: 167,
}
const tnie = {
  name: 'tnie',
  website: 'https://www.newindianexpress.com/',
  backgroundClip: 4,
  width: 400,
  height: 161,
}

const hcl = {
  name: 'hcl',
  website: "https://www.hcltech.com/",
  backgroundClip: 3,
  width: 418,
  height: 221,
}

function SponsorCard({company, heightStyle="h-[7rem] md:h-[11rem]", widthStyle='w-1/2'}={}) {
  return (
    <div>
      <a
        key={company.name}
        href={company.website}
        target="_blank"
        className={"aspect-[2] mx-auto flex items-center justify-center " + heightStyle}
        style={{
          backgroundImage: `url(/sponsors/clip${company.backgroundClip}.svg)`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        >
        <Image
          src={`/sponsors/${company.name}_logo.png`}
          alt={company.name + ' logo'}
          className={widthStyle}
          width={company.width}
          height={company.height}
          />
      </a>
    </div>
  )
}

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
        <SponsorCard company={hcl} heightStyle='h-[9rem] md:h-[14rem] 2xl:h-[16rem]' widthStyle='w-[80%]'/>
      </div>
      <div className="w-full mt-20 lg:mt-28 2xl:mt-32">
        <h2
          className={`${londonFont.className} text-[#FFFCEA] text-center text-4xl md:text-7xl pb-8 lg:pb-16`}>
          Other Sponsors
        </h2>
        <div className="flex flex-wrap flex-col mx-auto gap-8 md:gap-y-16 md:flex-row justify-center">
          {companies.map(company => <SponsorCard company={company} key={company.name}/>)}
        </div>
      </div>
      <div className='w-[95%] mx-auto mt-20 lg:mt-28 2xl:mt-32 flex justify-center gap-16 sm:gap-24 flex-wrap px-4'>
        <div className='flex items-center flex-col'>
          <h2 className={`${londonFont.className} text-[#FFFCEA] text-center text-3xl md:text-5xl pb-8`}>
              Accomodation Partner
          </h2>
          <SponsorCard company={accord} />
        </div>
        <div className='flex items-center flex-col'>
          <h2 className={`${londonFont.className} text-[#FFFCEA] text-center text-3xl md:text-5xl pb-8`}>
            Print Partner
          </h2>
          <SponsorCard company={tnie} />          
        </div>
      </div>
    </section>
  );
}

import { Londrina_Solid } from 'next/font/google';
import Image from 'next/image';
const londonFont = Londrina_Solid({
  weight: ['100', '300', '400', '900'],
  subsets: ['latin'],
});

import { hcl, aram, sponsors, partners } from './details'

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
    <div className="w-full bg-[#05B163] pb-20 pt-16 lg:pb-28 lg:pt-24 2xl:pb-36 2xl:pt-32 overflowy-auto">

      <section className="w-full flex items-center justify-center flex-col">
        <h2 className={`${londonFont.className} text-[#FFFCEA] text-center 
          text-4xl md:text-7xl lg:text-8xl pb-8 lg:pb-16`}>
          Title Sponsor
        </h2>
        <SponsorCard company={hcl} heightStyle='h-[9rem] md:h-[14rem] 2xl:h-[16rem]' widthStyle='w-[80%]'/>
      </section>

      <section className="w-full flex items-center justify-center flex-col mt-24">
        <h2 className={`${londonFont.className} text-[#FFFCEA] text-center 
          text-4xl md:text-7xl lg:text-8xl pb-8 lg:pb-16`}>
          Associate Sponsor
        </h2>
        <SponsorCard company={aram} heightStyle='h-[8rem] md:h-[12rem] 2xl:h-[14rem]'/>
      </section>

      <section className='w-[95%] mx-auto mt-20 lg:mt-28 2xl:mt-32 px-4'>
        <h2
          className={`${londonFont.className} text-[#FFFCEA] text-center text-4xl md:text-8xl pb-8 lg:pb-16`}>
          Partners
        </h2>
        <div className='w-full flex flex-wrap justify-center gap-8 gap-y-12'>
          {partners.map(partner => (
            <div className='flex items-center flex-col' key={partner.type}>
              <h2 className={`${londonFont.className} text-[#FFFCEA] text-center text-2xl md:text-4xl pb-4 sm:pb-8`}>
                {partner.type} Partner
              </h2>
              <SponsorCard company={partner} />
            </div>
          ))}
         </div>
      </section>

      <section className="w-full mt-20 lg:mt-28 2xl:mt-32">
        <h2
          className={`${londonFont.className} text-[#FFFCEA] text-center text-4xl md:text-7xl pb-8 lg:pb-16`}>
          Other Sponsors
        </h2>
        <div className="flex flex-wrap flex-col mx-auto gap-8 md:gap-y-16 md:flex-row justify-center">
          {sponsors.map(company => <SponsorCard company={company} key={company.name}/>)}
        </div>
      </section>

    </div>
  );
}

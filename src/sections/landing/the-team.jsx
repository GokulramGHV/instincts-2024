import { Londrina_Solid } from 'next/font/google';
const londrina = Londrina_Solid({
  weight: ['100', '300', '400', '900'],
  subsets: ['latin'],
});


const president = { title: 'President, SSN Institutions and Pro Chancellor, SNU Chennai', name: 'Dr. Kala Vijaykumar' }
const vc = { title: 'Vice Chancellor, SNU Chennai', name: 'Dr. S. K. Bhattacharyya' }
const princi = { title: 'Principal, SNU Institutions', name: 'Dr. V. E. Annamalai' }
const facultyConvenor = { title: 'Faculty Convenor', name: 'Dr. Sunita Nair' }
const deptCoords = { title: 'Department Coordinators',  names: [
    'Hakash D',
    'Jerin Reshmon',
    'Keerthivasan M',
    'Naveen Raj A',
    'Preethi B',
    'Ravichandran',
    'Shruti R',
    'Sibi Ranganathan',
    'Vevaka Nandha Jo',
    'Nirgun T',
]}
const sponsHeads = { title: 'Sponsorship Heads', names: [
    'Ashwath S',
    'Duvaarak Prasanna A',
    'Pradhyumnan S',
    'Aditya Varun T',
]}
const treasurers = { title: 'Treasurers', names: ['Keshav Pillai', 'Rethnakumar R G'] }
const docHeads = { title: 'Documentation Heads', names: ['Sharmada G', 'Jaishree J'] }
const secretaries = { title: 'Secretaries', names: ['Aniruth Sridhar S', 'Raghav Nallaperumal', 'Sai Vignesh C'] }
const jointSecretaries = { title: 'Joint Secretaries', names: ['Deepak M', 'Madhumitha Dayalan'] }

function NameCard({ details }) {
  return (
    <div style={{width: details.title.length > 30 ? '45%' : 'auto'}}>
      <h2 className={`${londrina.className} text-base md:text-2xl xl:text-3xl 2xl:text-5xl w-full leading-tight mb-1 xl:mb-3`}>{details.title}</h2>
      {details.names ? 
      <ul className='flex flex-col list-none items-center font-satoshi text-sm md:text-xl xl:text-2xl 2xl:text-4xl'>
        {details.names.map(name => <li className='xl:mb-1' key={name}>{name}</li>)}
      </ul> : 
      <p className='font-satoshi text-sm md:text-xl xl:text-2xl 2xl:text-4xl'>{details.name}</p>}
    </div>
  )
}

export default function TheTeam() {
  return (
    <section className="w-full bg-[#E6FCFF] py-8 lg:py-12">
      <div className="w-full flex items-center mb-8 md:mb-12 justify-center 2xl:justify-between overflow-clip gap-1 sm:gap-4">
        <img src='/the_team/saopaulo.svg' className="h-[5rem] md:h-[8rem] lg:h-[10rem] xl:h-[12rem] 2xl:h-[18rem]" />
        <h1 className={`text-4xl md:text-6xl xl:text-8xl 2xl:text-9xl min-w-fit ${londrina.className}`}>THE TEAM</h1>
        <img src='/the_team/saopaulo.svg' className="h-[5rem] md:h-[8rem] rotate-180 lg:h-[10rem] xl:h-[12rem] 2xl:h-[18rem]" />
      </div>
      <div className='flex flex-col my-4 items-center text-center gap-10 md:gap-14 2xl:gap-24 lg:w-[70%] m-auto'>
        <NameCard details={president} />
        <div className='flex gap-6 md:gap-24 2xl:gap-32'>
          <NameCard details={vc} />
          <NameCard details={princi} />
        </div>
        <NameCard details={facultyConvenor} />
        <NameCard details={deptCoords} />
        <div className='flex gap-4 md:gap-12 2xl:gap-24'>
          <NameCard details={sponsHeads} />
          <NameCard details={treasurers} />
          <NameCard details={docHeads} />
        </div>
        <div className='flex gap-6 md:gap-24 2xl:gap-32'>
          <NameCard details={secretaries} />
          <NameCard details={jointSecretaries} />
        </div>
      </div>
    </section>
  )
}
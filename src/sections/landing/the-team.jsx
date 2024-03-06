import { Londrina_Solid } from 'next/font/google';
const londrina = Londrina_Solid({
  weight: ['100', '300', '400', '900'],
  subsets: ['latin'],
});

const president = { title: 'President, SSN Institutions and Pro Chancellor, SNU Chennai', name: 'Dr. Kala Vijaykumar' }
const vc = { title: 'Vice Chancellor, SNU Chennai', name: 'Dr. S. K. Bhattacharyya' }
const princi = { title: 'Principal, SSN Institutions', name: 'Dr. V. E. Annamalai' }
const facultyConvenor = { title: 'Faculty Convenor', name: 'Dr. Sunita Nair' }
const deptCoords1 = {
  title: '', names: [
    'Preethi B',
    'Hakash D',
    'Naveen Raj A',
    'Jerin Reshmon',
    'Keerthivasan M',
  ]
}
const deptCoords2 = {
  title: '', names: [
    'Shruti R',
    'Nirgun T',
    'Ravichandran',
    'Sibi Ranganathan',
    'Vevaka Nandha Jo',
  ]
}
const sponsHeads = {
  title: 'Sponsorship Heads', names: [
    'Ashwath S',
    'Duvaarak Prasanna',
    'Pradhyumnan S',
    'Aditya Varun T',
  ]
}
const treasurers = { title: 'Treasurers', names: ['Keshav Pillai', 'Rethnakumar RG'] }
const docHeads = { title: 'Documentation Heads', names: ['Sharmada G', 'Jaishree J'] }
const secretaries = { title: 'Secretaries', names: ['Aniruth Sridhar S', 'Raghav Nallaperumal', 'Sai Vignesh C'] }
const jointSecretaries = { title: 'Joint Secretaries', names: ['Deepak M', 'Madhumitha Dayalan'] }

function NameCard({ details }) {
  return (
    <div style={{ width: details.title.length > 30 ? '45%' : 'auto' }}>
      <h2 className={`${londrina.className} text-base md:text-2xl w-full leading-tight mb-1 xl:mb-2`}>{details.title}</h2>
      {details.names ?
        <ul className='flex flex-col list-none items-center font-satoshi text-sm md:text-xl'>
          {details.names.map(name => <li className='xl:mb-1' key={name}>{name}</li>)}
        </ul> :
        <p className='font-satoshi text-sm md:text-xl'>{details.name}</p>}
    </div>
  )
}

export default function TheTeam() {
  return (
    <section className="w-full bg-[#E6FCFF] py-8">
      <div className="w-full flex items-center mb-8 md:mb-12 justify-center overflow-clip gap-1 sm:gap-4">
        <img src='/the_team/saopaulo.svg' className="h-[5rem] md:h-[8rem] lg:h-[10rem] mr-auto" />
        <h1 className={`text-4xl md:text-6xl min-w-fit xl:mx-4 ${londrina.className}`}>THE TEAM</h1>
        <img src='/the_team/saopaulo.svg' className="h-[5rem] md:h-[8rem] rotate-180 lg:h-[10rem] ml-auto" />
      </div>
      <div className='flex flex-col my-4 items-center text-center gap-8 m-auto px-2 sm:px-5'>
        <NameCard details={president} />
        <div className='flex gap-6 md:gap-24'>
          <NameCard details={vc} />
          <NameCard details={princi} />
          <NameCard details={facultyConvenor} />
        </div>
        <div>
          <h2 className={`${londrina.className} text-base md:text-2xl w-full leading-tight`}>Department Coordinators</h2>
          <div className='flex gap-4 md:gap-12'>
            <NameCard details={deptCoords1} />
            <NameCard details={deptCoords2} />
          </div>
        </div>
        <div className='flex gap-4 md:gap-12'>
          <NameCard details={sponsHeads} />
          <NameCard details={treasurers} />
          <NameCard details={docHeads} />
          <span className='hidden lg:flex gap-12'>
            <NameCard details={secretaries} />
            <NameCard details={jointSecretaries} />
          </span>
        </div>
        <div className='flex gap-6 md:gap-24 lg:hidden'>
          <NameCard details={secretaries} />
          <NameCard details={jointSecretaries} />
        </div>
      </div>
    </section>
  )
}
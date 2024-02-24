import { Londrina_Solid } from 'next/font/google';
const londonFont = Londrina_Solid({
  weight: ['100', '300', '400', '900'],
  subsets: ['latin'],
});

export default function AboutSSNSNU({ slide }) {
  return (
    <div 
      style={{ opacity: slide < 2 ? 1 : 0, backgroundColor: slide === 0 ? '#FEDE88' : '#9DD764' }}
      className={`w-full h-full relative ${londonFont.className} py-8 xl:py-12 transition-[background-color,opacity] duration-[500ms]`}>
      <img 
        src="/about_us/big-tent.svg" 
        alt="decor-tent" 
        className="absolute bottom-0 right-0 sm:h-[33%] md:h-[40%] lg:h-[55%] hidden sm:block"/>

      <div style={{ opacity: 1-slide }} className='absolute transition-opacity duration-[500ms]'>
        <h2 className='text-3xl sm:text-6xl xl:text-7xl 2xl:text-9xl px-8 xl:px-12'>About SSN College of Engineering, Chennai</h2>
        <p className='text-base md:text-xl xl:text-2xl 2xl:text-5xl sm:w-[65%] p-8 xl:p-12 font-satoshi'>Sri Sivasubramaniya Nadar (SSN) College of Engineering started in 1996, is the first initiative of Mr. Shiv Nadar, Founder Chairman, HCL Technologies in the field of education. The vision of SSN is &apos;To be a world-class institution for technical education and scientific research for public good. Today, SSNCE is an autonomous college affiliated with Anna University and ranked 48th in NIRF 2022 by MoE, Gol amongst all engineering colleges in India. With a diverse and dynamic community of students, SSN offers a distinctive combination of some of the finest academic and research programs, accomplished faculty, state-of-the-art facilities, and a residential campus set on a sprawling 230 acres of sylvan surroundings in a variety of stimulating environments for intellectual development, innovation, and personal growth, challenging young minds with dynamic learning opportunities and equipping them with the skills, insights, attitudes and practical experiences that are necessary to take up leadership responsibilities in the society. SSN has always encouraged the confluence of youth and revolutionised the technological realms</p>
      </div>    
      <div style={{ opacity: slide }} className='absolute transition-opacity duration-[500ms]'>
        <h2 className='text-3xl sm:text-6xl xl:text-7xl 2xl:text-9xl px-8 xl:px-12'>About Shiv Nadar University, Chennai</h2>
        <p className='text-base md:text-xl xl:text-2xl sm:w-[65%] 2xl:text-5xl p-8 xl:p-12 font-satoshi'>Shiv Nadar University Chennai&apos;s vision is to become a global university, focused on innovation, research, academic excellence and creativity, to develop socially conscious leaders capable of addressing future challenges. Established by an act of the Tamil Nadu Legislative Assembly to promote, conceptualize and bring about a paradigm shift through the development of outstanding leadership, research, knowledge and ideas for education and allied development sectors, the university, with its on-campus research capabilities and the mindset to nurture individuals into problem-solvers of tomorrow, is staged to become the epicentre of academic rigor and innovation in the region.<br /><br />Each undergraduate program at SNUC is designed to help talented students become successful, job-ready professionals or world-class academicians.</p>
      </div>  
    </div>
  )
}
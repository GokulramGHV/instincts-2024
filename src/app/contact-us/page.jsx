import Hero from '@/sections/events-page/hero';
import Footer from '@/sections/footer/footer';
import { Londrina_Solid } from 'next/font/google';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

export const metadata = {
  title: 'Instincts 2024 | Contact Us',
  description: 'Instincts 2024 Contact Us',
};

const londrinaSolid = Londrina_Solid({
  weight: ['100', '300', '400', '900'],
  subsets: ['latin'],
});

const contacts = [
  {
    name: 'Abhishek M',
    phone: '99400 51611',
    email: 'abishek2010508@ssn.edu.in',
    color: '#F6800E',
    secondaryColor: '#FDAF46',
  },
  {
    name: 'ASM. Pavithran',
    phone: '98412 98328',
    email: 'asm2010127@ssn.edu.in',
    color: '#05B163',
    secondaryColor: '#9DD764',
  },
  {
    name: 'Bhavesh Kumar',
    phone: '80085 26660',
    email: 'bhavesh21110044@snuchennai.edu.in',
    color: '#0C5AB9',
    secondaryColor: '#4FB6F0',
  },
];

export default function Page() {
  return (
    <>
      <Hero
        headingName="CONTACT US"
        heroColor={'#C297F9'}
        heroImage={'/contact_us/contact-us-hero-image.svg'}
        fontColor={'#202020'}
      />
      <div className="font-satoshi py-20 px-10">
        <h1
          className={`${londrinaSolid.className} text-5xl sm:text-6xl xl:text-7xl text-center text-[#202020]`}
        >
          Overall Event Coordinators
        </h1>
        <div className="flex flex-wrap justify-center gap-10 mt-12">
          {contacts.map((contact) => {
            return (
              <div
                key={contact.name}
                className="rounded-lg md:px-12 px-5 py-6 w-full md:w-fit flex flex-col items-center border"
                style={{ borderColor: contact.color }}
              >
                <h2
                  className={`${londrinaSolid.className} text-2xl sm:text-4xl xl:text-5xl text-[#202020]`}
                  style={{ color: contact.color }}
                >
                  {contact.name}
                </h2>
                <a
                  href={`tel:+91${contact.phone.replace(' ', '')}`}
                  className="flex gap-3 items-center sm:text-2xl font-medium text-[#202020] mt-3"
                  target="_blank"
                >
                  <FaPhone
                    className="md:text-xl"
                    color={contact.secondaryColor}
                  />{' '}
                  {contact.phone}
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex gap-3 items-center break-all text-sm sm:text-2xl font-medium text-[#202020] mt-3"
                  target="_blank"
                >
                  <FaEnvelope
                    className="md:text-xl relative top-0.5"
                    color={contact.secondaryColor}
                    flex
                    gap-2
                  />{' '}
                  {contact.email}
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}

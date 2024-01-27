import DefaultLayout from '@/components/footer/DefaultLayout';
import MobileLayout from '@/components/footer/MobileLayout';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0C5AB9] w-full min-h-[90vh] flex flex-col items-center justify-between">
      <DefaultLayout />
      <MobileLayout />
      <Image
        src="/logos/instincts_footer.svg"
        alt="instincts_logo"
        className="w-full"
        width={1440}
        height={50}
      />
    </footer>
  );
}

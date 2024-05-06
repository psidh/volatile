import { InfiniteMovingCardsDemo } from '@/components/InfiniteMovingCardsDemo';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Join from '@/components/ui/Join';
import { DotBackgroundDemo } from '@/components/ui/Hero';
import { BentoGridDemo } from '@/components/BentoGrid';

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <DotBackgroundDemo />
        <Join />
        <InfiniteMovingCardsDemo />
        <BentoGridDemo />
        <Footer />
      </div>
    </>
  );
}

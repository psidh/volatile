import { InfiniteMovingCardsDemo } from '@/components/InfiniteMovingCardsDemo';
import Navbar from "@/components/ui/Navbar"
import Footer from '@/components/ui/Footer';
import {DotBackgroundDemo} from "@/components/ui/Hero"

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <DotBackgroundDemo />
        <InfiniteMovingCardsDemo />
        <Footer />
      </div>
    </>
  );
}

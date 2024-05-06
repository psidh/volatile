'use client';
import testimonials from '@/data/card';
import { InfiniteMovingCards } from './ui/InfiniteCards';

export function InfiniteMovingCardsDemo() {
  return (
    <div className='h-[40rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
      <InfiniteMovingCards
        items={testimonials}
        direction='right'
        speed='slow'
      />
    </div>
  );
}

import React from 'react';

export function DotBackgroundDemo() {
  return (
    <div className='h-fit  w-full bg-black  bg-dot-white/[0.2]  relative flex items-center justify-center'>
      {/* Radial gradient for the container to give a faded look */}
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <div className='md:px-10 px-4'>
        <p className='text-4xl sm:text-5xl md:text-7xl font-bold relative z-20 bg-clip-text text-center text-transparent bg-gradient-to-b from-white to-neutral-400 py-8'>
          <span className='text-sky-400'>Enhance</span> The Way You <br />
          Present Your <span className='text-sky-400'>Business</span>
        </p>
        <p className='text-xl sm:text-2xl font-light relative z-20 text-center text-white py-2'>
          Welcome to DarkHorses, where innovation meets simplicity.
          <br />
          We are dedicated to providing best solutions for your business
        </p>
      </div>
    </div>
  );
}

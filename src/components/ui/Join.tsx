import React from 'react';

export default function Join() {
  return (
    <div className='flex flex-col items-center justify-center my-6'>
      <div className='flex justify-center items-center w-[50%] border-neutral-800'>
        <input
          type='text'
          title='email'
          placeholder='Enter your email'
          className='pl-4 bg-black border-neutral-600 border-2 py-4 px-8 rounded-t-lg rounded-b-lg rounded-l-lg rounded-tr-none rounded-br-none'
        />
        <button className='text-center py-3 px-8 border-sky-400 
        border-t-2 border-b-2 border-r-2 rounded-t-lg rounded-b-lg 
        rounded-r-lg rounded-tl-none rounded-bl-none bg-sky-400 font-bold text-2xl'>
          Join
        </button>
      </div>
    </div>
  );
}

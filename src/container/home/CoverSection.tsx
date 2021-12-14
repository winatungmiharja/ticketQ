import * as React from 'react';

export default function CoverSection() {
  return (
    <div className='bg-herosmall grid pt-16 pb-80 h-full min-h-screen bg-fixed bg-center bg-cover sm:pt-24 sm:pb-40 md:bg-hero lg:pt-40 lg:pb-48'>
      <div className='layout flex flex-col gap-1 justify-center items-center h-full text-white md:items-start'>
        <h2
          id='category-heading'
          className='text-4xl font-extrabold tracking-tight text-white lg:text-5xl'
        >
          Discover Places
        </h2>
        <p>and explore online!</p>
      </div>
    </div>
  );
}

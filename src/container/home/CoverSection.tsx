/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

export default function CoverSection() {
  return (
    <div className='bg-herosmall min-h-main grid relative pt-16 pb-80 h-full bg-fixed bg-center bg-cover sm:pt-24 sm:pb-40 md:bg-hero lg:pt-40 lg:pb-48'>
      <div className='layout flex flex-col gap-1 justify-center items-center h-full text-white md:items-start'>
        <div className='flex gap-2 items-center'>
          <img
            src='/favicon/large-og.png'
            alt=''
            className='block w-16 md:hidden'
          />

          <div>
            <h2 className='text-5xl font-extrabold tracking-tight text-white select-all lg:text-5xl'>
              Ticket<span className='animate-flicker'>Q</span>
            </h2>
          </div>
        </div>
        <hr className='mt-2 w-1/2 text-white md:w-1/3' />
        <div className='hidden text-white md:block'>
          <h2 className='mt-2 text-2xl font-extrabold tracking-tight select-all lg:text-3xl'>
            Discover Places
          </h2>
          <p>and explore online!</p>
        </div>
      </div>
      <div
        aria-hidden='true'
        className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-10'
      />
      <div className='block absolute right-4 bottom-4 text-right text-white md:hidden'>
        <h2 className='mt-2 text-2xl font-extrabold tracking-tight select-all lg:text-3xl'>
          Discover Places
        </h2>
        <p>and explore online!</p>
      </div>
    </div>
  );
}

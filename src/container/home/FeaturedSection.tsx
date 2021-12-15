/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

export default function FeaturedSection() {
  return (
    <section aria-labelledby='cause-heading'>
      <div className='bg-host layout overflow-hidden relative py-16 bg-center bg-no-repeat bg-cover rounded-lg'>
        <div aria-hidden='true' className='bg-black/30 absolute inset-0' />
        <div className='flex relative flex-col justify-center items-start p-8 mx-auto md:p-16'>
          <h2
            id='cause-heading'
            className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl'
          >
            Pembelian secara mudah
          </h2>
          <p className='mt-3 text-xl text-white'>
            {'Semua serba online, dijamin cepat dan aman! '}
          </p>
          <div>
            <a
              href='#'
              className='block px-8 py-3 mt-8 w-full text-base font-medium text-gray-900 bg-white rounded-md border border-transparent sm:w-auto hover:bg-gray-100'
            >
              Pesan Tiket
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

export default function CategorySection() {
  return (
    <section aria-labelledby='category-heading' className='bg-gray-50'>
      <div className='layout'>
        <div className='sm:flex sm:justify-between sm:items-baseline'>
          <h2
            id='category-heading'
            className='text-2xl font-extrabold tracking-tight text-gray-900'
          >
            Shop by Category
          </h2>
          <a
            href='#'
            className='hidden text-sm font-semibold text-indigo-600 sm:block hover:text-indigo-500'
          >
            Browse all categories<span aria-hidden='true'> &rarr;</span>
          </a>
        </div>

        <div className='grid grid-cols-1 gap-y-6 mt-8 sm:grid-cols-2 sm:gap-x-6 lg:gap-8'>
          <div className='group overflow-hidden relative rounded-lg'>
            <img
              src='/images/live/1.jpg'
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className='object-cover object-center h-full group-hover:opacity-75'
            />
            <div
              aria-hidden='true'
              className='bg-gradient-to-b from-transparent to-black opacity-50'
            />
            <div className='flex absolute inset-0 items-end p-6'>
              <div>
                <h3 className='font-semibold text-white'>
                  <a href='#'>
                    <span className='absolute inset-0' />
                    New Arrivals
                  </a>
                </h3>
                <p aria-hidden='true' className='mt-1 text-sm text-white'>
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className='grid grid-rows-2 gap-6 lg:gap-8'>
            <div className='group overflow-hidden relative rounded-lg md:aspect-[2/1]'>
              <img
                src='/images/live/3.jpg'
                alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                className='object-cover object-center group-hover:opacity-75'
              />
              <div
                aria-hidden='true'
                className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20'
              />
              <div className='flex absolute inset-0 items-end p-6'>
                <div>
                  <h3 className='font-semibold text-white'>
                    <a href='#'>
                      <span className='absolute inset-0' />
                      New Arrivals
                    </a>
                  </h3>
                  <p aria-hidden='true' className='mt-1 text-sm text-white'>
                    Shop now
                  </p>
                </div>
              </div>
            </div>{' '}
            <div className='group overflow-hidden relative rounded-lg md:aspect-[2/1]'>
              <img
                src='/images/live/2.jpg'
                alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                className='object-cover object-center group-hover:opacity-75'
              />
              <div
                aria-hidden='true'
                className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20'
              />
              <div className='flex absolute inset-0 items-end p-6'>
                <div>
                  <h3 className='font-semibold text-white'>
                    <a href='#'>
                      <span className='absolute inset-0' />
                      New Arrivals
                    </a>
                  </h3>
                  <p aria-hidden='true' className='mt-1 text-sm text-white'>
                    Shop now
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 sm:hidden'>
          <a
            href='#'
            className='block text-sm font-semibold text-indigo-600 hover:text-indigo-500'
          >
            Browse all categories<span aria-hidden='true'> &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

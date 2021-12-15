/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

export default function CtaSection() {
  return (
    <section aria-labelledby='sale-heading' className='pt-16'>
      <div className='overflow-hidden pt-32 sm:pt-14'>
        <div className='bg-gray-800'>
          <div className='layout relative'>
            <div className='relative pt-48 pb-16 sm:pb-24'>
              <div>
                <h2
                  id='sale-heading'
                  className='text-4xl font-extrabold tracking-tight text-white md:text-5xl'
                >
                  Tunggu apa
                  <br />
                  lagi?
                </h2>
                <div className='mt-6 text-base'>
                  <a href='#' className='font-semibold text-white'>
                    segera belanja di TicketQ
                    <span aria-hidden='true'> &rarr;</span>
                  </a>
                </div>
              </div>

              <div className='absolute -top-32 left-1/2 transform -translate-x-1/2 sm:top-6 sm:translate-x-0'>
                <div className='flex ml-24 space-x-6 min-w-max sm:ml-3 lg:space-x-8'>
                  <div className='flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8'>
                    <div className='flex-shrink-0'>
                      <img
                        className='object-cover w-64 h-64 rounded-lg md:w-72 md:h-72'
                        src='/images/explore/1.jpg'
                        alt='destinasi'
                      />
                    </div>

                    <div className='flex-shrink-0 mt-6 sm:mt-0'>
                      <img
                        className='object-cover w-64 h-64 rounded-lg md:w-72 md:h-72'
                        src='/images/explore/2.jpg'
                        alt='destinasi'
                      />
                    </div>
                  </div>
                  <div className='flex space-x-6 sm:flex-col sm:-mt-20 sm:space-x-0 sm:space-y-6 lg:space-y-8'>
                    <div className='flex-shrink-0'>
                      <img
                        className='object-cover w-64 h-64 rounded-lg md:w-72 md:h-72'
                        src='/images/explore/3.jpg'
                        alt='destinasi'
                      />
                    </div>

                    <div className='flex-shrink-0 mt-6 sm:mt-0'>
                      <img
                        className='object-cover w-64 h-64 rounded-lg md:w-72 md:h-72'
                        src='/images/explore/4.jpg'
                        alt='destinasi'
                      />
                    </div>
                  </div>
                  <div className='flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8'>
                    <div className='flex-shrink-0'>
                      <img
                        className='object-cover w-64 h-64 rounded-lg md:w-72 md:h-72'
                        src='https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg'
                        alt='destinasi'
                      />
                    </div>

                    <div className='flex-shrink-0 mt-6 sm:mt-0'>
                      <img
                        className='object-cover w-64 h-64 rounded-lg md:w-72 md:h-72'
                        src='https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg'
                        alt='destinasi'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

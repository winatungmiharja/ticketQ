/* eslint-disable @next/next/no-img-element */
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import useUserAuth from '@/components/store/authUser';

export default function ProfilePage() {
  const store = useUserAuth();
  const { user } = store;
  return (
    <Layout showLogin={false} showSignin={false}>
      <Seo templateTitle='Profile' />

      <main className='layout py-16'>
        {/* Page header */}
        <div className='md:flex md:justify-between md:items-center md:space-x-5'>
          <div className='flex items-center space-x-5'>
            <div>
              <h1 className='text-2xl font-bold text-gray-900'>
                Halo {user.name}
              </h1>
              <p className='text-sm font-medium text-gray-500'>
                Profil dilihat{' '}
                <a href='#' className='text-gray-900'>
                  pada
                </a>{' '}
                <time dateTime='2020-08-25'>August 25, 2020</time>
              </p>
            </div>
          </div>
          <div className='justify-stretch flex flex-col-reverse mt-6 space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-x-reverse sm:space-y-0 md:flex-row md:mt-0 md:space-x-3'>
            <button
              type='button'
              className='inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-100 focus:outline-none'
            >
              Edit Profil
            </button>
            <button
              type='button'
              className='inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md border border-transparent shadow-sm hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-100 focus:outline-none'
            >
              Ubah password
            </button>
          </div>
        </div>

        <div className='mt-8 space-y-6'>
          {/* Description list*/}
          <section aria-labelledby='applicant-information-title'>
            <div className='bg-white shadow sm:rounded-lg'>
              <div className='px-4 py-5 sm:px-6'>
                <h2
                  id='applicant-information-title'
                  className='text-lg font-medium leading-6 text-gray-900'
                >
                  Informasi profil saya
                </h2>
                <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                  Personal details and application.
                </p>
              </div>
              <div className='px-4 py-5 border-t border-gray-200 sm:px-6'>
                <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
                  <div className='sm:col-span-1'>
                    <dt className='text-sm font-medium text-gray-500'>Nama</dt>
                    <dd className='mt-1 text-sm text-gray-900'>{user.name}</dd>
                  </div>
                  <div className='sm:col-span-1'>
                    <dt className='text-sm font-medium text-gray-500'>Email</dt>
                    <dd className='mt-1 text-sm text-gray-900'>{user.email}</dd>
                  </div>
                  <div className='sm:col-span-1'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Kode negara
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900'>+1</dd>
                  </div>
                  <div className='sm:col-span-1'>
                    <dt className='text-sm font-medium text-gray-500'>No.Hp</dt>
                    <dd className='mt-1 text-sm text-gray-900'>{user.telp}</dd>
                  </div>
                  <div className='sm:col-span-2'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Username
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900'>
                      {user.username}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

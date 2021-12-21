import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';
import {
  HiChevronDown,
  HiFilter,
  HiMinusSm,
  HiOutlineX,
  HiPlusSm,
  HiViewGrid,
} from 'react-icons/hi';

import { getScheduleData } from '@/lib/fetch';
import { ScheduleType } from '@/lib/type';

import ScheduleCard from '@/components/card/ScheduleCard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import useUserAuth from '@/components/store/authUser';

const UrutkanOptions = [
  { name: 'Terlaris', href: '#', current: true },
  { name: 'Terbaru', href: '#', current: false },

  { name: 'Price: dari rendah', href: '#', current: false },
  { name: 'Price: dari tinggi', href: '#', current: false },
];
const subCategories = [
  { name: 'Semua Tiket', href: '#' },
  { name: 'Sedang Trending', href: '#' },
  { name: 'Pilihan Terbaik', href: '#' },
];
const filters = [
  {
    id: 'Kota',
    name: 'Pulau',
    options: [
      { value: 'Denpasar', label: 'Denpasar', checked: false },
      { value: 'Kalimantan', label: 'Kalimantan', checked: false },
      { value: 'Sulawesi', label: 'Sulawesi', checked: true },
      { value: 'Papua', label: 'Papua', checked: false },
      { value: 'Jawa', label: 'Jawa', checked: false },
    ],
  },
];

export default function HomePage({ data }: { data: ScheduleType[] }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false);
  const { user } = useUserAuth();
  return (
    <Layout showLogin={false} showSignin={false}>
      <Seo templateTitle='Home' />
      <main className=''>
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={React.Fragment}>
            <Dialog
              as='div'
              className='flex fixed inset-0 z-40 lg:hidden'
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={React.Fragment}
                enter='transition-opacity ease-linear duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='transition-opacity ease-linear duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
              </Transition.Child>

              <Transition.Child
                as={React.Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <div className='flex overflow-y-auto relative flex-col py-4 pb-12 ml-auto w-full max-w-xs h-full bg-white shadow-xl'>
                  <div className='flex justify-between items-center px-4'>
                    <h2 className='text-lg font-medium text-gray-900'>
                      Filters
                    </h2>
                    <button
                      type='button'
                      className='flex justify-center items-center p-2 -mr-2 w-10 h-10 text-gray-400 bg-white rounded-md'
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className='sr-only'>Close menu</span>
                      <HiOutlineX className='w-6 h-6' aria-hidden='true' />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className='mt-4 border-t border-gray-200'>
                    <h3 className='sr-only'>Categories</h3>
                    <ul
                      role='list'
                      className='px-2 py-3 font-medium text-gray-900'
                    >
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className='block px-2 py-3'>
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as='div'
                        key={section.id}
                        className='px-4 py-6 border-t border-gray-200'
                      >
                        {({ open }) => (
                          <>
                            <h3 className='flow-root -mx-2 -my-3'>
                              <Disclosure.Button className='flex justify-between items-center px-2 py-3 w-full text-gray-400 bg-white hover:text-gray-500'>
                                <span className='font-medium text-gray-900'>
                                  {section.name}
                                </span>
                                <span className='flex items-center ml-6'>
                                  {open ? (
                                    <HiMinusSm
                                      className='w-5 h-5'
                                      aria-hidden='true'
                                    />
                                  ) : (
                                    <HiPlusSm
                                      className='w-5 h-5'
                                      aria-hidden='true'
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className='pt-6'>
                              <div className='space-y-6'>
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className='flex items-center'
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type='checkbox'
                                      defaultChecked={option.checked}
                                      className='w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500'
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className='flex-1 ml-3 min-w-0 text-gray-500'
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </div>
              </Transition.Child>
            </Dialog>
          </Transition.Root>
          <main className='layout'>
            <div className='bg-hero py-16 mt-4 tracking-tight text-white bg-bottom rounded-lg'>
              <div className='px-8'>
                <h1>Halo {user.name.split(' ')[0]}!</h1>
                <p>Cari tiket ke tempat idamanmu yuk!</p>
              </div>
            </div>
            <div className='flex relative z-10 justify-between items-baseline py-16 pb-6 border-b border-gray-200'>
              <div className='flex items-center'>
                <Menu as='div' className='inline-block relative text-left'>
                  <div>
                    <Menu.Button className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
                      Urutkan
                      <HiChevronDown
                        className='flex-shrink-0 -mr-1 ml-1 w-5 h-5 text-gray-400 group-hover:text-gray-500'
                        aria-hidden='true'
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={React.Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 mt-2 w-40 bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-2xl origin-top-right focus:outline-none'>
                      <div className='py-1'>
                        {UrutkanOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <a
                                href={option.href}
                                className={clsx(
                                  option.current
                                    ? 'font-medium text-gray-900'
                                    : 'text-gray-500',
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  type='button'
                  className='p-2 -m-2 ml-5 text-gray-400 sm:ml-7 hover:text-gray-500'
                >
                  <span className='sr-only'>View grid</span>
                  <HiViewGrid className='w-5 h-5' aria-hidden='true' />
                </button>
                <button
                  type='button'
                  className='p-2 -m-2 ml-4 text-gray-400 sm:ml-6 lg:hidden hover:text-gray-500'
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className='sr-only'>Filters</span>
                  <HiFilter className='w-5 h-5' aria-hidden='true' />
                </button>
              </div>
            </div>

            <section aria-labelledby='products-heading' className='pt-6 pb-24'>
              <h2 id='products-heading' className='sr-only'>
                Products
              </h2>

              <div className='grid grid-cols-1 gap-x-8 gap-y-10 justify-start items-start lg:grid-cols-4'>
                {/* Filters */}
                <form className='hidden sticky top-32 lg:block'>
                  <h3 className='sr-only'>Categories</h3>
                  <ul
                    role='list'
                    className='pb-6 space-y-4 text-sm font-medium text-gray-900 border-b border-gray-200'
                  >
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href}>{category.name}</a>
                      </li>
                    ))}
                  </ul>

                  {filters.map((section) => (
                    <Disclosure
                      as='div'
                      key={section.id}
                      className='py-6 border-b border-gray-200'
                    >
                      {({ open }) => (
                        <>
                          <h3 className='flow-root -my-3'>
                            <Disclosure.Button className='flex justify-between items-center py-3 w-full text-sm text-gray-400 bg-white hover:text-gray-500'>
                              <span className='font-medium text-gray-900'>
                                {section.name}
                              </span>
                              <span className='flex items-center ml-6'>
                                {open ? (
                                  <HiMinusSm
                                    className='w-5 h-5'
                                    aria-hidden='true'
                                  />
                                ) : (
                                  <HiPlusSm
                                    className='w-5 h-5'
                                    aria-hidden='true'
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className='pt-6'>
                            <div className='space-y-4'>
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className='flex items-center'
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type='checkbox'
                                    defaultChecked={option.checked}
                                    className='w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500'
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className='ml-3 text-sm text-gray-600'
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>

                <div className='grid col-span-3 gap-4'>
                  {data.map((item: ScheduleType) => (
                    <ScheduleCard schedule={item} key={item.id_schedule} />
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await getScheduleData();
  if (!res.isSuccess) {
    return {
      notFound: true,
    };
  }
  return { props: { data: res.data } };
}

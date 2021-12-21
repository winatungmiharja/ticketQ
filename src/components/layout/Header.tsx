/* eslint-disable @next/next/no-img-element */
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, useState } from 'react';
import { HiOutlineMenu, HiOutlineSearch, HiOutlineX } from 'react-icons/hi';

import CustomLink from '../links/CustomLink';

const userNavigation = {
  categories: [],
  pages: [
    { name: 'Beli Tiket', href: '/user/tiket' },
    { name: 'Profil', href: '/user/profile' },
    { name: 'Data', href: '/user/data' },
    { name: 'Transaksi', href: '/user/transaksi' },
  ],
};

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Lihat perjalanan',
      featured: [
        {
          name: 'Kota Favorit',
          href: '#',
          imageSrc: '/images/results/1.jpg',
          imageAlt: 'Jambi',
        },
        {
          name: 'Surabaya',
          href: '#',
          imageSrc: '/images/results/3.jpg',
          imageAlt: 'surabaya',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Pulau',
          items: [
            { href: '#Denpasar', name: 'Denpasar' },
            { href: '#Kalimantan', name: 'Kalimantan' },
            { href: '#Sulawesi', name: 'Sulawesi' },
            { href: '#Papua', name: 'Papua' },
            { href: '#Jawa', name: 'Jawa' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Customer', href: '/user/customer' },
    { name: 'Kontak', href: '#' },
  ],
};

type HeaderType = {
  showLogin?: boolean;
  showSignin?: boolean;
};
export default function Header({
  showLogin = true,
  showSignin = true,
}: HeaderType) {
  const navigationData =
    !showLogin && !showSignin ? userNavigation : navigation;
  const [open, setOpen] = useState(false);
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='flex fixed inset-0 z-40 lg:hidden'
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
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
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='flex overflow-y-auto relative flex-col pb-12 w-full max-w-xs bg-white shadow-xl'>
              <div className='flex px-4 pt-5 pb-2'>
                <button
                  type='button'
                  className='inline-flex justify-center items-center p-2 -m-2 text-gray-400 rounded-md'
                  onClick={() => setOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <HiOutlineX className='w-6 h-6' aria-hidden='true' />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as='div' className='mt-2'>
                <div className='border-b border-gray-200'>
                  <Tab.List className='flex px-4 -mb-px space-x-8'>
                    {navigationData.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          clsx(
                            selected
                              ? 'text-primary-600 border-primary-600'
                              : 'text-gray-900 border-transparent',
                            'flex-1 px-1 py-4 text-base font-medium whitespace-nowrap border-b-2'
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigationData.categories.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className='px-4 pt-10 pb-8 space-y-10'
                    >
                      <div className='grid grid-cols-2 gap-x-4'>
                        {category.featured.map((item) => (
                          <div
                            key={item.name}
                            className='group relative text-sm'
                          >
                            <div className='overflow-hidden bg-gray-100 rounded-lg group-hover:opacity-75'>
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className='aspect-square'
                              />
                            </div>
                            <a
                              href={item.href}
                              className='block mt-6 font-medium text-gray-900'
                            >
                              <span
                                className='absolute inset-0 z-10'
                                aria-hidden='true'
                              />
                              {item.name}
                            </a>
                            <p aria-hidden='true' className='mt-1'>
                              Beli tiket
                            </p>
                          </div>
                        ))}
                      </div>
                      {category.sections.map((section) => (
                        <div key={section.name}>
                          <p
                            id={`${category.id}-${section.id}-heading-mobile`}
                            className='font-medium text-gray-900'
                          >
                            {section.name}
                          </p>
                          <ul
                            role='list'
                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                            className='flex flex-col mt-6 space-y-6'
                          >
                            {section.items.map((item) => (
                              <li key={item.name} className='flow-root'>
                                <a
                                  href={item.href}
                                  className='block p-2 -m-2 text-gray-500'
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className='px-4 py-6 space-y-6 border-t border-gray-200'>
                {navigationData.pages.map((page) => (
                  <div key={page.name} className='flow-root'>
                    <a
                      href={page.href}
                      className='block p-2 -m-2 font-medium text-gray-900'
                    >
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>

              <div className='px-4 py-6 space-y-6 border-t border-gray-200'>
                {showLogin && (
                  <div className='flow-root'>
                    <CustomLink href='/login'>Masuk</CustomLink>
                  </div>
                )}
                {showSignin && (
                  <div className='flow-root'>
                    <CustomLink href='/register'>Daftar</CustomLink>
                  </div>
                )}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className='overflow-hidden sticky top-0 z-40 bg-white'>
        {/* Top navigation */}
        <nav aria-label='Top' className='relative z-20'>
          <div className='layout'>
            <div className='flex items-center h-16'>
              <button
                type='button'
                className='p-2 text-gray-400 rounded-md lg:hidden'
                onClick={() => setOpen(true)}
              >
                <span className='sr-only'>Open menu</span>
                <HiOutlineMenu className='w-6 h-6' aria-hidden='true' />
              </button>

              {/* Logo */}
              <div className='hidden ml-4 md:block lg:ml-0'>
                <a href='#'>
                  <span className='sr-only'>TicketQ</span>
                  <img
                    className='w-auto h-8'
                    src='/favicon/large-og.png'
                    alt=''
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className='hidden lg:block lg:self-stretch lg:ml-8'>
                <div className='flex space-x-8 h-full'>
                  {navigationData.categories.map((category) => (
                    <Popover key={category.name} className='flex'>
                      {({ open }) => (
                        <>
                          <div className='flex relative'>
                            <Popover.Button
                              className={clsx(
                                open
                                  ? 'border-primary-600 text-primary-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'flex relative z-10 items-center pt-px -mb-px text-sm font-medium border-b-2 transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter='transition ease-out duration-200'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='transition ease-in duration-150'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                          >
                            <Popover.Panel className='absolute inset-x-0 top-full text-sm text-gray-500 bg-white'>
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className='absolute inset-0 top-1/2 bg-white shadow'
                                aria-hidden='true'
                              />
                              {/* Fake border when menu is open */}
                              <div
                                className='absolute inset-0 top-0 px-8 mx-auto max-w-7xl h-px'
                                aria-hidden='true'
                              >
                                <div
                                  className={clsx(
                                    open ? 'bg-gray-200' : 'bg-transparent',
                                    'w-full h-px transition-colors duration-200 ease-out'
                                  )}
                                />
                              </div>

                              <div className='relative'>
                                <div className='px-8 mx-auto max-w-7xl'>
                                  <div className='grid grid-cols-2 gap-x-8 gap-y-10 py-16'>
                                    <div className='grid grid-cols-2 col-start-2 gap-x-8'>
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className='group relative text-base sm:text-sm'
                                        >
                                          <div className='aspect-h-1 aspect-w-1 overflow-hidden bg-gray-100 rounded-lg group-hover:opacity-75'>
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className='object-cover object-center'
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className='block mt-6 font-medium text-gray-900'
                                          >
                                            <span
                                              className='absolute inset-0 z-10'
                                              aria-hidden='true'
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden='true'
                                            className='mt-1'
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className='grid grid-cols-3 row-start-1 gap-x-8 gap-y-10 text-sm'>
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className='font-medium text-gray-900'
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role='list'
                                            aria-labelledby={`${section.name}-heading`}
                                            className='mt-6 space-y-6 sm:mt-4 sm:space-y-4'
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className='flex'
                                              >
                                                <a
                                                  href={item.href}
                                                  className='hover:text-gray-800'
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigationData.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800'
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>
              <div className='flex items-center ml-auto'>
                <div className='hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-6'>
                  {showLogin && <CustomLink href='/login'>Masuk</CustomLink>}
                  {showLogin && showSignin && (
                    <span className='w-px h-6 bg-gray-200' aria-hidden='true' />
                  )}
                  {showSignin && (
                    <CustomLink href='/register'>Daftar</CustomLink>
                  )}
                </div>
                {/* Search */}
                <div className='flex lg:ml-6'>
                  <a href='#' className='p-2 text-gray-400 hover:text-gray-500'>
                    <span className='sr-only'>Search</span>
                    <HiOutlineSearch className='w-6 h-6' aria-hidden='true' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

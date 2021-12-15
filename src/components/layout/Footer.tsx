import * as React from 'react';

const footerNavigation = {
  perjalanan: [
    { name: 'Beli Tiket', href: '#' },
    { name: 'Histori Tiket', href: '#' },
    { name: 'Semua Tiket', href: '#' },
  ],
  account: [
    { name: 'Profil', href: '#' },
    { name: 'Pengembalian', href: '#' },
    { name: 'Diskon', href: '#' },
  ],
};
export default function Footer() {
  return (
    <footer aria-labelledby='footer-heading' className='bg-white'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='layout'>
        <div className='py-20 xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='grid gap-8 xl:col-span-2'>
            <div className='space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0'>
              <div>
                <h3 className='text-sm font-medium text-gray-900'>
                  Perjalanan
                </h3>
                <ul role='list' className='mt-6 space-y-6'>
                  {footerNavigation.perjalanan.map((item) => (
                    <li key={item.name} className='text-sm'>
                      <a
                        href={item.href}
                        className='text-gray-500 hover:text-gray-600'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className='text-sm font-medium text-gray-900'>Akun</h3>
                <ul role='list' className='mt-6 space-y-6'>
                  {footerNavigation.account.map((item) => (
                    <li key={item.name} className='text-sm'>
                      <a
                        href={item.href}
                        className='text-gray-500 hover:text-gray-600'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='mt-16 md:mt-16 xl:mt-0'>
            <h3 className='text-sm font-medium text-gray-900'>
              Daftar Sekarang
            </h3>
            <p className='mt-6 text-sm text-gray-500'>
              Nikmati kepuasan berbelanja tiket secara online di TicketQ
            </p>
            <form className='flex mt-2 sm:max-w-md'>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                type='text'
                autoComplete='email'
                required
                className='px-4 py-2 w-full min-w-0 text-base placeholder-gray-500 text-primary-500 bg-white rounded-md border border-gray-300 shadow-sm appearance-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none'
              />
              <div className='flex-shrink-0 ml-4'>
                <button
                  type='submit'
                  className='flex justify-center items-center px-4 py-2 w-full text-base font-medium text-white bg-primary-600 rounded-md border border-transparent shadow-sm hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:outline-none'
                >
                  Daftar
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className='py-10 border-t border-gray-200'>
          <p className='text-sm text-gray-500'>
            Copyright &copy; 2021 TicketQ.
          </p>
        </div>
      </div>
    </footer>
  );
}

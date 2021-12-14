import * as React from 'react';

const footerNavigation = {
  shop: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  account: [
    { name: 'Manage Account', href: '#' },
    { name: 'Returns & Exchanges', href: '#' },
    { name: 'Redeem a Gift Card', href: '#' },
  ],
  connect: [
    { name: 'Contact Us', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Pinterest', href: '#' },
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
          <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
            <div className='space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0'>
              <div>
                <h3 className='text-sm font-medium text-gray-900'>Shop</h3>
                <ul role='list' className='mt-6 space-y-6'>
                  {footerNavigation.shop.map((item) => (
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
                <h3 className='text-sm font-medium text-gray-900'>Company</h3>
                <ul role='list' className='mt-6 space-y-6'>
                  {footerNavigation.company.map((item) => (
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
            <div className='space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0'>
              <div>
                <h3 className='text-sm font-medium text-gray-900'>Account</h3>
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
              <div>
                <h3 className='text-sm font-medium text-gray-900'>Connect</h3>
                <ul role='list' className='mt-6 space-y-6'>
                  {footerNavigation.connect.map((item) => (
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
              Sign up for our newsletter
            </h3>
            <p className='mt-6 text-sm text-gray-500'>
              The latest deals and savings, sent to your inbox weekly.
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
                className='px-4 py-2 w-full min-w-0 text-base placeholder-gray-500 text-indigo-500 bg-white rounded-md border border-gray-300 shadow-sm appearance-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none'
              />
              <div className='flex-shrink-0 ml-4'>
                <button
                  type='submit'
                  className='flex justify-center items-center px-4 py-2 w-full text-base font-medium text-white bg-indigo-600 rounded-md border border-transparent shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none'
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className='py-10 border-t border-gray-200'>
          <p className='text-sm text-gray-500'>
            Copyright &copy; 2021 Clothing Company Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

const favorites = [
  {
    id: 1,
    name: 'Black Basic Tee',
    price: '$32',
    href: '#',
    imageSrc: '/images/results/5.jpg',
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 2,
    name: 'Off-White Basic Tee',
    price: '$32',
    href: '#',
    imageSrc: '/images/results/6.jpg',
    imageAlt: "Model wearing women's off-white cotton crewneck tee.",
  },
  {
    id: 3,
    name: 'Mountains Artwork Tee',
    price: '$36',
    href: '#',
    imageSrc: '/images/results/3.jpg',
    imageAlt:
      "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
  },
];
export default function FavoritesSection() {
  return (
    <section aria-labelledby='favorites-heading'>
      <div className='layout'>
        <div className='sm:flex sm:justify-between sm:items-baseline'>
          <h2
            id='favorites-heading'
            className='text-2xl font-extrabold tracking-tight text-gray-900'
          >
            Our Favorites
          </h2>
          <a
            href='#'
            className='hidden text-sm font-semibold text-indigo-600 sm:block hover:text-indigo-500'
          >
            Browse all favorites<span aria-hidden='true'> &rarr;</span>
          </a>
        </div>

        <div className='grid grid-cols-1 gap-y-10 mt-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8'>
          {favorites.map((favorite) => (
            <div key={favorite.id} className='group relative'>
              <div className='overflow-hidden w-full rounded-lg sm:aspect-h-3 sm:aspect-w-2 sm:h-auto group-hover:opacity-75'>
                <img
                  src={favorite.imageSrc}
                  alt={favorite.imageAlt}
                  className='aspect-square object-cover object-center'
                />
              </div>
              <h3 className='mt-4 text-base font-semibold text-gray-900'>
                <a href={favorite.href}>
                  <span className='absolute inset-0' />
                  {favorite.name}
                </a>
              </h3>
              <p className='mt-1 text-sm text-gray-500'>{favorite.price}</p>
            </div>
          ))}
        </div>

        <div className='mt-6 sm:hidden'>
          <a
            href='#'
            className='block text-sm font-semibold text-indigo-600 hover:text-indigo-500'
          >
            Browse all favorites<span aria-hidden='true'> &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

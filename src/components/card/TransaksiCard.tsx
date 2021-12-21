/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa';

function formatDate(val: string) {
  const date = new Date(val);

  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

function formatTime(val: string) {
  const date = new Date(val);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? 0 + minutes : minutes;
  const strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

export default function TransaksiCard({ transaksi }: { transaksi: any }) {
  return (
    <div className='w-full bg-white rounded-lg border border-gray-100 shadow-sm hover:bg-gray-100 hover:border-primary-500'>
      <div className='flex gap-4 p-4 divide-x-2'>
        <div className=''>
          <p>{transaksi.company_plane}</p>
          <p className='text-xs text-gray-700'>{transaksi.type_plane}</p>
        </div>
        <div className='pl-4'>
          <div className='flex gap-4 items-center w-full'>
            <div className='flex gap-2 items-center'>
              <FaPlaneDeparture className='text-primary-700' size={20} />
              <div className='flex flex-col'>
                <p>{transaksi.start_city_route}</p>
                <p className='text-xs text-gray-700'>
                  {transaksi.start_airport_route}
                </p>
              </div>
            </div>

            <BsArrowRight />
            <div className='flex gap-2 items-center'>
              <FaPlaneArrival className='text-primary-700' size={20} />
              <div className='flex flex-col'>
                <p>{transaksi.destination_city_route}</p>
                <p className='text-xs text-gray-700 whitespace-nowrap'>
                  {transaksi.destination_airport_route}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between p-4 pt-0'>
        <div className='flex gap-4'>
          <div>
            <p>{formatTime(transaksi.departure_schedule)}</p>
            <p className='text-xs text-gray-700'>
              {formatDate(transaksi.departure_schedule)}
            </p>
          </div>
          -
          <div>
            <p>{formatTime(transaksi.arrival_schedule)}</p>
            <p className='text-xs text-gray-700'>
              {formatDate(transaksi.arrival_schedule)}
            </p>
          </div>
        </div>

        <p className='text-lg font-medium'>
          IDR{' '}
          {transaksi.price_transactions
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
      </div>
      <div className='p-4 pt-0'>
        <div className='grid grid-cols-2 gap-2'>
          <p className='text-xs text-gray-700'>Pembayaran dilakukan pada</p>
          <div>
            <p className='text-xs text-gray-700'>
              {formatDate(transaksi.booking_date)}
            </p>
          </div>
          <p className='text-xs text-gray-700'>Data penumpang</p>
          <div className='grid grid-cols-2'>
            <p className='text-xs text-gray-700'>
              {' '}
              {transaksi.firstname_customer} {transaksi.lastname_customer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

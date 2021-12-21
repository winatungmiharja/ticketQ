import React from 'react';

import { getCustomerData } from '@/lib/fetch';
import { CustomerDataType } from '@/lib/type';

import useUserAuth from '@/components/store/authUser';
import useCustomer from '@/components/store/customer';

export default function CustomerSection() {
  const [filter, setFilter] = React.useState<string>('');
  const customerStore = useCustomer();
  const store = useUserAuth();
  const fetchCustomerData = async () => {
    const resData = await getCustomerData(store.user.id);
    if (resData.isSuccess) {
      customerStore.setCustomer(resData.data);
    }
  };
  React.useEffect(() => {
    fetchCustomerData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterData = (data: CustomerDataType[], match: string) => {
    if (match.length === 0) return data;
    else
      return data.filter(
        (item) =>
          item.firstname_customer.toLowerCase().includes(match) ||
          item.lastname_customer.toLowerCase().includes(match)
      );
  };

  return (
    <div className='overflow-hidden md:min-h-main'>
      <div className='flex flex-col justify-center w-full'>
        <div className='flex flex-row gap-4 justify-between items-center'>
          <input
            onChange={(e) => setFilter(e.target.value)}
            id='filter'
            className='placeholder:text-gray-800 placeholder:text-xs px-2 py-1 bg-gray-200 rounded-md'
            placeholder='cari berdasarkan nama'
          />
        </div>

        <hr className='my-4 border-primary-200' />

        {filter.length > 0 && (
          <p>
            Hasil pencarian untuk{' '}
            <span className='text-primary-500'>{`'${filter}'`}</span>
          </p>
        )}
        {filterData(customerStore.customers, filter).length <= 0 ? (
          <p>Belum ada data</p>
        ) : (
          <div className='flex flex-col'>
            <div className='overflow-x-scroll -my-2 sm:-mx-6 lg:-mx-8'>
              <div className='inline-block py-2 min-w-full align-middle sm:px-6 lg:px-8'>
                <div className='border-b border-gray-200 shadow sm:rounded-lg'>
                  <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-gray-50'>
                      <tr>
                        <th
                          scope='col'
                          className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                        >
                          Identitas
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                        >
                          Status
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                        >
                          Kategori
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                        >
                          Alamat
                        </th>
                      </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>
                      {filterData(customerStore.customers, filter).map(
                        (person, i) => (
                          <tr key={i}>
                            <td className='px-6 py-4 whitespace-nowrap'>
                              <div className='flex items-center'>
                                <div className='ml-4'>
                                  <div className='text-sm font-medium text-gray-900'>
                                    {person.firstname_customer}{' '}
                                    {person.lastname_customer}
                                  </div>
                                  <div className='text-sm text-gray-500'>
                                    {person.email_contact}
                                    <br />
                                    {person.telp_contact}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap'>
                              <div className='text-sm text-gray-900'>
                                {person.gender_customer === 'L'
                                  ? 'Pria'
                                  : 'Wanita'}
                              </div>
                              <div className='text-sm text-gray-500'>
                                {person.nationality_customer}
                              </div>
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap'>
                              <span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>
                                {person.type_age_customer === 't'
                                  ? 'Dewasa'
                                  : 'Anak-anak'}
                              </span>
                            </td>
                            <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                              {person.address_customer}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

import { getCustomerData, registerCustomer } from '@/lib/fetch';
import { CountryDataType, CustomerDataType } from '@/lib/type';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import SelectInput from '@/components/input/SelectInput';
import useUserAuth from '@/components/store/authUser';
import useCustomer from '@/components/store/customer';

const customerValues = [
  {
    title: 'Dewasa',
    value: 'true',
  },
  {
    title: 'Anak-anak',
    value: 'false',
  },
];

const genderValues = [
  {
    title: 'Wanita',
    value: 'P',
  },
  {
    title: 'Pria',
    value: 'L',
  },
];

export default function NewCustomerSection({
  data,
}: {
  data: CountryDataType[];
}) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [error, setError] = React.useState<null | string>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<ReactNode>('Inputkan data baru');
  const methods = useForm<CustomerDataType>({
    defaultValues: {
      firstname_customer: '',
      lastname_customer: '',
      address_customer: '',
      type_age_customer: 'true',
      gender_customer: 'L',
      nationality_customer: '',
      id_account: '',
      id_country: '1',
      email_contact: '',
      telp_contact: '',
    },
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit } = methods;
  const store = useUserAuth();
  const customerStore = useCustomer();

  const fetchCustomerData = async () => {
    const resData = await getCustomerData(store.user.id);
    if (resData.isSuccess) {
      customerStore.setCustomer(resData.data);
    }
  };

  const onSubmit = async (data: CustomerDataType) => {
    setError(null);
    setLoading(true);
    const resData = await registerCustomer(data, store.user);

    if (resData.isSuccess) {
      setLoading(false);
      setMessage('Data berhasil ditambahkan!');
      setIsOpen(false);
      setTimeout(() => {
        setMessage('Inputkan data baru');
      }, 3000);
      fetchCustomerData();
    } else {
      setError(resData.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='flex justify-between items-center py-4'>
        <p>Tambah Customer baru</p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='shadow-primary-100 p-1 text-white bg-primary-600 rounded-full shadow-sm hover:bg-primary-300 hover:shadow-md'
        >
          {!isOpen ? (
            <AiOutlinePlusCircle size={25} />
          ) : (
            <AiOutlineMinusCircle size={25} />
          )}
        </button>
      </div>
      {isOpen && (
        <div className='p-8 bg-white rounded-lg shadow sm:px-10'>
          <FormProvider {...methods}>
            <form
              className='space-y-6'
              onSubmit={handleSubmit((data) => onSubmit(data))}
            >
              <h3 className=''>{message}</h3>
              <hr className='text-gray-200' />
              <div className='grid gap-6 md:grid-cols-2 md:gap-2'>
                <Input
                  id={'firstname_customer'}
                  label={'Nama depan'}
                  message='nama setidaknya memiliki lebih dari 2 karakter'
                  validation={{
                    required: true,
                    pattern: /[a-zA-Z][a-zA-Z ]{2,}$/g,
                  }}
                />
                <Input
                  id={'lastname_customer'}
                  label={'Nama belakang'}
                  message='nama setidaknya memiliki lebih dari 2 karakter'
                  validation={{
                    required: true,
                    pattern: /[a-zA-Z][a-zA-Z ]{2,}$/g,
                  }}
                />
              </div>
              <Input
                message='email tidak valid'
                placeholder='masukkan email'
                id='email_contact'
                label={'Email'}
                validation={{
                  required: true,
                  pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                }}
              />
              <div className='grid gap-6 md:grid-cols-2 md:gap-2'>
                <SelectInput
                  id='id_country'
                  label='Kode Negara'
                  validation={{ required: true }}
                >
                  {data.map((item) => (
                    <option value={item.id_country} key={item.id_country}>
                      {`${item.name_country} (+${item.phonecode_country})`}
                    </option>
                  ))}
                </SelectInput>
                <Input
                  type='number'
                  id={'telp_contact'}
                  label={'No.Hp'}
                  validation={{
                    required: true,
                    pattern: /^08\d{9,10}$/g,
                  }}
                />
              </div>
              <Input
                id={'address_customer'}
                label={'Alamat'}
                validation={{
                  required: true,
                }}
              />
              <Input
                id={'nationality_customer'}
                label={'Kewarganegaraan'}
                validation={{
                  required: true,
                  pattern: /[a-zA-Z][a-zA-Z ]{2,}$/g,
                }}
              />
              <div className='grid grid-cols-2 gap-2'>
                <SelectInput
                  id='type_age_customer'
                  label='Jenis Penumpang'
                  validation={{ required: true }}
                >
                  {customerValues.map((item) => (
                    <option value={item.value} key={item.value}>
                      {item.title}
                    </option>
                  ))}
                </SelectInput>
                <SelectInput
                  id='gender_customer'
                  label='Gender Penumpang'
                  validation={{ required: true }}
                >
                  {genderValues.map((item) => (
                    <option value={item.value} key={item.value}>
                      {item.title}
                    </option>
                  ))}
                </SelectInput>
              </div>

              <div>
                <Button
                  type='submit'
                  isLoading={loading}
                  variant='outline'
                  className='bg-gray-800'
                >
                  Tambahkan Customer Baru{' '}
                  <AiOutlinePlusCircle size={20} className='my-auto ml-auto' />
                </Button>
                {error && (
                  <p className='mt-2 text-xs text-center text-primary-800'>
                    {error}
                  </p>
                )}
              </div>
            </form>
          </FormProvider>
        </div>
      )}
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { getCustomerData, postTransaction } from '@/lib/fetch';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import useUserAuth from '@/components/store/authUser';
import useCustomer from '@/components/store/customer';

type CheckoutType = {
  id_schedule: string;
  id_customer: [];
};

export default function AddCustomerSection({
  id,
  setModalOpen,
}: {
  id: string;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [message, setMessage] = React.useState<null | string>(null);
  const [error, setError] = React.useState<null | string>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
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

  const methods = useForm<CheckoutType>({
    defaultValues: {
      id_schedule: id,
      id_customer: [],
    },
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit, watch } = methods;

  const makeTransaction = async (data: CheckoutType) => {
    let response: any[] = [];
    let isError = false;
    for (let i = 0; i < data.id_customer.length; i++) {
      const currRes = await postTransaction(
        data.id_schedule,
        data.id_customer[i]
      );
      if (currRes.isSuccess) {
        response = [...response, currRes.data[0]];
      } else {
        response = [...response, currRes.message];
        isError = true;
      }
    }
    return { data: await response, success: !isError, message: '' };
  };
  const onSubmit = async (data: CheckoutType) => {
    setLoading(true);
    const res = await makeTransaction(data);
    if (res.success) {
      setMessage('Sukses melakukan semua transaksi');
      setLoading(false);
      setModalOpen(true);
    } else {
      setError('Terdapat beberapa transaksi yang gagal');
      setLoading(false);
    }
  };

  return (
    <div className=''>
      <div className='flex flex-col justify-center w-full'>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit((data) => onSubmit(data))}
            className='flex flex-col flex-1 gap-2'
          >
            <p>Tambahkan Penumpang</p>
            {customerStore.customers.map((person, i) => (
              <Input
                key={i}
                type='checkbox'
                id={'id_customer'}
                label={`${person.firstname_customer} ${
                  person.lastname_customer
                } (${person.gender_customer} - ${
                  person.type_age_customer === 't' ? 'Dewasa' : 'Anak-anak'
                })`}
                value={person.id_customer}
                checkId={`${person.firstname_customer}${person.id_customer}`}
              />
            ))}
            <Button
              type='submit'
              isLoading={loading}
              disabled={watch('id_customer').length <= 0}
              className='mt-4'
            >
              Konfirmasi Pembayaran
            </Button>
            {error && (
              <p className='mt-1 text-xs text-center text-red-500'>{error}</p>
            )}
            {message && (
              <p className='mt-1 text-xs text-center text-green-500'>
                {message}
              </p>
            )}
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

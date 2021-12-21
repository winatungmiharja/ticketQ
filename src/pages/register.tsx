/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { getCountryData, registerUser } from '@/lib/fetch';
import { CountryDataType, RegisterUserType } from '@/lib/type';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import InputPassword from '@/components/input/InputPassword';
import SelectInput from '@/components/input/SelectInput';
import Layout from '@/components/layout/Layout';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';
import { saveUserToken } from '@/components/store/localStorage';

export default function LoginPage({ data }: { data: CountryDataType[] }) {
  const router = useRouter();
  const [error, setError] = React.useState<null | string>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const methods = useForm<RegisterUserType>({
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
      country: '1',
      telp: '',
    },
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit } = methods;

  const onSubmit = async (data: RegisterUserType) => {
    setError(null);
    setLoading(true);
    const resData = await registerUser(data);

    if (resData.isSuccess) {
      saveUserToken(resData.data.id_session_account);
      router.push('/user/home');
    } else {
      setError(resData.message);
      setLoading(false);
    }
  };
  return (
    <Layout showSignin={false} showLogin={true}>
      <Seo templateTitle='Login' />

      <main>
        <section className='bg-banner min-h-main bg-fixed bg-center bg-no-repeat bg-cover'>
          <div className='layout py-8 md:py-16'>
            <div className='layout max-w-md'>
              <img
                className='mx-auto w-auto h-16'
                src='/favicon/large-og.png'
                alt='logo'
              />
              <h2 className='mt-4 text-3xl font-extrabold text-center text-gray-900'>
                Buatlah akun baru
              </h2>
              <p className='text-sm text-center text-gray-600'>
                Dan{' '}
                <span className='font-medium text-primary-500'>
                  mulailah berjelajah
                </span>
              </p>
            </div>
            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
              <div className='px-4 py-8 bg-white rounded-lg shadow sm:px-10'>
                <FormProvider {...methods}>
                  <form
                    className='space-y-6'
                    onSubmit={handleSubmit((data) => onSubmit(data))}
                  >
                    <Input
                      placeholder='masukkan nama'
                      id={'name'}
                      label={'Nama'}
                      message='nama setidaknya memiliki lebih dari 2 karakter'
                      validation={{
                        required: true,
                        pattern: /[a-zA-Z][a-zA-Z ]{2,}$/g,
                      }}
                    />
                    <Input
                      placeholder='contoh: John_Doe'
                      message='username harus memiliki 8-20 karakter huruf tanpa . dan _ di awal dan di akhir'
                      id={'username'}
                      label={'Username'}
                      validation={{
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/,
                      }}
                    />
                    <Input
                      message='email tidak valid'
                      placeholder='masukkan email'
                      id={'email'}
                      label={'Email'}
                      validation={{
                        required: true,
                        pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      }}
                    />
                    <InputPassword
                      placeholder='masukkan password'
                      type='password'
                      id={'password'}
                      label={'Password'}
                      messages='password setidaknya terdiri atas 8 karakter dengan gabungan huruf kapital dan huruf kecil'
                      validation={{
                        required: true,
                        pattern: /^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z]).*$/g,
                      }}
                    />
                    <div className='grid grid-cols-2 gap-2'>
                      <SelectInput
                        id='country'
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
                        id={'telp'}
                        label={'No.Hp'}
                        validation={{
                          required: true,
                          pattern: /^08\d{9,10}$/g,
                        }}
                      />
                    </div>
                    <div>
                      <Button type='submit' isLoading={loading}>
                        Daftar
                      </Button>
                      {error && (
                        <p className='mt-2 text-xs text-center text-primary-800'>
                          {error}
                        </p>
                      )}
                    </div>
                  </form>
                </FormProvider>
                <hr className='mt-8 text-gray-300' />
                <div className='flex justify-between mt-8'>
                  <div className='text-sm'>
                    <p className='font-medium text-primary-600'>
                      Sudah memiliki akun?
                    </p>
                  </div>
                  <div className='text-center'>
                    <CustomLink href='/login'>Masuk</CustomLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await getCountryData();

  if (!res.isSuccess) {
    return {
      notFound: true,
    };
  }

  return { props: { data: res.data } };
}

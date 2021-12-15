/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { loginUser } from '@/lib/fetch';
import { LoginUserType } from '@/lib/type';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import InputPassword from '@/components/input/InputPassword';
import Layout from '@/components/layout/Layout';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';
import { saveUserToken } from '@/components/store/localStorage';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = React.useState<null | string>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const methods = useForm<LoginUserType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit } = methods;

  const onSubmit = async (data: LoginUserType) => {
    setError(null);
    setLoading(true);
    const resData = await loginUser(data);
    if (resData.isSuccess) {
      saveUserToken(resData.data.id_session_account);
      router.push('/user/home');
    } else {
      setError(resData.message);
      setLoading(false);
    }
  };
  return (
    <Layout showSignin={true} showLogin={false}>
      <Seo templateTitle='Login' />

      <main>
        <section className='bg-outdoor min-h-main bg-fixed bg-left bg-no-repeat bg-cover'>
          <div className='layout py-8 md:py-16'>
            <div className='layout max-w-md'>
              <img
                className='mx-auto w-auto h-16'
                src='/favicon/large-og.png'
                alt='logo'
              />
              <h2 className='mt-4 text-3xl font-extrabold text-center text-gray-900'>
                Masuk ke akun kamu
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
                      placeholder='masukkan email'
                      id={'email'}
                      label={'Email'}
                      validation={{ required: true }}
                    />
                    <InputPassword
                      placeholder='masukkan password'
                      type='password'
                      id={'password'}
                      label={'Password'}
                      messages='password harus terdiri atas 8 karakter dengan gabungan huruf kapital dan huruf kecil'
                      validation={{
                        required: true,
                      }}
                    />
                    <div>
                      <Button type='submit' isLoading={loading}>
                        Masuk
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
                      Belum memiliki akun?
                    </p>
                  </div>
                  <div className='text-center'>
                    <CustomLink href='/register'>Daftar Akun</CustomLink>
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

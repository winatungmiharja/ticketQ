/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import * as React from 'react';
import { ImSpinner8 } from 'react-icons/im';

import { sessionUser } from '@/lib/fetch';
import { SessionUserType } from '@/lib/type';

import useUserAuth from '../store/authUser';
import { saveUserToken } from '../store/localStorage';

export default function Auth({ children }: { children: React.ReactNode }) {
  const [preload, setPreload] = React.useState(true);
  const router = useRouter();
  const userStore = useUserAuth();

  const path = router.pathname;

  const checkUserSession = async (token: string) => {
    const resData = await sessionUser(token);

    if (resData.isSuccess) {
      const newData: SessionUserType = resData.data[0];
      saveUserToken(resData.data[0].id_session_account);
      userStore.setSessionUser(newData);
      setPreload(false);
      return true;
    } else {
      return false;
    }
  };

  // const checkAdminSession = async (token: string) => {
  //   const resData = await sessionAdmin(token);
  //   if (resData.isSuccess) {
  //     const newData = resData.data.data;
  //     saveUserToken(resData.data.data.id_session_admin);
  //     adminStore.setSessionAdmin(newData);
  //     setPreload(false);
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  const checkAuthentication = async (local: string | null) => {
    if (local === null) redirectToLogin();
    else {
      // const isAdmin = await checkAdminSession(JSON.parse(local));
      const isAdmin = false;
      const isUser = await checkUserSession(JSON.parse(local));

      if (path.includes('/admin') || path.includes('/user')) {
        isUser ? setPreload(false) : redirectToLogin();
      } else {
        if (isAdmin) router.push('/admin/home');
        else if (isUser) router.push('/user/tiket');
        else setPreload(false);
      }
    }
  };

  const redirectToLogin = () => {
    router.push('/login');
  };

  React.useEffect(() => {
    const saved = localStorage.getItem('user_token');
    if (
      saved === null &&
      !(path.includes('/admin') || path.includes('/user'))
    ) {
      setPreload(false);
    } else {
      checkAuthentication(saved);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {preload ? (
        <div className='bg-outdoor flex flex-col justify-center items-center w-full h-screen bg-white bg-center bg-no-repeat bg-cover'>
          <ImSpinner8 className='animate-spin' size={35} />
          <h4 className='mt-2 text-lg animate-bounce'>Loading</h4>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
}

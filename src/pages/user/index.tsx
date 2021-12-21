import Router from 'next/router';
import * as React from 'react';
import { ImSpinner8 } from 'react-icons/im';

export default function IndexPage() {
  React.useEffect(() => {
    Router.push('/user/tiket');
  }, []);
  return (
    <div className='bg-outdoor flex flex-col justify-center items-center w-full h-screen bg-white bg-center bg-no-repeat bg-cover'>
      <ImSpinner8 className='animate-spin' size={35} />
      <h4 className='mt-2 text-lg animate-bounce'>Loading</h4>
    </div>
  );
}

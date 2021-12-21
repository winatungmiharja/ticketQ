/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, Transition } from '@headlessui/react';
import * as React from 'react';

import { getTransactionDataById } from '@/lib/fetch';

import TransaksiCard from '@/components/card/TransaksiCard';
import useUserAuth from '@/components/store/authUser';

type ModalType = {
  isModalOpen: boolean;
  schedule: string;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function TransactionModal({
  schedule,
  isModalOpen,
  setModalOpen,
}: ModalType) {
  const [transaction, setTransaction] = React.useState<string | []>('');
  const store = useUserAuth();
  const fetchTransactionData = async () => {
    const res = await getTransactionDataById(store.user.id, schedule);
    if (res.success) {
      setTransaction(res.data);
    } else {
      setTransaction(res.message);
    }
  };
  React.useEffect(() => {
    fetchTransactionData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Transition appear show={isModalOpen} as={React.Fragment}>
      <Dialog
        as='div'
        className='bg-black/25 overflow-y-auto fixed inset-0 z-50'
        onClose={() => setModalOpen(false)}
      >
        <div className='px-4 min-h-screen text-center'>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='inline-block h-screen align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div className='inline-block overflow-hidden p-6 my-8 w-full max-w-2xl text-left align-middle bg-gray-100 rounded-2xl shadow-xl transition-all transform'>
              {/* <Dialog.Title
                as='h3'
                className='font-medium leading-6 text-gray-900 text-lg'
              >
                Transaksi berhasil dilakukan!
              </Dialog.Title> */}
              <div className='mt-2'>
                {typeof transaction === 'string' ? (
                  <p className='text-sm text-gray-500'>
                    Data pembayaran tidak kami temukan
                  </p>
                ) : (
                  <>
                    {transaction.map(
                      (item: any, i: React.Key | null | undefined) => (
                        <TransaksiCard transaksi={item} key={i} />
                      )
                    )}
                  </>
                )}
              </div>

              <div className='mt-4'>
                <button
                  type='button'
                  className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 rounded-md border border-transparent hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                  onClick={() => setModalOpen(false)}
                >
                  Got it, thanks!
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

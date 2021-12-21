import * as React from 'react';

import { getTransactionData } from '@/lib/fetch';

import TransaksiCard from '@/components/card/TransaksiCard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import useUserAuth from '@/components/store/authUser';

export default function TransaksiPage() {
  const store = useUserAuth();
  const [transaction, setTransaction] = React.useState([]);

  const fetchTransaction = async () => {
    const res = await getTransactionData(store.user.id);
    if (res.isSuccess) {
      setTransaction(res.data);
    }
  };
  React.useEffect(() => {
    fetchTransaction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout showLogin={false} showSignin={false}>
      <Seo templateTitle='Transaksi' />

      <main>
        <section className=''>
          <div className='layout py-20 min-h-screen'>
            <h1>Data Transaksi</h1>

            {transaction.map((item, i) => (
              <TransaksiCard transaksi={item} key={i} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

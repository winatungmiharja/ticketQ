import * as React from 'react';

import { getCountryData } from '@/lib/fetch';
import { CountryDataType } from '@/lib/type';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import CustomerSection from '@/container/user/CustomerSection';
import NewCustomerSection from '@/container/user/NewCustomerSection';

export default function DataPage({ data }: { data: CountryDataType[] }) {
  return (
    <Layout showLogin={false} showSignin={false}>
      <Seo templateTitle='Customer Data' />

      <main>
        <section className=''>
          <div className='layout py-20 min-h-screen'>
            <h1>Data Customer</h1>
            <div className='grid gap-4'>
              <NewCustomerSection data={data} />
              <CustomerSection />
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

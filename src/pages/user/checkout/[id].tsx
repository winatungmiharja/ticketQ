/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

import { getScheduleById } from '@/lib/fetch';
import { ScheduleType } from '@/lib/type';

import ScheduleReview from '@/components/card/ScheduleReview';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import AddCustomerSection from '@/container/user/AddCustomerSection';
import TransactionModal from '@/container/user/TransactionModal';

export default function TicketPage({ data }: { data: ScheduleType[] }) {
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);
  return (
    <Layout showLogin={false} showSignin={false}>
      <Seo templateTitle='Ticket Details' />

      <main>
        <section className=''>
          <div className='grid md:min-h-main md:grid-cols-2'>
            <div className='p-4 bg-primary-900 sm:p-8 md:p-16'>
              <ScheduleReview schedule={data[0]} />
            </div>
            <div className='p-4 bg-gray-100 sm:p-8 md:p-16'>
              <AddCustomerSection
                id={data[0].id_schedule}
                setModalOpen={setModalOpen}
              />
            </div>
          </div>
        </section>
      </main>
      <TransactionModal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        schedule={data[0].id_schedule}
      />
    </Layout>
  );
}

export async function getServerSideProps(context: { params: any }) {
  const { params } = context;
  const { id } = params;
  const res = await getScheduleById(id);
  if (!res.isSuccess) {
    return {
      notFound: true,
    };
  }
  return { props: { data: res.data } };
}

import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import CategorySection from '@/container/home/CategorySection';
import CoverSection from '@/container/home/CoverSection';
import CtaSection from '@/container/home/CtaSection';
import FavoritesSection from '@/container/home/FavoritesSection';
import FeaturedSection from '@/container/home/FeaturedSection';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main className='grid gap-16'>
        <CoverSection />
        <CategorySection />
        <FavoritesSection />
        <FeaturedSection />
        <CtaSection />
      </main>
    </Layout>
  );
}

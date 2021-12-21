import * as React from 'react';

import Auth from './Auth';
import Footer from './Footer';
import Header from './Header';

type LayoutType = {
  children: React.ReactNode;
  showLogin?: boolean;
  showSignin?: boolean;
};
export default function Layout({
  children,
  showLogin,
  showSignin,
}: LayoutType) {
  // Put Header or Footer Here
  return (
    <>
      <Auth>
        <Header showLogin={showLogin} showSignin={showSignin} />
        {children}
        <Footer />
      </Auth>
    </>
  );
}

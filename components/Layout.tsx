import { styled } from '@mui/material';
import { useSession } from 'next-auth/react';
import React, { ReactNode } from 'react';
import Header from './Header';

const Root = styled('div')(({ theme }) => ({}));

const Auth = ({ children }: { children: ReactNode }) => {
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

const Layout = ({
  children,
  requiresAuth = false,
}: {
  children?: React.ReactNode;
  requiresAuth?: boolean;
}) => {
  return (
    <Root>
      <Header />
      {requiresAuth ? <Auth>{children}</Auth> : <>{children}</>}
    </Root>
  );
};

export default Layout;

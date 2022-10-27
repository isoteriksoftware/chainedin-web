import { styled } from '@mui/material';
import React from 'react';
import Header from './Header';

const Root = styled('div')(({ theme }) => ({}));

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Root>
      <Header />
      {children}
    </Root>
  );
};

export default Layout;

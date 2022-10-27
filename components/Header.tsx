import { LinkedIn } from '@mui/icons-material';
import {
  AppBar,
  Button,
  Stack,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { useNotification } from '@web3uikit/core';
import { ConnectButton } from '@web3uikit/web3';
import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import LoggedInMenu from './LoggedInMenu';

const Root = styled('div')(({ theme }) => ({
  '& .appBar': {
    ...theme.mixins.toolbar,
    background: theme.colors.ebonyClay,
    color: 'white',
    zIndex: 1,

    '& .brandLink': {
      color: 'white',
      textDecoration: 'none',
    },
    '& .brand': {
      fontWeight: 500,
    },
    '& .expand': {
      flex: 1,
    },
    '& .button': {
      color: '#fff',
      textTransform: 'none',
      background: theme.palette.secondary.dark,
    },
  },
}));

const Header: NextPage = () => {
  const { data: session } = useSession();
  const { isWeb3Enabled, deactivateWeb3, chainId } = useMoralis();
  const dispatchNotification = useNotification();
  const supportedChainIds = ['80001'];

  const authenticate = () => {
    if (!session) signIn('linkedin');
    else signOut();
  };

  useEffect(() => {
    if (
      isWeb3Enabled &&
      !supportedChainIds.includes(parseInt(chainId ?? '0').toString())
    ) {
      dispatchNotification({
        type: 'error',
        title: 'Unsupported Chain',
        message:
          'This chain is not supported. Please connect to Polygon Mumbai chain!',
        position: 'topR',
      });
      deactivateWeb3();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWeb3Enabled, chainId]);

  return (
    <Root>
      <AppBar className="appBar" elevation={2} position="fixed">
        <Toolbar>
          <Link href="/" passHref>
            <a className="brandLink">
              <Typography variant="h5" className="brand">
                ChainedIn
              </Typography>
            </a>
          </Link>

          <div className="expand" />

          <Stack direction="row" spacing={2}>
            {session && <LoggedInMenu session={session} />}
            {session && <ConnectButton moralisAuth={false} />}
            {!session && (
              <Button
                variant="contained"
                size="large"
                color="secondary"
                className="button"
                startIcon={<LinkedIn />}
                onClick={authenticate}
              >
                Login
              </Button>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </Root>
  );
};

export default Header;

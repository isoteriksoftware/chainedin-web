import { LinkedIn } from '@mui/icons-material';
import {
  AppBar,
  Button,
  Stack,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

const Root = styled('div')(({ theme }) => ({
  '& .appBar': {
    ...theme.mixins.toolbar,
    background: theme.colors.ebonyClay,
    color: 'white',

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
  console.log(session);

  const authenticate = () => {
    if (!session) signIn('linkedin');
    else signOut();
  };

  return (
    <Root>
      <AppBar className="appBar" elevation={2} position="fixed">
        <Toolbar>
          <Typography variant="h5" className="brand">
            ChainedIn
          </Typography>

          <div className="expand" />

          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              className="button"
              startIcon={<LinkedIn />}
              onClick={authenticate}
            >
              {session ? 'Logout' : 'Login'}
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Root>
  );
};

export default Header;

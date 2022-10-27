import { LinkedIn } from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Stack,
  Button,
} from '@mui/material';
import { NextPage } from 'next';

const Root = styled('div')(({ theme }) => ({
  '& .appBar': {
    ...theme.mixins.toolbar,
    background: theme.palette.secondary.dark,
    color: theme.appBar.color,

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
  return (
    <Root>
      <AppBar className="appBar" elevation={0} position="fixed">
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
            >
              Login
            </Button>
            {/* <Button
              variant="text"
              size="large"
              color="secondary"
              className="button"
            >
              Signup
            </Button> */}
          </Stack>
        </Toolbar>
      </AppBar>
    </Root>
  );
};

export default Header;

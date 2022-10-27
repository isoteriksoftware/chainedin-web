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
    background: theme.appBar.background,
    color: theme.appBar.color,
    borderBottom: `2px solid ${theme.border.color}`,

    '& .brand': {
      fontWeight: 500,
    },
    '& .expand': {
      flex: 1,
    },
  },
}));

const Header: NextPage = () => {
  return (
    <Root>
      <AppBar className="appBar" elevation={0} position="fixed">
        <Toolbar>
          <Typography variant="h4" className="brand">
            ChainedIn
          </Typography>

          <div className="expand" />

          <Stack direction="row" spacing={3}>
            <Button variant="contained" size="large">
              Login
            </Button>
            <Button variant="contained" size="large">
              Signup
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Root>
  );
};

export default Header;

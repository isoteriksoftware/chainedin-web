import { Button, styled, TextField, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  height: '100vh',

  '& .inner': {
    background: 'url(/images/background2.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    flex: '1 1 auto',
    position: 'relative',

    '& .searchField': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      background: 'white',
      borderRadius: '1rem',
      width: '70%',

      '& .MuiOutlinedInput-root': {
        borderRadius: '1rem',
        border: `2px solid ${theme.border.color}`,
      },
    },
  },
}));

const Home: NextPage = () => {
  return (
    <Layout>
      <Root>
        <div className="inner">
          <TextField
            className="searchField"
            placeholder="Search email or full name"
          />
        </div>
      </Root>
    </Layout>
  );
};

export default Home;

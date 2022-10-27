import { GitHub } from '@mui/icons-material';
import { styled, Typography } from '@mui/material';
import { Input } from '@web3uikit/core';
import { Search } from '@web3uikit/icons';
import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  height: '100vh',
  position: 'relative',

  '& .top': {
    height: '56px',
  },
  '& .inner': {
    background: 'url(/images/background2.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    flex: '1 1 auto',
    textAlign: 'center',
    position: 'relative',

    '& .searchField': {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'white',
      borderRadius: '1rem',
      width: '50%',

      '& .MuiOutlinedInput-root': {
        borderRadius: '1rem',
        border: `2px solid ${theme.border.color}`,
      },
    },
    '& .title': {
      marginTop: '1.5rem',
      fontWeight: 800,
      fontSize: '4.5rem',
      color: theme.colors.ebonyClay,
    },
    '& .subTitle': {
      fontWeight: 500,
      fontSize: '1.8rem',
      color: theme.colors.ebonyClay,
    },
  },
  '& .footer': {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    background: theme.colors.ebonyClay,
    padding: '.5rem',
    color: '#f0f4f7',
    display: 'flex',

    '& .attributionContainer': {
      flex: 1,
      textAlign: 'center',
    },
    '& .repoLink': {
      color: '#f0f4f7',
    },
  },
}));

const Home: NextPage = () => {
  return (
    <Layout>
      <Root>
        <div className="top" />
        <div className="inner">
          <Typography variant="h2" className="title">
            ChainedIn
          </Typography>
          <Typography variant="h5" className="subTitle">
            Decentralized Skill Verification System
          </Typography>
          <Input
            width="45%"
            size="large"
            placeholder="Search by email address"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'white',
              borderRadius: '5rem',
              marginTop: '1.5rem',
              boxShadow:
                '0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)',
            }}
            prefixIcon={
              <div>
                <Search />
              </div>
            }
          />
        </div>

        <div className="footer">
          <div className="attributionContainer">
            <Typography variant="body1">
              Made with ♥ by Imran Abdulmalik
            </Typography>
          </div>
          <a
            href="https://github.com/isoteriksoftware/chainedin-web"
            target="_blank"
            rel="noreferrer"
            className="repoLink"
          >
            <GitHub />
          </a>
        </div>
      </Root>
    </Layout>
  );
};

export default Home;

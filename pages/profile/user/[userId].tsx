import {
  EmailOutlined,
  ListAltRounded,
  RocketOutlined,
  WorkOutlineRounded,
} from '@mui/icons-material';
import { Avatar, Stack, styled, Typography } from '@mui/material';
import { Tab, TabList } from '@web3uikit/core';
import { NextPage } from 'next';
import Image from 'next/image';
import Layout from '../../../components/Layout';

const Root = styled('div')(({ theme }) => ({
  padding: '0 4rem',
  paddingTop: '5rem',
  textAlign: 'center',

  '& .hero': {
    textAlign: 'left',
    width: '50%',
    padding: '1.3rem',
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: `2px solid ${theme.border.color}`,
    borderRadius: '2rem',
    background: theme.palette.secondary.main,
    color: 'white',
    minHeight: '200px',

    '& .name': {
      marginBottom: '.5rem',
    },
    '& .emailLink': {
      color: 'white',
    },
  },
  '& .tabsContainer': {
    marginTop: '1rem',
  },
}));

const UserProfile: NextPage = () => {
  return (
    <Layout>
      <Root>
        <div className="hero">
          <div className="overview">
            <Typography variant="h4" className="name">
              Imran Abdulmalik
            </Typography>
            <a href="mailto:imran@fake.com" className="emailLink">
              <Stack direction="row" alignItems="center">
                <EmailOutlined />
                <Typography variant="body1" className="email">
                  imranabdulmalik01@gmail.com
                </Typography>
              </Stack>
            </a>
          </div>

          <Image
            src="/images/wizard.svg"
            alt="Wizard"
            width="100px"
            height="100px"
          />
        </div>

        <div className="tabsContainer">
          <TabList isWidthAuto defaultActiveKey={0} tabStyle="bulbUnion">
            <Tab
              tabKey={0}
              tabName={
                <Stack direction="row" alignItems="center" spacing={2}>
                  <RocketOutlined />
                  <Typography variant="h6">Skills</Typography>
                </Stack>
              }
            >
              <p>Looks like you have no friends :)</p>
            </Tab>

            <Tab
              tabKey={1}
              tabName={
                <Stack direction="row" alignItems="center" spacing={2}>
                  <WorkOutlineRounded />
                  <Typography variant="h6">Experiences</Typography>
                </Stack>
              }
            >
              <p>Looks like you have no friends :)</p>
            </Tab>

            <Tab
              tabKey={2}
              tabName={
                <Stack direction="row" alignItems="center" spacing={2}>
                  <ListAltRounded />
                  <Typography variant="h6">Certificates</Typography>
                </Stack>
              }
            >
              <p>Looks like you have no friends :)</p>
            </Tab>
          </TabList>
        </div>

        <div className="content">
          <Stack direction="row"></Stack>
        </div>
      </Root>
    </Layout>
  );
};

export default UserProfile;

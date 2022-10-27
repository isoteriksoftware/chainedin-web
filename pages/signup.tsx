import { Grid, Stack, styled, Typography, useTheme } from '@mui/material';
import { Button, Hero, Select } from '@web3uikit/core';
import { User, UserTeam } from '@web3uikit/icons';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import Layout from '../components/Layout';
import { AccountType } from '../types/enums';

const Root = styled('div')(({ theme }) => ({
  paddingTop: '56px',
  textAlign: 'center',
  position: 'relative',
  height: '100vh',
  width: '100vw',

  '& .inner': {
    width: '70%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
  },
  '& .title': {
    color: theme.colors.ebonyClay,
    marginBottom: '3rem',
    fontWeight: 500,
  },
  '& .name': {
    fontWeight: 700,
  },
  '& .buttonContainer': {
    marginTop: '.5rem',
  },
}));

const Signup: NextPage = () => {
  const theme = useTheme();
  const { data: session } = useSession({ required: true });
  const [isLoading, setIsLoading] = useState(false);

  const onRegister = (accountType: AccountType) => {
    setIsLoading(true);
    console.log(accountType);
  };

  return (
    <Layout requiresAuth={true}>
      <Root>
        <div className="inner">
          <Typography variant="h3" className="title">
            Create Your Decentralized Resume
          </Typography>

          <Hero
            backgroundColor={theme.palette.secondary.main}
            align="right"
            //height="30vh"
            title={session?.user?.name ?? 'John Doe'}
            subTitle={session?.user?.email ?? 'john.doe@nowhere.com'}
            textColor="#fff"
            customImage={{
              url: session?.user?.image ?? '/images/wizard.svg',
              styles: {
                borderRadius: '20px',
              },
            }}
          >
            {/* <Typography variant="h5" className="email">
              imranabdulmalik01@gmail.com
            </Typography>
            <Typography variant="h4" className="name">
              Imran Abdulmalik
            </Typography> */}
          </Hero>

          <Stack
            direction="row"
            justifyContent="flex-end"
            spacing={2}
            className="buttonContainer"
          >
            <Button
              color="green"
              theme="colored"
              text="Create User Account"
              size="xl"
              icon={<User />}
              isLoading={isLoading}
              onClick={() => onRegister(AccountType.UserAccount)}
            />
            <Button
              theme="primary"
              text="Create Company Account"
              size="xl"
              icon={<UserTeam />}
              isLoading={isLoading}
              onClick={() => onRegister(AccountType.UserAccount)}
            />
          </Stack>
        </div>
      </Root>
    </Layout>
  );
};

export default Signup;

import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { NotificationProvider } from '@web3uikit/core';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MoralisProvider } from 'react-moralis';
import { defaultTheme } from '../themes/default.theme';
import createEmotionCache from '../utils/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps & { emotionCache: EmotionCache; pageProps: { session: Session } }) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline enableColorScheme={true} />
        <SessionProvider session={pageProps.session}>
          <MoralisProvider initializeOnMount={false}>
            <NotificationProvider>
              <Component {...pageProps} />
            </NotificationProvider>
          </MoralisProvider>
        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;

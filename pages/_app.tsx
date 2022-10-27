import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { defaultTheme } from '../themes/default.theme';
import createEmotionCache from '../utils/createEmotionCache';
import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import { Session } from 'next-auth';
import { MoralisProvider } from 'react-moralis';
import { NotificationProvider } from '@web3uikit/core';

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

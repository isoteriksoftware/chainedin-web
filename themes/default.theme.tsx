import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {}

  interface ThemeOptions {}
}

export const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff8e88',
    },
    background: {
      default: '#fff',
    },
  },
});

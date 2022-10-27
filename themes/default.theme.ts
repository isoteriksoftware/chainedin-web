import { createTheme } from '@mui/material';

export const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00d1ae',
    },
    secondary: {
      main: '#39a1ff',
    },
    background: {
      default: '#fefeff',
    },
  },
  typography: {
    fontFamily: "'Poppins', Roboto, Helvetica, Arial, sans-serif",
  },
  appBar: {
    color: '#fff',
  },
  border: {
    color: '#d9e0e7',
  },
  colors: {
    ebonyClay: '#1f2937',
  },
});

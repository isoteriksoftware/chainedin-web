import { createTheme } from '@mui/material';

export const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6559f4',
    },
    background: {
      default: '#fefeff',
    },
  },
  typography: {
    fontFamily: "'Poppins', Roboto, Helvetica, Arial, sans-serif",
  },
  appBar: {
    background: '#fefeff',
    color: '#44515c',
  },
  border: {
    color: '#d9e0e7',
  },
});

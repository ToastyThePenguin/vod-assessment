import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import typography from './typography';

const theme = createTheme({
  palette: {
    background: {
      default: '#121212',
      paper: '#333'
    },
    primary: {
      contrastText: '#ffffff',
      main: '#27c6c4',
    },
    secondary: {
      contrastText: '#ffffff',
      main: '#c32bc9',
    },
    text: {
      primary: '#171717',
      secondary: '#c32bc9',
    }
  },
  shadows,
  typography
});

export default theme;

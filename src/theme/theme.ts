import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import typography from './typography';

const theme = createTheme({
  palette: {
    background: {
      default: '#F4F6F8',
      paper: '#FFFFFF'
    },
    primary: {
      contrastText: '#ffffff',
      main: '#4f4f4f',
    },
    secondary: {
      contrastText: '#ffffff',
      main: '#d23333',
    },
    text: {
      primary: '#171717',
      secondary: '#d23333',
    }
  },
  shadows,
  typography
});

export default theme;

import { useRoutes } from 'react-router-dom';
import { ThemeProvider, GlobalStyles } from '@mui/material';
import routes from './routes';
import theme from './theme/theme';

const App = () => {
  const routing = useRoutes(routes);

  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={{     
          '*': {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
          },
          html: {
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale',
            height: '100%',
            width: '100%'
          },
          body: {
            backgroundColor: '#f4f6f8',
            height: '100%',
            width: '100%'
          },
          a: {
            textDecoration: 'none'
          },
          '#root': {
            height: '100%',
            width: '100%'
          }
    }} />
        {routing}
      </ThemeProvider>
  );
};

export default App;
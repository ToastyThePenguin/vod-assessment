import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import store from './store';
import CustomAlert from './components/customAlert';
import routes from './routes';
import theme from './theme/theme';

const App: React.FC = () => {
  const routing = useRoutes(routes);

  return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CustomAlert />
          {routing}
        </ThemeProvider>
      </Provider>
  );
};

export default App;
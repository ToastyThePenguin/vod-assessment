import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store'

ReactDOM.render((
    <Router>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </Router>
), document.getElementById('root'));


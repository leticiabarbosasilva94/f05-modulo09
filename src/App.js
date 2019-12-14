import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import history from './services/history';

import Routes from './routes';

import GlobalStyles from './styles/GlobalStyles';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={5000} />
      </Router>
    </Provider>
  );
}

export default App;

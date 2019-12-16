import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import history from './services/history';

import Routes from './routes';

import GlobalStyles from './styles/GlobalStyles';

import store, { persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={5000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;

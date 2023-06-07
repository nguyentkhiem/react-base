import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux-setup/store';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'i18n';
import App from './App';
import 'antd/dist/reset.css';
import './index.scss';
import { AppProvider } from 'context/app';

const container = document.getElementById('root');
// @ts-ignore
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </Provider>,
);

reportWebVitals();

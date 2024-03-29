import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { store } from 'state/store';
import { GlobalStyle } from 'styles/GlobalStyle.styled';
import { App } from 'components/App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyle />
  </>
);

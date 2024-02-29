import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'GlobalStyle';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    white: '#fff',
    black: '#212121',
    green: 'green',
    blue: 'blue',
    orange: 'orange',
    error: 'red',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
          <GlobalStyle />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import { defaultTheme } from '@/theme/theme';
import { store } from '@/stores';

import './globalStyles.css';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider
        theme={defaultTheme}
        toastOptions={{
          defaultOptions: {
            containerStyle: { fontSize: 'xl' },
            duration: 5000,
            isClosable: true,
          },
        }}
      >
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

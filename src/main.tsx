import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import { defaultTheme } from '@/theme/theme';

import './globalStyles.css';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={defaultTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

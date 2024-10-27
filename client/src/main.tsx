 //@ts-ignore
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { SignUpContextProvider } from './contexts/SignUpContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SignUpContextProvider>
      <App />
    </SignUpContextProvider>
  </React.StrictMode>
);

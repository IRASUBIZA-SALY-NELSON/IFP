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

export const isProd = process.env.NODE_ENV === "production";
export const apiUrl = isProd
  ? "https://ifp-48r2.onrender.com/"
  : "http://localhost:5000";


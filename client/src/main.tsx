 //@ts-ignore
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.css';
import { SignUpContextProvider } from './contexts/SignUpContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SignUpContextProvider>
      <App />
    </SignUpContextProvider>
  </React.StrictMode>
);

// export const isProd = process.env.NODE_ENV === "production";
// export const apiUrl = isProd
//   ? "https://ifp-48r2.onrender.com/"
//   : "http://localhost:5000";


export const isProd = import.meta.env.MODE === "production"; // Vite uses import.meta.env.MODE
export const apiUrl = import.meta.env.VITE_API_URL;


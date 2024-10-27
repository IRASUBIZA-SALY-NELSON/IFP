import { jsx as _jsx } from "react/jsx-runtime";
//@ts-ignore
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { SignUpContextProvider } from './contexts/SignUpContext';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(SignUpContextProvider, { children: _jsx(App, {}) }) }));

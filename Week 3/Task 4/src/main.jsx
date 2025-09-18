import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router';
import './index.css'; // Assuming you have a CSS file for global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);

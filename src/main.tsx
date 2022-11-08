import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import TestApp from '@/TestApp';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TestApp />
  </React.StrictMode>,
);

/*
  <React.StrictMode>
    <App />
  </React.StrictMode>, */

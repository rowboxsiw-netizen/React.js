
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This file is used for legacy SPA environments. Next.js uses app/layout.tsx.
const rootElement = typeof document !== 'undefined' ? document.getElementById('root') : null;

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

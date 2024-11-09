// src/index.tsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import MaterialUIProvider from './ui/providers/materialUIProvider';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <MaterialUIProvider>
        <App />
      </MaterialUIProvider>
    </React.StrictMode>
  );
} else {
  console.error('Root container not found');
}

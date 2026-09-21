import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app/index.scss';
import App from './app/App.tsx';
import { ThemeProvider } from '@/shared/library/theme/ThemeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);

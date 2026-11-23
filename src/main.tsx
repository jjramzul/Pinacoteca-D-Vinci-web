import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HomePage } from '@/pages/HomePage';
import '@/styles/fonts.css';
import '@/styles/index.css';

const container = document.getElementById('root');
if (!container) throw new Error('No se encontró el elemento #root');

const app = (
  <StrictMode>
    <HomePage />
  </StrictMode>
);

// En producción el HTML viene prerenderizado (scripts/prerender.mjs): se hidrata.
if (container.firstElementChild) hydrateRoot(container, app);
else createRoot(container).render(app);

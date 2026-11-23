import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { HomePage } from '@/pages/HomePage';

/** Prerender estático usado por scripts/prerender.mjs tras el build. */
export function render(): string {
  return renderToString(
    <StrictMode>
      <HomePage />
    </StrictMode>,
  );
}

export { buildLlmsTxt, buildRobotsTxt, buildSitemapXml } from '@/seo';

/**
 * Post-build: inyecta el HTML renderizado en dist/index.html (los crawlers y
 * LLMs que no ejecutan JavaScript ven el contenido completo) y genera
 * robots.txt, sitemap.xml y llms.txt a partir de src/data.
 */
import { readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = (file) => `${root}dist/${file}`;
const ssrBundle = `${root}dist-ssr/entry-server.js`;

const { render, buildRobotsTxt, buildSitemapXml, buildLlmsTxt } = await import(ssrBundle);

const template = await readFile(dist('index.html'), 'utf8');
if (!template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html no contiene el marcador <!--app-html-->');
}

/** Fuentes del primer pantallazo: se precargan para que lleguen antes del primer render. */
const CRITICAL_FONTS = [
  /^playfair-display-latin-wght-normal-.*\.woff2$/,
  /^playfair-display-latin-wght-italic-.*\.woff2$/,
  /^archivo-latin-400-normal-.*\.woff2$/,
];
const assets = await readdir(dist('assets'));
const fontPreloads = CRITICAL_FONTS.map((pattern) => {
  const file = assets.find((name) => pattern.test(name));
  if (!file) throw new Error(`Fuente crítica no encontrada en dist/assets: ${pattern}`);
  return `<link rel="preload" href="/assets/${file}" as="font" type="font/woff2" crossorigin />`;
}).join('\n    ');

const today = new Date().toISOString().slice(0, 10);

await Promise.all([
  writeFile(
    dist('index.html'),
    template.replace('<!--font-preloads-->', fontPreloads).replace('<!--app-html-->', render()),
  ),
  writeFile(dist('robots.txt'), buildRobotsTxt()),
  writeFile(dist('sitemap.xml'), buildSitemapXml(today)),
  writeFile(dist('llms.txt'), buildLlmsTxt()),
]);

await rm(`${root}dist-ssr`, { recursive: true, force: true });

console.log('✓ Prerender: index.html, robots.txt, sitemap.xml y llms.txt generados en dist/');

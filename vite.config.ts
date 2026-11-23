import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

/** Dominios de túneles públicos para probar en el móvil (cloudflared, ngrok). */
const TUNNEL_HOSTS = ['.trycloudflare.com', '.ngrok-free.app'];

export default defineConfig({
  plugins: [react(), imagetools({ defaultDirectives: new URLSearchParams({ quality: '72' }) })],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  server: { allowedHosts: TUNNEL_HOSTS },
  preview: { allowedHosts: TUNNEL_HOSTS },
  build: {
    target: 'es2022',
    assetsInlineLimit: 2048,
  },
});

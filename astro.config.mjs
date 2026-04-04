import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://cassiusduarte.github.io',
  base: '/cassiusadv',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});

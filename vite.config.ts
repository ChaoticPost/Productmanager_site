import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// GitHub Pages serves this repo at /Productmanager_site/
export default defineConfig({
  plugins: [react()],
  base: '/Productmanager_site/',
});

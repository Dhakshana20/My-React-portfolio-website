// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/My-React-portfolio-website/", // 💡 this must match your repo name exactly
});

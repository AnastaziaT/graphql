import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://152.228.215.94:83',
        changeOrigin: true,
        secure: false,
      },
    },
    port: 3000,
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => ({
  base: '/auth/',
  plugins: [react()],
  resolve: {
    alias: {
      '@common': path.resolve(__dirname, 'common/src'),
    },
  },
  server: {
    port: 3001,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://irms-auth:8001',
        changeOrigin: true,
      },
    },
  },
}));

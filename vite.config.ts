import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 2024,
    proxy: {
      '/uploads': {
        target: 'http://localhost:2023', // Your server's URL
        changeOrigin: true,
      },
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { Server } from 'http';

export default defineConfig({
  plugins: [react()],
  define: { 'process.env': process.env },
  server: {
    port: 5713,
    host: true
  }
});

// import basicSsl from '@vitejs/plugin-basic-ssl';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), basicSsl()]
// });

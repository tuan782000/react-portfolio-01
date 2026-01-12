npm create vite@latest react-portfolio-01 -- --template react

npm install -D tailwindcss @tailwindcss/vite

npm install lucide-react

npm install --save-dev terser

Cấu hình react vite and lucide-react và chuyển hướng review sang cổng 3000

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false,
        minify: 'terser',
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    icons: ['lucide-react']
                }
            }
        }
    },
    preview: {
        ports: 3000,
        open: true
    }
});
```

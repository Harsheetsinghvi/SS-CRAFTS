import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { createApiMiddleware } from './server/devMiddleware.ts';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const rootDir = import.meta.dirname || process.cwd();

  return {
    plugins: [
      react(),
      {
        name: 'vite-api-server-middleware',
        configureServer(server) {
          const apiMiddleware = createApiMiddleware();
          server.middlewares.use((req, res, next) => {
            if (req.url && (req.url.startsWith('/api') || req.url.startsWith('/uploads'))) {
              return apiMiddleware(req as any, res as any, next);
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(rootDir, './src'),
        'next/link': path.resolve(rootDir, './src/components/compat/Link.tsx'),
        'next/image': path.resolve(rootDir, './src/components/compat/Image.tsx'),
        'next/navigation': path.resolve(rootDir, './src/components/compat/Navigation.tsx'),
      },
    },
    define: {
      'process.env.NEXT_PUBLIC_SUPABASE_URL': JSON.stringify(
        env.NEXT_PUBLIC_SUPABASE_URL || 'https://imdhekjvmtuuyqvqycdu.supabase.co'
      ),
      'process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY': JSON.stringify(
        env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltZGhla2p2bXR1dXlxdnF5Y2R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE3MDg5ODQsImV4cCI6MjEwNzI4NDk4NH0.Yj_qUlX670GixbvikfOtvLGwPzfR6u5MOxfPgcG-EzU'
      ),
      'process.env.NEXT_PUBLIC_DEFAULT_WHATSAPP': JSON.stringify(
        env.NEXT_PUBLIC_DEFAULT_WHATSAPP || '919313229609'
      ),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || mode || 'development'),
    },
    server: {
      port: 3000,
      host: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
  };
});

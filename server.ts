import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { apiRouter } from './server/apiRouter.ts';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Mount API routes
app.use('/api', apiRouter);

// Serve uploads directory
app.use('/uploads', express.static(path.join(process.cwd(), 'public', 'uploads')));

// Serve Vite build output
app.use(express.static(path.join(process.cwd(), 'dist')));

// SPA client routing fallback
app.get('*', (_req, res) => {
  res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`SS Crafts Vite production server running at http://localhost:${PORT}`);
});

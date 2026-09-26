import express from 'express';
import authorsRoutes from './src/routes/authorsRoutes.js';
import booksRoutes from './src/routes/booksRoutes.js';

const app = express();

app.use(express.json());

app.use(authorsRoutes);
app.use(booksRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
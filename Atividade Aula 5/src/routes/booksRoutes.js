import express from 'express';

import {
  createBook,
  getBooks,
  updateBook,
  deleteBook
} from '../controllers/booksController.js';

const router = express.Router();

router.post('/books', createBook);
router.get('/books', getBooks);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;
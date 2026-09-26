import express from 'express';
import { createAuthor } from '../controllers/authorsController.js';

const router = express.Router();

router.post('/authors', createAuthor);

export default router;
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createBook = async (req, res) => {
  try {
    const { title, release_year, author_id } = req.body;

    const book = await prisma.books.create({
      data: {
        title,
        release_year,
        author_id
      }
    });

    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao cadastrar livro',
      message: error.message
    });
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await prisma.books.findMany({
      include: {
        author: true
      }
    });

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao listar livros',
      message: error.message
    });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, release_year, author_id } = req.body;

    const book = await prisma.books.update({
      where: {
        id
      },
      data: {
        title,
        release_year,
        author_id
      }
    });

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao atualizar livro',
      message: error.message
    });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await prisma.books.delete({
      where: {
        id
      }
    });

    res.status(200).json({
      message: 'Livro excluído com sucesso',
      book
    });
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao excluir livro',
      message: error.message
    });
  }
};
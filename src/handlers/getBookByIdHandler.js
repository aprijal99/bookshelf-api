const books = require('../data/books');

const getBookByIdHandler = (req, h) => {
  const { bookId } = req.params;

  const oneBook = books.filter((book) => book.id === bookId)[0];

  if (oneBook !== undefined) {
    return {
      status: 'success',
      data: {
        book: oneBook,
      },
    };
  }

  const res = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });

  res.code(404);

  return res;
};

module.exports = getBookByIdHandler;

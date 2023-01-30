const books = require('../data/books');

const deleteBookByIdHandler = (req, h) => {
  const { bookId } = req.params;

  const index = books.findIndex((book) => book.id === bookId);

  if (index !== -1) {
    books.splice(index, 1);

    return {
      status: 'success',
      message: 'Buku berhasil dihapus',
    };
  }

  const res = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });

  res.code(404);

  return res;
};

module.exports = deleteBookByIdHandler;

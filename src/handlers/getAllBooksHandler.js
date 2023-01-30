const books = require('../data/books');

const getAllBooksHandler = (req) => {
  // Get query parameters
  const qName = req.query.name;
  const qReading = req.query.reading;
  const qFinished = req.query.finished;

  // Get only id, name, and publisher
  let displayedBooks = books.map(({ id, name, publisher }) => ({ id, name, publisher }));

  // Filter the books array base on name query
  if (qName) {
    displayedBooks = displayedBooks.filter(
      ({ name }) => (name.toLowerCase().includes(qName.toLowerCase())),
    );
  }

  // Filter the books array base on reading query
  if (Number(qReading) === 1) {
    displayedBooks = books.filter(({ reading }) => reading === Boolean(Number(qReading)))
      .map(({ id, name, publisher }) => ({ id, name, publisher }));
  } else if (Number(qReading) === 0) {
    displayedBooks = books.filter(({ reading }) => reading === Boolean(Number(qReading)))
      .map(({ id, name, publisher }) => ({ id, name, publisher }));
  }

  // Filter the books array base on finished query
  if (Number(qFinished) === 1) {
    displayedBooks = books.filter(({ finished }) => finished === Boolean(Number(qFinished)))
      .map(({ id, name, publisher }) => ({ id, name, publisher }));
  } else if (Number(qFinished) === 0) {
    displayedBooks = books.filter(({ finished }) => finished === Boolean(Number(qFinished)))
      .map(({ id, name, publisher }) => ({ id, name, publisher }));
  }

  return {
    status: 'success',
    data: {
      books: displayedBooks,
    },
  };
};

module.exports = getAllBooksHandler;

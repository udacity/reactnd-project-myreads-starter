import * as BooksAPI from './BooksAPI';

export const updateBookShelf = (book, shelf) => {
  return BooksAPI.update(book, shelf);
};

export const fetchBookRecords = () => {
  return BooksAPI.getAll();
};

export const searchBookRecords = (query) => {
  return BooksAPI.search(query);
};

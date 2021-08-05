import * as BooksAPI from '../BooksAPI';

export const getBookById = (bookId) => {
    BooksAPI.search(bookId);
}
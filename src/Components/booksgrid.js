import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';
/**
 * @description Returns a grid containing Books
 * @param  {} books Books contained in the grid
 * @param  {} handleShelfChange - Function which handles Shelf Changing
 */
const BooksGrid = ({ books, handleShelfChange, booksInShelve }) => {
  if (booksInShelve.length > 0 && books.length > 0) {
    // eslint-disable-next-line no-param-reassign
    const included = [];
    books = books.filter((book) => {
      const temp = booksInShelve.map((r) => r.id);
      return !temp.includes(book.id);
    });
    console.log('Books: ', books);
  }
  return (
    <ol className="books-grid">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <Book
              handleShelfChange={handleShelfChange}
              coverUrl={book.imageLinks.smallThumbnail}
              title={book.title}
              authors={book.authors}
              currentShelf={book.shelf}
              id={book.id}
            />
          </li>
        );
      })}
    </ol>
  );
};

BooksGrid.defaultProps = {
  books: [],
  booksInShelve: [],
};
BooksGrid.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  handleShelfChange: PropTypes.func.isRequired,
  booksInShelve: PropTypes.arrayOf(PropTypes.object),
};

export default BooksGrid;

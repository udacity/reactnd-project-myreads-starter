import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';
/**
 * @description Returns a grid containing Books
 * @param  {} books Books contained in the grid
 * @param  {} handleShelfChange - Function which handles Shelf Changing
 */
const BooksGrid = ({ books, handleShelfChange }) => (
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

BooksGrid.defaultProps = {
  books: [],
};
BooksGrid.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  handleShelfChange: PropTypes.func.isRequired,
};

export default BooksGrid;

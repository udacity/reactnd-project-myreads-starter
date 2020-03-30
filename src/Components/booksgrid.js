import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';

/**
 * @description Returns a grid containing Books
 * @param  {} books Books contained in the grid
 * @param  {} handleShelfChange - Function which handles Shelf Changing
 * @param  {} booksInShelve (optional) Array Containing all Books which correspondending Shelf Attribute is not null or 'none'
 */
const BooksGrid = ({ books, handleShelfChange, booksInShelve }) => {
  let booksToDisplay = books;

  if (booksInShelve.length > 0 && books.length > 0) {
    /* -------------------------------------------------------------------------- */
    /*         //? filters books determining wheter they are in a shelf           */
    /* -------------------------------------------------------------------------- */
    const sortedBooks = [];
    const temp = booksInShelve.map((r) => r.id);
    books.forEach((book) => {
      temp.includes(book.id)
        ? sortedBooks.push(booksInShelve.filter((b) => b.id === book.id).pop())
        : sortedBooks.push(book);
      return true;
    });
    booksToDisplay = sortedBooks;
  }

  return (
    <ol className="books-grid">
      {booksToDisplay.map((book) => {
        return (
          <li key={book.id}>
            <Book
              handleShelfChange={handleShelfChange}
              // eslint-disable-next-line no-nested-ternary
              coverUrl={book ? (book.imageLinks ? book.imageLinks.smallThumbnail : null) : null}
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

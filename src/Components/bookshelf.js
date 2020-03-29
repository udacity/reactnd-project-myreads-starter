import React from 'react';
import PropTypes from 'prop-types';
import BooksGrid from './booksgrid';

/**
 * @description Represents a Bookshelf Containing Books
 * @param  {} title of the bookshelf
 * @param  {} books being included and displayed in the shelf
 * @param  {} handleShelfChange function to be invoked once the book is to be moved to another shelf
 */
const BookShelf = ({ title, books, handleShelfChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <BooksGrid books={books} handleShelfChange={handleShelfChange} />
        </ol>
      </div>
    </div>
  );
};

BookShelf.defaultProps = {
  title: 'My Bookshelf :)',
  books: [],
};

BookShelf.propTypes = {
  title: PropTypes.string,
  books: PropTypes.arrayOf(PropTypes.object),
  handleShelfChange: PropTypes.func.isRequired,
};

export default BookShelf;

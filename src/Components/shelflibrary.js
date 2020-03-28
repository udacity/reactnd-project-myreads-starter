import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './bookshelf';

/**
 * @param  {} bookshelfes Array Containing Array of Bookshelfes. Format: []
 * @param  {} handleChange
 */
const ShelfLibrary = (
  bookshelfes = [('Currently Reading', 1), ('Want to Read', 2), ('Read', 3)],
  handleChange,
) => {
  console.log('Shelfes: ', bookshelfes);
  return bookshelfes.length !== 0 ? (
    <div className="list-books-content">
      {bookshelfes.map((shelf) => {
        return <BookShelf title={shelf[0]} books={shelf[1]} handleShelfChange={handleChange} />;
      })}
    </div>
  ) : //   null
  null;
};

ShelfLibrary.propTypes = {
  bookshelfes: PropTypes.arrayOf(PropTypes.array),
  handleChange: PropTypes.func,
};

export default ShelfLibrary;

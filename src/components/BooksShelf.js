import React from 'react';
import PropTypes from 'prop-types';

import BooksListing from './BooksListing';

const BooksShelf = (props) => {
  const { name, books, handleShelfUpdate } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <BooksListing books={books} handleShelfUpdate={handleShelfUpdate} />
      </div>
    </div>
  );
};

BooksShelf.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  handleShelfUpdate: PropTypes.func.isRequired
};

export default BooksShelf;

import React from 'react';
import PropTypes from 'prop-types';

import BookItem from './BookItem';

const BooksListing = (props) => {
  const { books, handleShelfUpdate } = props;

  const booksListing = books.map((book) => (
    <BookItem key={book.id} book={book} handleShelfUpdate={handleShelfUpdate} />
  ));

  return <ol className="books-grid">{booksListing}</ol>;
};

BooksListing.propTypes = {
  books: PropTypes.array.isRequired,
  handleShelfUpdate: PropTypes.func.isRequired
};

export default BooksListing;

import React from 'react';
import PropTypes from 'prop-types';

import BooksShelf from './BooksShelf';
import SearchInput from './SearchInput';

const BooksDashboard = (props) => {
  const { filterShelfBooks, handleShelfUpdate } = props;
  const bookShelves = [
    {
      title: 'Currently Reading',
      value: 'currentlyReading'
    },
    {
      title: 'Want To Read',
      value: 'wantToRead'
    },
    {
      title: 'Read',
      value: 'read'
    }
  ];

  const bookShelvesListing = bookShelves.map((bookShelf) => (
    <BooksShelf
      key={bookShelf.value}
      name={bookShelf.title}
      books={filterShelfBooks(bookShelf.value)}
      handleShelfUpdate={handleShelfUpdate}
    />
  ));

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads: A Book Lending App</h1>
      </div>
      <div className="list-books-content">
        <div>{bookShelvesListing}</div>
      </div>
      <SearchInput />
    </div>
  );
};

BooksDashboard.propTypes = {
  filterShelfBooks: PropTypes.func.isRequired,
  handleShelfUpdate: PropTypes.func.isRequired
};

export default BooksDashboard;

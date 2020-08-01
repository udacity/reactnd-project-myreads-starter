import React from 'react';
import PropTypes from 'prop-types';

import BooksShelf from './BooksShelf';
import SearchInput from './SearchInput';

const BooksDashboard = (props) => {
  const { filterShelfBooks, handleShelfUpdate } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads: A Book Lending App</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BooksShelf
            name="Currently Reading"
            books={filterShelfBooks('currentlyReading')}
            handleShelfUpdate={handleShelfUpdate}
          />
          <BooksShelf
            name="Want To Read"
            books={filterShelfBooks('wantToRead')}
            handleShelfUpdate={handleShelfUpdate}
          />
          <BooksShelf
            name="Read"
            books={filterShelfBooks('read')}
            handleShelfUpdate={handleShelfUpdate}
          />
        </div>
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

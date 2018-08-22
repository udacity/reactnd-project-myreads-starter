//* BookShelf renders the list of books in a category

import React from 'react';
import Book from './Book'

const BookShelf = () => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        <li>
          <Book />
        </li>
        <li>
          <Book />
        </li>
      </ol>
    </div>
  );
};

export default BookShelf;
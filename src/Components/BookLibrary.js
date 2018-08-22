//* BookLibrary renders three book shelves sorted by the category

import React from 'react';
import BookShelf from './BookShelf'

const BookLibrary = () => {
  return (
    <div className="list-books-content">
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <BookShelf />
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <BookShelf />
      </div>

      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <BookShelf />
      </div>

      <div className="bookshelf">
        <h2 className="bookshelf-title">Test Shelf</h2>
        <BookShelf />
      </div>

    </div>
  </div>
  );
};


export default BookLibrary;
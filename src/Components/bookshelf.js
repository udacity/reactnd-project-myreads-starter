import React from 'react';

import Book from './book';

const BookShelf = ({ title = 'Currently Reading', books = [] }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <ol className="books-grid">
            {books.map((book) => {
              return (
                <li key={book.id}>
                  <Book
                    // handleBookShelfChange={handleShelfChange}
                    coverUrl={book.imageLinks.smallThumbnail}
                    title={book.title}
                    authors={book.authors}
                    currentShelf={book.shelf}
                  />
                </li>
              );
            })}
          </ol>
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;

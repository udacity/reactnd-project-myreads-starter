import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book'

// stateless fucntional component as it does not handle state or lifecycle methods
  BookShelf.propTypes = {
    shelfName: PropTypes.string.isRequired,
    books: PropTypes.array
  }

 function BookShelf({shelfName, books, changeBookShelf}){
  return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                books.length > 0 ? (
                  books.map((book) => (
                    <li key={book.id}>
                      <Book book={book} changeBookShelf={changeBookShelf} />
                    </li>
                  ))
                ) : (
                <p className="empty-notice">No books on this shelf.</p>
                )
              }
            </ol>
          </div>
        </div>
    );
 }


export default BookShelf;



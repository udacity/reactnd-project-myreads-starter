import React from 'react';
import Book from './Book';

const Bookshelf = (props) => {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              props.books.map((book) => (
                <li>
                  <Book bookDetails={book} />
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    );
  };

export default Bookshelf;
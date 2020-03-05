import React from 'react';
import Book from './Book';

const BooksGrid = (props) => {
    return (
      <ol className="books-grid">
        {
          props.books.map((book) => (
            <li key={book.id}>
              <Book bookDetails={book} />
            </li>
          ))
        }
      </ol>
    );
  };

export default BooksGrid;
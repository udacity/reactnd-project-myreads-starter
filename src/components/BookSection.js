import React from 'react';
import Book from './Book';

const BookSection = ({
  title,
  books
}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{ title }</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.title}>
            <Book
              bookId={book.id}
              title={book.title}
              imagens={book.imageLinks}
              status={book.shelf}
              authors={book.authors}/>
          </li>
        ))}
      </ol>
    </div>
  </div>
  )

export default BookSection;

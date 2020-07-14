import React from 'react'
import Book from './Book'

const BooksGrid = ({ books, onShelfChange }) => (
  <ol className="books-grid">
    {books.length > 0 && books.map((book) => (
      <Book
        key={book.id}
        book={book}
        onShelfChange={onShelfChange}
      />
    ))}
  </ol>
);

export default BooksGrid
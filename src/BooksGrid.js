import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

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

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default BooksGrid
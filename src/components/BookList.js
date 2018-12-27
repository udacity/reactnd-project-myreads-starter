import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

export default class BookList extends Component {
  render() {
    const { books, updateBook } = this.props
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {(books && books.length > 0) && books.map(book => {
            return <li key={book.id}><Book book={{ ...book }} updateBook={updateBook} /></li>
          }
          )}
        </ol>
      </div>
    )
  }
}

BookList.propTypes = {
  books: PropTypes.array,
  updateBook: PropTypes.func.isRequired
};

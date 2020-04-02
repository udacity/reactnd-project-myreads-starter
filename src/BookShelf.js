import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

function BookShelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {props.books.map((book, index) => (<Book key={index} book={book}/>))}
        </ol>
      </div>
    </div>
  )
}

BookShelf.proptypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired
}

export default BookShelf

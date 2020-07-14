import React from 'react'
import BooksGrid from './BooksGrid'
import PropTypes from 'prop-types'

const Shelf = ({ name, books, onShelfChange }) => (
  <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <BooksGrid
          books={books}
          onShelfChange={onShelfChange}
        />
      </div>
    </div>
)

Shelf.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default Shelf
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'
import Shelf from './Shelf'

const BookList = ({ shelves, books, title }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>{ title }</h1>
      </div>
      <div className="list-books-content">
        <div>
          {
            shelves.map(shelf => (
              <Shelf
                key={ shelf.key }
                shelf={ shelf }
                books={
                  books.filter(book => book.shelf === shelf.key)
                }
              />
            ))
          }
        </div>
      </div>
      <div className="open-search">
        <Link to="/add">Add a book</Link>
      </div>
    </div>
  )
}

BookList.propTypes = {
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  title: PropTypes.string
}

export default BookList
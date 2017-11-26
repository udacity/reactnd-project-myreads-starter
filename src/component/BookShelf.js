import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Shelf from './Shelf'

const BookShelf = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            title="Currently Reading"
            update={props.update}
            books={props.books.filter(_ => _.shelf === 'currentlyReading')}
          />
          <Shelf
            title="Want to Read"
            update={props.update}
            books={props.books.filter(_ => _.shelf === 'wantToRead')}
          />
          <Shelf
            title="Read"
            update={props.update}
            books={props.books.filter(_ => _.shelf === 'read')}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" >
          Add a book
        </Link>
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  update: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
}

export default BookShelf

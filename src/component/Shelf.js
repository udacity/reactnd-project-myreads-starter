import React from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

const Shelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map(book => (
              <li key={book.id}>
                <Book bookInfo={book} update={props.update}/>
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  )
}

Shelf.propTypes = {
  update: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
}

export default Shelf

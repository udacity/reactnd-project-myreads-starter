import React from 'react'
import Book from './Book'

const Shelf = ({ shelf, books}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ shelf.title }</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            books.map((book) => (
              <li key={ book.id }>
                <Book
                  image={ book.imageLinks.thumbnail }
                  title={ book.title }
                  authors={ book.authors.join(", ") }
                />
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  )
}

export default Shelf
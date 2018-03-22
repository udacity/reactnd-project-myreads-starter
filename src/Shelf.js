import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const Shelf = ({title, shelf, books, updateShelf}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.filter(book => book.shelf === shelf).map(book => (
            <li key={book.id}>
              <Book
                book={book}
                updateShelf={updateShelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
}

export default Shelf;
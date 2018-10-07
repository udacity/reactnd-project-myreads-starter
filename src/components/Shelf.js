import React from "react";
import PropTypes from "prop-types";
import Book from "./Book.js";

const Shelf = props => {
  const filterBooks = shelf => {
    const filtered = props.books.filter(book => book.shelf === shelf);
    return filtered;
  };

  const { shelf, title, updateShelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {filterBooks(shelf).map(book => (
            <li key={book.id}>
              <Book book={book} updateShelf={updateShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default Shelf;

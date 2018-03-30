import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const ListBooks = ({ books, updateShelf }) => {
  const shelves = [
    { title: '🤩Currently reading', shelf: 'currentlyReading', books, updateShelf },
    { title: '🤗Want to read', shelf: 'wantToRead', books, updateShelf },
    { title: '😎Read', shelf: 'read', books, updateShelf }
  ]
  
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        {shelves.map(shelf => (
          <Shelf
            key={shelf.shelf}
            title={shelf.title}
            shelf={shelf.shelf}
            books={shelf.books}
            updateShelf={shelf.updateShelf}
          />
        ))}
      </div>

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
}

export default ListBooks;
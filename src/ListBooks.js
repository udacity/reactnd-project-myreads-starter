import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const ListBooks = ({ books, updateShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <Shelf
          title="Currently reading"
          shelf="currentlyReading"
          books={books}
          updateShelf={updateShelf}
        />

        <Shelf
          title="Want to read"
          shelf="wantToRead"
          books={books}
          updateShelf={updateShelf}
        />

        <Shelf
          title="Read"
          shelf="read"
          books={books}
          updateShelf={updateShelf}
        />
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
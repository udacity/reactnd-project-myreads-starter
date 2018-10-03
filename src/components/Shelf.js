import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book.js";

class Shelf extends Component {
  filterBooks = shelfName =>
    this.props.books.filter(book => book.shelf === shelfName);

  render() {
    const { shelf, title, updateShelf } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.filterBooks(shelf).map(book => (
              <li key={book.id}>
                <Book book={book} updateShelf={updateShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default Shelf;

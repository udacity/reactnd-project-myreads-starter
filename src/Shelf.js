import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class Shelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  };

  render() {
    const { title } = this.props;
    let { shelf, books, updateShelf } = this.props;

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
    );
  }
}

export default Shelf;

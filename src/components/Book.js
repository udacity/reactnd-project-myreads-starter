import React, { Component } from "react";
import Menu from "./Menu.js";
import { PropTypes } from "prop-types";

class Book extends Component {
  render() {
    const { book, updateShelf } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                `url(${book.imageLinks.thumbnail})`
            }}
          />

          <Menu book={book} updateShelf={updateShelf} />

        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.map((author) => (author))}</div>
      </div>
    );
  }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
}

export default Book;

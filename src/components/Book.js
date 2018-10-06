import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Menu from "./Menu.js";
import Cover from "./Cover.js";

class Book extends Component {
  render() {
    const { book, updateShelf } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <Cover book={book} />
          <Menu book={book} updateShelf={updateShelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.map((author) => (author))}</div>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired
}

export default Book;
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Shelf from './Shelf';

class ListBooks extends Component {
  state = {};

  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  };

  render() {
    const { books, updateShelf } = this.props

    return <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <Shelf title="Currently Reading" shelf="currentlyReading" books={books} updateShelf={updateShelf} />

          <Shelf title="Want to Read" shelf="wantToRead" books={books} updateShelf={updateShelf} />

          <Shelf title="Read" shelf="read" books={books} updateShelf={updateShelf} />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>;
  }
}

export default ListBooks;

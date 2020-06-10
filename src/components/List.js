import React, { Component } from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class List extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired,
  };

  render() {
    const { books, status, onShelfChange } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {status === "loading" && <div className="loader"></div>}
            {status === "error" && <div className="error"></div>}
            {status === "loaded" && books && !!books.length && (
              <div>
                <BookShelf
                  books={books.filter(
                    (book) => book.shelf === "currentlyReading"
                  )}
                  title={"Currently reading"}
                  onShelfChange={onShelfChange}
                ></BookShelf>
                <BookShelf
                  books={books.filter((book) => book.shelf === "wantToRead")}
                  title={"Want to Read"}
                  onShelfChange={onShelfChange}
                ></BookShelf>
                <BookShelf
                  books={books.filter((book) => book.shelf === "read")}
                  title={"Read"}
                  onShelfChange={onShelfChange}
                ></BookShelf>
              </div>
            )}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default List;

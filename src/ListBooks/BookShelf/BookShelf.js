import React, { Component } from "react";
import propTypes from "prop-types";
import Book from "./Book/Book";

class BookShelf extends Component {
  static propTypes = {
    books: propTypes.array.isRequired,
    onMoveShelf: propTypes.func.isRequired,
  };
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelf}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map((book) => (
                <li>
                  <Book book={book} onChange={this.props.onMoveShelf} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
export default BookShelf;

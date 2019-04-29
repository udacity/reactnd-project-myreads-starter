import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends Component {
  state = {
    books: []
  };
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">this.props.shelf</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.state.books.map(book => (
              <li key={book.id}>
                <Book book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;

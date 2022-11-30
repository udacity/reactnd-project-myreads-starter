import React, { Component } from "react";
import DisplayBooks from "./DisplayBooks";
import { Link } from "react-router-dom";

class BooksList extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <DisplayBooks
                updateBooks={this.props.updateBooks}
                books={this.props.books.filter(
                  books => books.shelf === "currentlyReading"
                )}
              />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <DisplayBooks
                updateBooks={this.props.updateBooks}
                books={this.props.books.filter(
                  books => books.shelf === "wantToRead"
                )}
              />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <DisplayBooks
                updateBooks={this.props.updateBooks}
                books={this.props.books.filter(books => books.shelf === "read")}
              />
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">add a book</Link>
        </div>
      </div>
    );
  }
}

export default BooksList;

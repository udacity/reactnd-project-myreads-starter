import React, { Component } from "react";
import propTypes from "prop-types";
import BookShelf from "./BookShelf/BookShelf";
import { Link } from "react-router-dom";
// import * as BooksAPI from "../BooksAPI";

class ListBooks extends Component {
  static propTypes = {
    books: propTypes.array.isRequired,
    onMoveBook: propTypes.func.isRequired,
  };
  shelves = ["currentlyReading", "wantToRead", "read"];

  // componentDidMount() {
  //   BooksAPI.getAll().then((data) => {
  //     console.log(data);
  //   });
  // }

  render() {
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {this.shelves.map((shelf) => (
                <BookShelf
                  key={shelf}
                  shelf={shelf}
                  books={this.props.books.filter(
                    (book) => book.shelf === shelf
                  )}
                  onMoveShelf={this.props.onMoveBook}
                />
              ))}
            </div>
          </div>
          <Link to="/search" className="open-search">
            <button onClick={() => this.setState({ screen: "search" })}>
              Add a book
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;

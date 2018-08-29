import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

import "./App.css";
import BookLibrary from "./Components/BookLibrary";
import SearchBooks from "./Components/SearchBooks";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    searchBooks: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
      console.log("State", this.state);
    });
  }

  getSeachedBooks = query => {
    if (query) {
      BooksAPI.search(query).then(books => {
        if (books.length) {
          books.forEach((book, index) => {
            let bookWithShelf = this.state.books.find(
              displayedBook => displayedBook.id === book.id
            );
            book.shelf = bookWithShelf ? bookWithShelf.shelf : "none";
            books[index] = book;
          });
          this.setState({ searchBooks: books });
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  };

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() =>
      BooksAPI.getAll().then(books => {
        this.setState({ books: books });
      })
    );
  };

  clearSearch = () => {
    this.setState({ searchBooks: [] });
  };

  render() {
    return (
      <div className="app">
        {/* Main Page */}
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BookLibrary books={this.state.books} moveBook={this.moveBook} />

              {/* {this.state.books.map(book => console.log(book))} */}

              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
        {/* Search Page */}
        <Route
          path="/search"
          render={({ history }) => (
            <SearchBooks
              books={this.state.searchBooks}
              getSearchedBooks={this.getSeachedBooks}
              moveBook={this.moveBook}
              clearSearch={this.clearSearch}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;

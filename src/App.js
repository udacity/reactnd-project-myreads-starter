import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from "./ListBooks/ListBooks";
import Search from "./Search/Search";
import { Route } from "react-router-dom";

class BooksApp extends Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((book) => {
      this.setBook((currentState) => ({
        books: [
          ...currentState.books.filter((b) => {
            return b.id !== book.id;
          }),
        ].push(book),
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks onMoveBook={this.moveBook} books={this.state.books} />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <Search
              onSearchBook={(book) => {
                this.searchBook(book);
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;

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
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
      console.log("State", this.state);
    });
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() =>
      BooksAPI.getAll().then(books => {
        this.setState({ books: books });
      })
    );
  };

  render() {
    return (
      <div className="app">
        <Route path="/search" render={({ history }) => <SearchBooks />} />

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
      </div>
    );
  }
}

export default BooksApp;

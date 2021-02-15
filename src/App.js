import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from "./ListBooks/ListBooks";
import Search from "./Search/Search";
import { Route } from "react-router-dom";

class BooksApp extends Component {
  state = {
    myBooks: [],
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
        myBooks: [...books],
      }));
    });
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((data) => {
      // console.log(data);
      BooksAPI.getAll().then((books) => {
        this.setState(() => ({
          myBooks: [...books],
        }));
      });
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              onMoveBook={this.moveBook}
              books={this.state.myBooks}
              onNavigate={() => {
                this.setState(() => ({
                  screen: "search",
                }));
              }}
            />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <Search
              myBooks={this.state.myBooks}
              onMoveBook={(book, shelf) => {
                this.moveBook(book, shelf);
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

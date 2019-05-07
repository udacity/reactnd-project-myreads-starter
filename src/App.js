import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Library from "./Library";
import BookSearch from "./BookSearch";

const categories = ["currentlyReading", "wantToRead", "read"];

class BooksApp extends React.Component {
  state = {
    library: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  };

  componentDidMount() {
    BooksAPI.getAll().then(data => this.shelfBooks(data));
  }

  shelfBooks = data => {
    categories.forEach(category => {
      let books = data.filter(book => book.shelf === category);
      this.setState(prevState => ({
        library: {
          ...prevState.library,
          [category]: books
        }
      }));
    });
  };

  fetchBooks = shelfs => {
    let data = [];
    Object.values(shelfs)
      .flat()
      .forEach(bookId => {
        BooksAPI.get(bookId)
          .then(book => {
            data.push(book);
          })
          .then(() => this.shelfBooks(data));
      });
  };

  updateLibrary = (book, shelf) => {
    BooksAPI.update(book, shelf).then(shelfs => {
      this.fetchBooks(shelfs);
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <Library
              library={this.state.library}
              updateLibrary={this.updateLibrary}
            />
          )}
        />
        <Route
          path="/search"
          render={() => <BookSearch updateLibrary={this.updateLibrary} />}
        />
      </div>
    );
  }
}

export default BooksApp;

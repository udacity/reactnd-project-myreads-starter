import React from "react";
import { Route } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Bookcase from "./components/Bookcase.js";
import OpenSearch from "./components/OpenSearch.js";
import Search from "./components/Search.js";
import { getAll, update } from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  updateShelf = (book, shelf) => {
    update(book, shelf).then(() => {
      this.getAllTheBooks()
    });
  };

  getAllTheBooks = () => {
    getAll().then((books) => {
      this.setState(() => ({
        books
      }));
    })
  };

  componentDidMount = () => this.getAllTheBooks();

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search books={this.state.books} updateShelf={this.updateShelf} />
        )} />

        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Bookcase books={this.state.books} updateShelf={this.updateShelf} />
                </div>
              </div>
              <OpenSearch />
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;

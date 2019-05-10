import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import SearchPage from "./Components/SearchPage";
import MainPage from "./Components/MainPage";
import _ from "lodash";

class BooksApp extends React.Component {
  state = {
    books: [],
    searchList: [],
    mergeList: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books =>
      this.setState(() => ({
        books
      }))
    );
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() =>
      BooksAPI.getAll().then(books =>
        this.setState(() => ({
          books
        }))
      )
    );
  };

  searchBooks = query => {
    let mergeList = [];
    if (query.length > 0) {
      BooksAPI.search(query).then(searchList =>
        this.setState(() => ({
          searchList
        }))
      );
    } else {
      this.setState(() => ({
        searchList: []
      }));
    }
  };

  clearSearch = () => {
    this.setState(() => ({
      searchList: []
    }));
  };
  render() {
    let mergeList = [];
    let booksInShelf = _.mapKeys(this.state.books, "id");
    let bookInShelfKeys = _.map(this.state.books, "id");

    if (this.state.searchList.length > 0) {
      this.state.searchList.forEach(book => {
        if (bookInShelfKeys.indexOf(book.id) < 0) {
          mergeList.push(book);
        } else {
          mergeList.push(booksInShelf[book.id]);
        }
      });
    }

    return (
      <div className="app">
        <Route
          exact
          path="/search"
          render={() => {
            return (
              <SearchPage
                searchList={mergeList}
                updateBook={this.updateBook}
                searchBooks={this.searchBooks}
              />
            );
          }}
        />
        <Route
          exact
          path="/"
          render={() => {
            return (
              <MainPage
                books={this.state.books}
                updateBook={this.updateBook}
                clearSearch={this.clearSearch}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default BooksApp;

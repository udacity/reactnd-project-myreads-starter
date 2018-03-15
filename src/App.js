import React from "react";
// import * as BooksAPI from './BooksAPI'
import ListBooks from "./ListBooks";
import SearchBook from "./SearchBook";
import "./App.css";

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <SearchBook />

        <ListBooks />
      </div>
    );
  }
}

export default BooksApp;

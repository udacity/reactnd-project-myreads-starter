import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import Library from "./Library";
import BookSearch from "./BookSearch";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/" component={Library} />
        <Route path="/search" component={BookSearch} />
      </div>
    );
  }
}

export default BooksApp;

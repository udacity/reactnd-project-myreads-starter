import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Library from "./Library";
import BookSearch from "./BookSearch";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Library} />
        <Route path="/search" component={BookSearch} />
      </div>
    );
  }
}

export default BooksApp;

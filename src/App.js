import React from "react";
import Home from "./Home";
import SearchPage from "./SearchPage";
import { Route } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";

const BooksApp = () => {
  return (
    <div className="app">
      <Route exact path="/" component={Home} />
      <Route path="/searchbooks" component={SearchPage} />
    </div>
  );
};

export default BooksApp;

import React from "react";
import Home from "./Home";
import SearchPage from "./SearchPage";
// import * as BooksAPI from './BooksAPI'
import "./App.css";

const BooksApp = () => {
  return (
    <div className="app">
      <Home />
      <SearchPage />
    </div>
  );
};

export default BooksApp;

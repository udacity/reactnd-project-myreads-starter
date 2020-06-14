import React, { useEffect, useState } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "../css/App.css";
import * as BooksAPI from "../api/BooksAPI";

import Home from "./Home";
import Search from "./Search";
import CatergoryList from "./CategoryList";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => setBooks(books));
  }, []);

  const moveBookShelf = (book, newValue) => {
    book.shelf = newValue;
    setBooks(books.filter((b) => b.id !== book.id).concat([book]));

    BooksAPI.update(book, newValue);
  };

  return (
    <Router>
      <div className="app">
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/dashboard"
          render={() => (
            <div className="books-container">
              <div className="book-header">
                <h1 className="book-header-text">MyReads</h1>
              </div>
              <CatergoryList books={books} onBookShelfChange={moveBookShelf} />
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />

        <Route
          path="/search"
          render={() => (
            <Search books={books} onBookShelfChange={moveBookShelf} />
          )}
        />
      </div>
    </Router>
  );
};

export default App;

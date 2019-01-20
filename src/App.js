import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Shelf from "./components/Shelf";
import SearchPage from "./components/SearchPage";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      BooksAPI.getAll().then(books => {
        this.setState({ books: books });
      });
    });
  };

  render() {
    return (
      <div className="app">
        <Route path="/search"
/* ---- Import SearchPage after assigning route /search and passes books state and updateShelf() ----- */
          render={() =>
            <SearchPage
              books={this.state.books}
              updateShelf={this.updateShelf}
            />
          }
        />

        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>

{/* ---- The shelf component is imported and passed the props from the books state array ----- */}

              <div className="list-books-content">
                <div>
                  <Shelf
                    shelfTitle="Want To Read"
                    books={this.state.books}
                    shelf="wantToRead"
                    updateShelf={this.updateShelf}
                  />
                </div>

                <div>
                  <Shelf
                    shelfTitle="Currently Reading"
                    books={this.state.books}
                    shelf="currentlyReading"
                    updateShelf={this.updateShelf}
                  />
                </div>

                <div>
                  <Shelf
                    shelfTitle="Already Read"
                    books={this.state.books}
                    shelf="read"
                    updateShelf={this.updateShelf}
                  />
                </div>
                <div className="open-search">
                  <Link to="/search">
                    <button />
                  </Link>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;

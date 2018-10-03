import React from "react";
import { Route } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Shelf from "./components/Shelf.js";
import OpenSearch from "./components/OpenSearch.js";
import Search from "./components/Search.js";
import { getAll, update } from "./BooksAPI";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.ShelvesEnum = {
      CURRENTLYREADING: { key: "currentlyReading", str: "Currently Reading" },
      WANTTOREAD: { key: "wantToRead", str: "Want to Read" },
      READ: { key: "read", str: "Read" },
      NONE: { key: "none", str: "None" }
    };
  }

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  };

  updateShelf = (book, shelf) => {
    update(book, shelf).then(this.getAllTheBooks());
  };

  getAllTheBooks = () => {
    getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  };

  componentDidMount = () => this.getAllTheBooks();

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search updateShelf={this.updateShelf} />
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
                  <Shelf
                    books={this.state.books}
                    shelf={this.ShelvesEnum.CURRENTLYREADING.key}
                    title={this.ShelvesEnum.CURRENTLYREADING.str}
                    updateShelf={this.updateShelf}
                  />

                  <Shelf
                    books={this.state.books}
                    shelf={this.ShelvesEnum.WANTTOREAD.key}
                    title={this.ShelvesEnum.WANTTOREAD.str}
                    updateShelf={this.updateShelf}
                  />

                  <Shelf
                    books={this.state.books}
                    shelf={this.ShelvesEnum.READ.key}
                    title={this.ShelvesEnum.READ.str}
                    updateShelf={this.updateShelf}
                  />
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

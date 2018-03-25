import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ListBooks from "./ListBooks";
import ModalBook from "./ModalBook";
import SearchBook from "./SearchBook";
import "./App.css";

class App extends Component {
  state = {
    books: [],
    results: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(book => {
      this.setState({ books: book });
    });
  }

  updateShelf = (nextShelf, book) => {
    BooksAPI.update(book, nextShelf).then(() => {
      book.shelf = nextShelf;

      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
  };

  searchBook = query => {
    if (query) {
      BooksAPI.search(query).then(books => {
        if (books.length) {
          books.forEach((book, index) => {
            let myBook = this.state.books.find(b => b.id === book.id);
            book.shelf = myBook ? myBook.shelf : "none";
            books[index] = book;
          });

          this.setState({
            results: books
          });
        }
      });
    } else {
      this.setState({
        results: []
      });
    }
  };

  render() {
    const { books, results } = this.state;

    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <ListBooks books={books} updateShelf={this.updateShelf} />
            )}
          />

          {/* <Route path="/book/:id" render={() => <ModalBook />} modalOpen={this.state.modalOpen} handleClose={this.handleClose} /> */}

          <Route
            path="/search"
            render={() => (
              <SearchBook
                results={results}
                updateShelf={this.updateShelf}
                searchBook={this.searchBook}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import BooksList from "./BooksList";
class App extends React.Component {
  state = {
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  }
  updateBooks = (book, event) => {
    let element = event.target;
    const shelf = event.target.value;
    BooksAPI.update(book, shelf).then(() =>
      BooksAPI.getAll().then(books => {
        this.setState(() => ({
          books
        }));
        element.value = shelf;
      })
    );
  };
  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => <SearchBooks updateBooks={this.updateBooks} />}
        />
        <Route
          exact
          path="/"
          render={() => (
            <BooksList
              updateBooks={this.updateBooks}
              books={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default App;

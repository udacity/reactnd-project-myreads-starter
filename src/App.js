import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import List from "./components/List";
import Search from "./components/Search";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],
    status: "loading",
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    this.setState({
      status: "loading",
    });
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books: books,
        status: "loaded",
      }))
    })
    .catch(error => {
      console.error('Error fetching API:', error);
      this.setState({books: null, status: 'error'})
  })
  }

  onShelfChange = (book, shelf) => {
    this.setState({ status: "loading" });
    BooksAPI.update(book, shelf).then((data) => {
      this.getBooks();
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <List
              onShelfChange={this.onShelfChange}
              books={this.state.books}
              status={this.state.status}
            />
          )}
        />

        <Route
          path="/search"
          render={() => (
            <Search
              books={this.state.books}
              onShelfChange={this.onShelfChange}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;

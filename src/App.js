import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import AddBooks from "./AddBooks";
import Bookcase from "./Bookcase";

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books: books }));
  }

  /* Handle search and store state at the top level so user can flip back to add and see prior search results */
  handleSearch = query => {
    BooksAPI.search(query).then(books => {
      this.setState({
        searchResults: books
      });
    });
  };

  render() {
    const { books, searchResults } = this.state;
    return (
      <Router>
        <div className="app">
          <Route
            exact
            path="/"
            render={props => <Bookcase {...props} books={books} />}
          />
          <Route
            path="/search"
            render={props => (
              <AddBooks
                {...props}
                books={searchResults}
                onSubmitSearch={query => this.handleSearch(query)}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default BooksApp;

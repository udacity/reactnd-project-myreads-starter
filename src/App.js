import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import AddBooks from "./AddBooks";
import Bookcase from "./Bookcase";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books: books }));
  }

  render() {
    const { books } = this.state;
    return (
      <Router>
        <div className="app">
          <Route
            exact
            path="/"
            render={props => <Bookcase {...props} books={books} />}
          />
          <Route path="/search" render={props => <AddBooks {...props} />} />
        </div>
      </Router>
    );
  }
}

export default BooksApp;

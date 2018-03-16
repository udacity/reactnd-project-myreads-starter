import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ListBooks from "./ListBooks";
import SearchBook from "./SearchBook";
import "./App.css";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(book => {
      this.setState({ books: book });
    });
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => (
            <ListBooks books={books} />
          )} />
          <Route path="/search" component={SearchBook} />
        </Switch>
      </div>
    );
  }
}

export default App;

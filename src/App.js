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

  updateShelf = (e, book) => {
    const { books } = this.state
    const shelf = e.target.value

    BooksAPI.update(book, shelf).then(() => {
      const newBooks = this.state.books.map(item => {
        if (item.id === book.id) {
          item.shelf = shelf;
        }
        return item;
      });

      this.setState({ books: newBooks })
    });
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => (
            <ListBooks books={books} updateShelf={this.updateShelf} />
          )} />
          <Route path="/search" component={SearchBook} />
        </Switch>
      </div>
    );
  }
}

export default App;

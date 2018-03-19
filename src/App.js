import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ListBooks from "./ListBooks";
import SearchBook from "./SearchBook";
import "./App.css";

class App extends Component {
  state = {
    books: [],
    results: [],
    query: ''
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

  searchBook = (query) => {
    if (query) {
      this.setState({
        query
      }, () => {
        BooksAPI.search(this.state.query).then(
          results => {
            results.forEach((book, index) => {
              let myBook = this.state.books.find((b) => b.id === book.id )
              book.shelf = myBook ? myBook.shelf : 'none'
              results[index] = book;
            });
            this.setState({ results })
          }
        )
      })
    }
  }


  render() {
    const { books, results } = this.state;

    return <div className="app">
        <Switch>
          <Route exact path="/" render={() => <ListBooks books={books} updateShelf={this.updateShelf} />} />

          <Route path="/search" render={() => <SearchBook results={results} updateShelf={this.updateShelf} searchBook={this.searchBook} />} />
        </Switch>
      </div>;
  }
}

export default App;

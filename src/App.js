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

  updateShelf = (shelf, book) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;

      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([ book ])
      }))
    });
  }

  searchBook = (query) => {
    if (query) {
      this.setState({
        query
      }, () => {
        BooksAPI.search(this.state.query).then(
          results => {
            if (!results.error) {
              results.forEach((book, index) => {
                let myBook = this.state.books.find((b) => b.id === book.id )
                book.shelf = myBook ? myBook.shelf : 'none'
                results[index] = book;
              });
              this.setState({ results })
            }
          }, this.setState({ results: [] })
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

import React, { Component} from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import BookSearch from "./BookSearch";
import BookList from "./BookList";
import * as BooksAPI from "./BooksAPI";


class BooksApp extends Component {
  state = {
      bookList: [],
      foundBooks: [],
      query: "",
  };

  componentDidUpdate() {
    this.loadData()
  };

  componentDidMount() {
    this.loadData()
  };

  loadData() {
      BooksAPI.getAll()
        .then(
            bookList => this.setState(
                () => (
                    {bookList}
                )
            )
        )
  };

  handleShelfChange(book, shelf) {
      BooksAPI.update(book, shelf)

  };

  updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))
        this.fetchBooks(this.state.query)
    };

  fetchBooks = (query) => {
    query.length===0
    ? this.setState({foundBooks: []})
    : BooksAPI.search(query)
        .then(
        foundBooks => {
            foundBooks !== undefined && foundBooks.error === undefined
                ? this.setState(
                () => ({
                    foundBooks: foundBooks
                })
            )
                : this.setState({foundBooks: []})
        }
    )
  };

  render() {

    return (
      <div className="app">
        <Route exact path='/' render={() =>
            <BookList
                bookList={this.state.bookList}
                onShelfChange={this.handleShelfChange}
            />
          } />
        <Route path='/search' render={() =>
            <BookSearch
                bookList={this.state.bookList}
                query={this.state.query}
                foundBooks={this.state.foundBooks}
                onShelfChange={this.handleShelfChange}
                onUpdateQuery={this.updateQuery}
            />
          } />
      </div>
    )
  }
}

export default BooksApp

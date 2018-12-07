import React, { Component } from 'react';
import './App.css';
import Search from './Search'
import { Route, Link } from 'react-router-dom'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
  state = {
    books: []
  }

  onMoveToShelf = (selectedBook, toShelf) => {
    this.setState((prevState) => {
      let { books } = prevState;

      let book = books.find((book) => book.id === selectedBook.id)

      if (!book) {
        book = selectedBook
        books.push(book)
      }
      book.shelf = toShelf;

      // Update book on remote server
      BooksAPI.update(book, toShelf);

      return { books };
    });
  }

  booksForShelf(shelf) {
    return this.state.books.filter((book) => book.shelf === shelf)
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }))
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelf
                books={this.booksForShelf('currentlyReading')}
                onMoveToShelf={this.onMoveToShelf}
                title="Currently Reading" />

              <Shelf
                books={this.booksForShelf('wantToRead')}
                onMoveToShelf={this.onMoveToShelf}
                title="Want to Read" />

              <Shelf
                books={this.booksForShelf('read')}
                onMoveToShelf={this.onMoveToShelf}
                title="Read" />
            </div>
            <div className="open-search">
              <Link to="/search">
                <button>Add a book</button>
              </Link>
            </div>
          </div>
        )}/>
        <Route path='/search' render={() => (
          <Search
            books={this.state.books}
            onMoveToShelf={this.onMoveToShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp

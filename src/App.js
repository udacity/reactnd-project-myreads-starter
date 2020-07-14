import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'
import './App.css'
import SearchBooks from './SearchBooks'
import Shelf from './Shelf'

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  getBooksOnShelf = (shelf) => {
    const filteredArray = this.state.books.filter((book) => book.shelf === shelf);
    const sortedArray = [...filteredArray].sort((a, b) => a.title > b.title ? 1 : -1);
    return sortedArray
  };

  handleShelfChange = (book, newShelf) => {
    book.shelf = newShelf;
    BooksAPI.update(book, newShelf)
      .then((res) => {
        if (!res.error) {
          this.setState((prevState) => (
            {
              books: [
                ...prevState.books.filter((b) => b.id !== book.id),
                book
              ]
            }
          ))
        }
      })
  }

  render() {
    return (
      <div className="app">
        <Route
          path='/search'
          render={() => (
            <SearchBooks
              onShelfChange={this.handleShelfChange}
              books={this.state.books}
            />
          )}
        />
        <Route
          exact path='/'
          render={() => (
            this.state.books.length > 0 &&
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Shelf
                    name='Currently Reading'
                    books = {this.getBooksOnShelf('currentlyReading')}
                    onShelfChange = {this.handleShelfChange}
                  />
                  <Shelf
                    name='Want To Read'
                    books = {this.getBooksOnShelf('wantToRead')}
                    onShelfChange = {this.handleShelfChange}
                  />
                  <Shelf
                    name='Read'
                    books = {this.getBooksOnShelf('read')}
                    onShelfChange = {this.handleShelfChange}
                  />
                </div>
              </div>
              <div className="open-search">
                <Link
                  to='/search'
                >
                  <button>Add a book</button>
                </Link>
              </div>
            </div>
          )}
        />
      </div>
    )
  }
}

export default BooksApp
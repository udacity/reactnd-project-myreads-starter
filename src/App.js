import React, {Component} from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import SearchBooks from './SearchBooks'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          books
        })
      })
  }

  handleShelfChange = (book, shelf) => {
    if (book.shelf !== shelf) {
      BooksAPI.update(book, shelf)
        .then(() => {
          book.shelf = shelf;
          this.setState((prevState) => ({
            books: prevState.books.filter((x) => x.id !== book.id).concat(book)
          }))
        })
    }
  }

  render() {
    const {books} = this.state
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path='/' render={() => (
            <BookList
              books={books}
              onShelfChange={this.handleShelfChange}
              />
          )}/>
          <Route path='/search' render={() => (
            <SearchBooks
              myBooks={books}
              onShelfChange={this.handleShelfChange}
              />
          )}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp

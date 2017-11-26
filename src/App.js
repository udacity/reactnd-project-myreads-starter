import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchPage from './component/Search'
import BookShelf from './component/BookShelf'
import './App.css'

import AlertContainer from 'react-alert'

class BooksApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
       books: [],
       queryBooks: [],
       searchQuery: "",
       alertOptions: {
          offset: 14,
          position: 'top right',
          theme: 'light',
          time: 7000,
          transition: 'scale'
        }
    }
  }

  componentDidMount() {
    this.setState({ queryBooks: [] })
    this.getAllBooks()
  }

  showAlert = (message) => {
    this.msg.show(message, {
      time: 2000,
      type: 'success',
    })
  }

  updateBookInShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(books => {
      this.getAllBooks()
      this.showAlert(`Book updated successfully`)
    })
    .catch(err => console.log(err))
  }

  updateSearch = searchQuery => {
    this.setState({ searchQuery })
    BooksAPI.search(searchQuery)
    .then(resp => {
      console.log(resp)
      let queryBooks = []
      if(Array.isArray(resp)) {
        queryBooks = resp
        this.state.books.forEach(book => {
          queryBooks = queryBooks.map(_ => _.id === book.id ? book : _)
        })
      }
      this.setState({ queryBooks })
    })
  }

  getAllBooks = () => {
    BooksAPI.getAll()
    .then(books => this.setState({ books }))
  }

  render() {
    console.log('search books', this.state.queryBooks)
    return (
      <div className="app">
        <AlertContainer ref={a => this.msg = a} {...this.state.alertOptions} />
        <Route exact path="/" render={() => (
          <BookShelf
            books={this.state.books}
            update={this.updateBookInShelf}
          />
        )} />
        <Route exact path="/search" render={() => (
          <SearchPage
            update={this.updateBookInShelf}
            search={this.updateSearch}
            queryBooks={this.state.queryBooks}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp

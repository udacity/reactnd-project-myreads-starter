import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ShowShelves from './ShowShelves'
import AddBooks from './AddBooks'

class BooksApp extends React.Component {
  state = {
    books: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //showSearchPage: true
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books: books })
      })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((booksUpdated) => {
      this.setState((books) => {
        books: books.books.map((b) => {
          if (b.id === book.id) b.shelf = shelf
          return b
        })
      })
    })
  }

  searchBooks = (query) => {
    BooksAPI.search(query, 50).then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route path='/add' render={() => (<AddBooks books={this.state.books} toSearchBooks={(query) => { this.searchBooks(query) }} />)} />
        <Route exact path='/' render={() => (<ShowShelves books={this.state.books} toChangeShelf={this.changeShelf}/>)} />
      </div>
    )
  }
}

export default BooksApp

import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ShowShelves from './ShowShelves'
import AddBooks from './AddBooks'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books: books, searchedBooks: books })
      })
  }

  changeShelf = (book, shelf, bookInShelf) => {
    //assign book to new shelf if book is already in a shelf
    if (bookInShelf) {
      BooksAPI.update(book, shelf).then((booksUpdated) => {
        this.setState((state) => {
          state.books = state.books.map((b) => {
            if (b.id === book.id) b.shelf = shelf
            return b
          })
        })
      })
    }
    //add new book to shelf from search results
    else {
      BooksAPI.update(book, shelf).then((booksUpdated) => {
        this.setState((state) => {
          book.shelf = shelf
          state.books = state.books.concat([book])
        })
      })
    }
  }

  searchBooks = (query) => {
    BooksAPI.search(query).then((searchedResults) => {
      this.setState((state) => {
        //show current shelf position for books that are already present on a shelf
        state.books.map((bookOnShelf) =>
          (searchedResults.map((book) =>
            (bookOnShelf.id === book.id ? book.shelf = bookOnShelf.shelf : "none")
          ))
        )
        state.searchedBooks = searchedResults
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ShowShelves books={this.state.books} toChangeShelf={this.changeShelf} />)} />
        <Route path='/add' render={() => (
          <AddBooks
            books={this.state.searchedBooks}
            toSearchBooks={this.searchBooks}
            toChangeShelf={this.changeShelf} />)} />
      </div>
    )
  }
}

export default BooksApp

import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import BooksGrid from './BooksGrid'

class BooksApp extends React.Component {
  state = {
    books: [],
    query: '',
    searchedBooks: [],
    shelfs: {}
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      this.setBookShelfsState(this.state.books)
    })
  }

  setBookShelfsState(books) {
    var currentShelfs = {}
    books.forEach((book) => {
      currentShelfs[book.id] = book.shelf
    })

    this.setState({ shelfs: currentShelfs })
  }

  updateShelf(book, shelfs){
    shelfs[book.id] = book.shelf
    return shelfs
  }

  selectBookShelf = (book, shelf) => {
    book.shelf = shelf
    this.setState(state => ({
      books: state.books.filter((b) => b.id !== book.id).concat([book]),
      shelfs: this.updateShelf(book, state.shelfs)
    }))

    BooksAPI.update(book, shelf)
  }

  addShelf(book){
    if(this.state.shelfs[book.id]){
      book.shelf = this.state.shelfs[book.id]
    }
    return book
  }
  
  searchQuery = (query) => {
    if(query){
      BooksAPI.search(query).then((searchedBooks) => {
        if (searchedBooks.error) {
          this.setState({ searchedBooks: [] })
        } else{
          this.setState({ searchedBooks: searchedBooks.map((book) => this.addShelf(book)) })
        }
      })
    } else {
      this.setState({ searchedBooks: [] })
    }
    this.setState({ query: query })
  }


  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link 
                to="/"
                className="close-search" 
              >Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(event) => this.searchQuery(event.target.value)}
                />
                </div>
              </div>
              <div className="search-books-results">
                <BooksGrid
                  books={this.state.searchedBooks}
                  onUpdateBookShelf={this.selectBookShelf}
                />
              </div>
            </div>
        )}/>
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                  title={"Currently Reading"}
                  shelf={"currentlyReading"}
                  books={this.state.books}
                  onUpdateBookShelf={this.selectBookShelf}
                />
                <BookShelf
                  title={"Want to Read"}
                  shelf={"wantToRead"}
                  books={this.state.books}
                  onUpdateBookShelf={this.selectBookShelf}
                />
                <BookShelf
                  title={"Read"}
                  shelf={"read"}
                  books={this.state.books}
                  onUpdateBookShelf={this.selectBookShelf}
                />
              </div>
            </div>
            <div className="open-search">
              <Link
                to="/search"
              >Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp

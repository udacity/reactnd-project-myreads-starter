import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route, Link} from 'react-router-dom'
import { BookShelfComponent } from './components/BookShelfComponent';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getAllBooks()
  } 

  getAllBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
      console.log(books)
    })
  }

  onShelfChange = (book, shelf) => {
    console.log(book)
    console.log(shelf)
    BooksAPI.update(book, shelf).then(() => {
      this.getAllBooks()
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" className="close-search" render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
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
                <BookShelfComponent 
                  shelfTitle="Currently Reading" 
                  books={this.state.books.filter((book) => book.shelf === "currentlyReading" )}
                  onShelfChange={this.onShelfChange} />
                <BookShelfComponent 
                  shelfTitle="Want to Read" 
                  books={this.state.books.filter((book) => book.shelf === "wantToRead" )}
                  onShelfChange={this.onShelfChange} />
                <BookShelfComponent 
                  shelfTitle="Read" 
                  books={this.state.books.filter((book) => book.shelf === "read" )}
                  onShelfChange={this.onShelfChange} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp

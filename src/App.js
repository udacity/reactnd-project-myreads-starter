import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route, Link} from 'react-router-dom'
import { Shelf, SearchBook } from './components';

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
          <SearchBook booksOnShelf={this.state.books} onShelfChange={this.onShelfChange} />
        )}/>
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf 
                  shelfTitle="Currently Reading" 
                  books={this.state.books.filter((book) => book.shelf === "currentlyReading" )}
                  onShelfChange={this.onShelfChange} />
                <Shelf 
                  shelfTitle="Want to Read" 
                  books={this.state.books.filter((book) => book.shelf === "wantToRead" )}
                  onShelfChange={this.onShelfChange} />
                <Shelf 
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

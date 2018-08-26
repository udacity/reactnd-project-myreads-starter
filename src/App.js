import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route } from 'react-router-dom'
import { Home, SearchBook } from './components';

class BooksApp extends React.Component {
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  componentDidMount() {
    this.getAllBooks()
  } 

  onShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getAllBooks()
    })
  }

  getAllBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books,
        currentlyReading: books.filter((book) => book.shelf === "currentlyReading" ),
        wantToRead: books.filter((book) => book.shelf === "wantToRead"),
        read: books.filter((book) => book.shelf === "read")
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" className="close-search" render={() => (
          <SearchBook booksOnShelf={this.state.books} onShelfChange={this.onShelfChange} />
        )}/>
        <Route exact path="/" render={() => (
          <Home 
              currentlyReading={this.state.currentlyReading} 
              wantToRead={this.state.wantToRead} 
              read={this.state.read} 
              onShelfChange={this.onShelfChange} />
        )}/>
      </div>
    )
  }
}

export default BooksApp

import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksPage from './components/BooksPage'
import SearchPage from './components/SearchPage'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { currentlyReading: [], wantToRead: [], read: [], allBooks: [] }

    this.getAllBooks = this.getAllBooks.bind(this)
    this.updadeShelf = this.updadeShelf.bind(this)
  }

  getAllBooks () {
    BooksAPI.getAll().then(
      books => this.setState(
        (_) => {
          return {
            currentlyReading: books.filter(b => b.shelf === 'currentlyReading'),
            wantToRead: books.filter(b => b.shelf === 'wantToRead'),
            read: books.filter(b => b.shelf === 'read'),
            allBooks: books
          }
        }
      )
    )
  }

  componentDidMount () {
    this.getAllBooks()
  }

  updadeShelf (book, shelf) {
    BooksAPI.update(book, shelf).then(this.setState(
      (prevState) => {
        if (book.shelf === shelf) {
          return prevState
        }
        const { currentlyReading, wantToRead, read } = prevState
        const allBooks = currentlyReading.concat(wantToRead, read)
        prevState.allBooks = allBooks
        const prevBook = allBooks.find(b => b.id === book.id)
        const prevBookShelf = book.shelf || prevBook ? prevBook.shelf : false
        book.shelf = shelf

        if (shelf !== 'none') {
          prevState[shelf] = prevState[shelf].concat(book)
        }

        if (prevBookShelf) {
          prevState[prevBookShelf] = prevState[prevBookShelf].filter((b) => b.id !== book.id)
        }

        return prevState
      }
    ))
  }

  render () {
    const { currentlyReading, wantToRead, read } = this.state
    return (
      <Routes>
        <Route
          exact path='/' element={
            <BooksPage
              reading={currentlyReading}
              wantRead={wantToRead}
              read={read}
              updadeShelf={this.updadeShelf}
            />
          }
        />
        <Route
          exact path='/search' element={
            <SearchPage
              updadeShelf={this.updadeShelf}
              allBooks={this.state.allBooks}
            />
          }
        />
      </Routes>
    )
  }
}

export default App

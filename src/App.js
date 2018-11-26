import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import Book from './Book'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import {BrowserRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'

class BooksApp extends Component {
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }
  state = {
    screen: 'list', // list, search
    showSearchPage: false,
    query: '',

    books: []
  }

  bookshelf_titles = [
    {
      id: 0,
      name: 'Currently Reading',
      value: 'currentlyReading'
    },
    {
      id: 1,
      name: 'Want to Read',
      value: 'wantToRead'
    },
    {
      id: 2,
      name: 'Read',
      value: 'read'
    },
    {
      id: 3,
      name: 'None',
      value: 'none'
    }
  ]

  updateBookshelfTitle = (book, selectBookshelfTitle) => {
    // Get new bookshelf title
    let new_bookshelf_title = this.bookshelf_titles.filter((title) =>
    (title.value === selectBookshelfTitle))[0].name
    // Find index of this book.
    let bookIndex = this.state.books.findIndex((b) => (
      b.id === book.id
    ))
    // Create new book`s array
    let newBooks = this.state.books;
    // Change bookshelf title in this book in new array.
    newBooks[bookIndex].bookshelf_title = new_bookshelf_title
    // Change bookshelf title value in this book in new array.
    newBooks[bookIndex].shelf = selectBookshelfTitle
    // Set new book`s array.
    this.setState((state) => ({
      books: newBooks
    }))
    // Update in API
    BooksAPI.update(book, selectBookshelfTitle)
  }


  updateQuery = (query) => {
    this.setState({ query: query.trim()})
  }

  render() {
    const { query, books } = this.state

    let showingBooks = books
    if(query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = books.filter((book) => match.test(book.title))
    } else {
      showingBooks = books
    }

    showingBooks.sort(sortBy('title'))

    return (
      <div className="app">
        {this.state.screen === 'search' && (
          <BrowserRouter>
            <div className="search-books">
              <div className="search-books-bar">
                <Link to="/">
                  <button className="close-search" onClick={() => this.setState({ screen: 'list' })}>Close</button>
                </Link>
                <div className="search-books-input-wrapper">

                  <input type="text" placeholder="Search by title or author"
                    value={this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                  />

                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                  {showingBooks.map((book) => (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                            <div  className="book-shelf-changer">
                              <select value={book.bookshelf_title_value} onChange={(e) => this.props.onUpdateBookshelfTitle(book, e.target.value)} >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>

                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </BrowserRouter>

        )}
        {this.state.screen === 'list' && (
          <BrowserRouter>
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  {this.bookshelf_titles.map((title) => (
                    <div key={title.id} className="bookshelf">
                      <h2 className="bookshelf-title">{title.name}</h2>
                      <div className="bookshelf-books">
                        <Book onUpdateBookshelfTitle={this.updateBookshelfTitle} bookshelf_title={title.value} books={this.state.books}/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">

                  <button onClick={() => this.setState({ screen: 'search' })}>Add a book</button>
                </Link>
              </div>
            </div>
          </BrowserRouter>
        )}
      </div>
    )
  }
}

export default BooksApp

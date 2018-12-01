import React, {Component} from 'react';
import './App.css'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Search extends Component {
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }
  state = {
    screen: 'list',
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

  // There are books that do not have thumbnail and their imageLinks object will be null.
  // Checking the object before using it.
  getImage = (book, imageLinks) => (
      imageLinks !== null ? book.imageLinks.thumbnail : ''
  )

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
      <div className="search-books">
        <div className="search-books-bar">
        <Route path="/" render={() => (
          <Link to="/">
            <button className="close-search" onClick={() => this.setState({ screen: 'list' })}>Close</button>
          </Link>
        )}/>
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
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.getImage(book, book.imageLinks.thumbnail)})`}}></div>
                      <div  className="book-shelf-changer">
                        <select value={book.shelf} onChange={(e) => this.updateBookshelfTitle(book, e.target.value)} >
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
    )
  }
}

export default Search

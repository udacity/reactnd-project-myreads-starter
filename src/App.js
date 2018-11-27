import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import Book from './Book'
import Search from './Search'
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
            <Search/>
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

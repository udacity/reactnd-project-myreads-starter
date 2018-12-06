import React, {Component} from 'react';
import './App.css'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class Search extends Component {
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  state = {
    query: '',
    searchBooks: [],
    books: [],
    showingBooks: []
  }

  // Get book shelf or return none.
  getBookShelf = (book) => {
    if (book.shelf !== undefined) {
      return book.shelf
    } else {
      return 'none'
    }
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
    }
  ]

  updateBookshelfTitle = (book, selectBookshelfTitle) => {
    // Update in API
    BooksAPI.update(book, selectBookshelfTitle)
  }

  // There are books that do not have thumbnail and their imageLinks object will be null.
  // Checking the object before using it.
  getImage = (book) => (
    book.imageLinks !== undefined ? book.imageLinks.thumbnail : ''
  )

  updateQuery = (query) => {
    this.setState({query})

    // look for books in the Book API (search).
    let {books, searchBooks} = this.state
    if (query) {
      // Clean query before search.
      query = query.trim()
      // Search in API.
      BooksAPI.search(query).then((searchBooks) => {
        // Check if result of search is array.
        // If it will be no array, we will trouble in showing books.
        if (Array.isArray(searchBooks)) {
          // Change shelf values.
          searchBooks.map((searchBook) => {
              searchBook.shelf = 'none'
              return this.state.books.map((book) => {
                return searchBook.id === book.id ? searchBook.shelf = book.shelf : ""
              })
          })
          // searchBooks is array
          this.setState({searchBooks})
        } else {
          // searchBooks is NOT array
          this.setState({searchBooks: []})
        }
      }).catch(function(error) {
        // error in searchBooks
        console.log('error in searchBooks: ' + error);
        this.setState({searchBooks: books})
      })

      if (searchBooks !== undefined) {
        // searchBooks is NOT undefined
        this.setState({searchBooks: []})
      } else {
        // searchBooks is undefined
        this.setState({searchBooks: []})
      }
    } else {
      // Query false.
      this.setState({searchBooks: []})
    }
    // Search results are not shown when all of the text is deleted out of the
    // search input box.
    if (query === '') {this.setState({searchBooks: []})}
  }


  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
        <Route path="/" render={() => (
          <Link to="/">
            <button className="close-search">Close</button>
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
            {this.state.searchBooks.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.getImage(book)})`}}></div>
                      <div  className="book-shelf-changer">
                        <select value={this.getBookShelf(book)} onChange={(e) => this.updateBookshelfTitle(book, e.target.value)} >
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

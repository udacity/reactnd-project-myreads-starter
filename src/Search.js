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
    screen: 'list',
    query: '',
    searchBooks: [],
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
    // Update in API
    BooksAPI.update(book, selectBookshelfTitle)
  }

  // There are books that do not have thumbnail and their imageLinks object will be null.
  // Checking the object before using it.
  getImage = (book) => (
    book.imageLinks !== undefined ? book.imageLinks.thumbnail : ''
  )

  updateQuery = (query) => {
    this.setState({ query: query.trim()})
  }


  render() {
    // look for books in the Book API (search).
    const {query, books, searchBooks} = this.state
    let showingBooks
    if (query) {
      BooksAPI.search(query).then((searchBooks) => {
        if (Array.isArray(searchBooks)) {
          this.setState({searchBooks})
        } else {
          let searchBooks = []
          this.setState({searchBooks})
        }
      }).catch(function(error) {
        console.log('error in searchBooks: ' + error);
        showingBooks = books
      })
      if (searchBooks !== undefined) {
        showingBooks = searchBooks
      } else {
        showingBooks = books
      }
    } else {
      showingBooks = books
    }

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
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.getImage(book)})`}}></div>
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

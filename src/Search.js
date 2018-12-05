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
    console.log('book.shelf: ' + book.shelf);
    if (book.shelf !== undefined) {
      console.log('book.shelf !== undefined');
      return book.shelf
    } else {
      console.log('None');
      return 'none'
    }
  }

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
      console.log('query: ' + query);
      query = query.trim()
      BooksAPI.search(query).then((searchBooks) => {
        if (Array.isArray(searchBooks)) {
          this.setState({searchBooks})
        } else {
          // let searchBooks = books
          console.log('searchBooks is NOT array');
          this.setState({searchBooks: books})
        }
      }).catch(function(error) {
        console.log('error in searchBooks: ' + error);
        // showingBooks = books
        this.setState({searchBooks: books})
      })

      if (searchBooks !== undefined) {
        console.log('searchBooks is NOT undefined');
        // showingBooks = searchBooks
        console.log('searchBooks: ' + searchBooks);
        this.setState({searchBooks: searchBooks})
      } else {
        console.log('searchBooks is undefined');
        // showingBooks = books
        this.setState({searchBooks: books})
      }
    } else {
      console.log('query false');
      // showingBooks = books
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

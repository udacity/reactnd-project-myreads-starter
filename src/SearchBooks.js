import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  state = {
    query: '',
    searchedBooks: []
  }

  updateQuery = (query) => {
    this.searchBooks(query);
    this.setState(() => ({
      query: query
    }))
  }

  searchBooks = (query) => {
    query === ''
      ? this.setState({searchedBooks: []})
      : BooksAPI.search(query)
        .then((searchedBooks) => {
          this.setState({
            searchedBooks: searchedBooks.length > 1 ? searchedBooks : []
          })
        })
  }

  render() {
    const {query, searchedBooks} = this.state
    return(
      <div className="search-books">
        <div className="search-books-bar">
        <Link
          className="close-search"
          to='/'>
            Close
        </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks === [] ? <div>No books found. Try again!</div> : searchedBooks.map((searchedBook) => <li key={searchedBook.id}><Book book={searchedBook}/></li>)}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks

// <li><Book book={book}/></li>
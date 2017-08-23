import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import { debounce } from 'throttle-debounce'

class AddBooks extends Component {
  state = {
    query: ''
  }
  updateQuery = (query) => {
    if (query) {
      this.props.toSearchBooks(query)
    }
    this.setState({ query: query.trim() })
  }
  render() {
    const { query } = this.state
    const { books, toSearchBooks, toChangeShelf } = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className='close-search'>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search books by title or author"
              value={query}
              onChange={(event) => debounce(5000, this.updateQuery(event.target.value))} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book book={book} toChangeShelf={toChangeShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default AddBooks

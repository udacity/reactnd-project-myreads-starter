import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class AddBooks extends Component {
  state = {
    query: ''
  }
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }
  render() {
    const { query } = this.state
    const { books, toSearchBooks, toChangeShelf } = this.props
    if (query) {
      toSearchBooks(query)
    }
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
              onChange={(event) => this.updateQuery(event.target.value)} />
            {query}
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book book={book} toChangeShelf={toChangeShelf}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default AddBooks

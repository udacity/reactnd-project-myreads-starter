import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  static propTypes = {
    myBooks: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  state = {
    query: '',
    searchedBooks: [],
    myBooks: []
  }

  componentDidUpdate(prevProps) {
    const {myBooks} = this.props
    if (prevProps.myBooks !== myBooks) {
      this.setState({
        myBooks: myBooks
      })
    }
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.searchBooks(query);
  }

  searchBooks = (query) => {
    const {myBooks} = this.props
    if (query) {
      BooksAPI.search(query)
        .then((searchedBooks) => {
          searchedBooks !== '' &&
          this.setState((prevState) => ({
            ...prevState,
            searchedBooks: searchedBooks,
            myBooks: myBooks
          }))
        })
    } else {
      this.setState({
        searchedBooks: [],
        myBooks: myBooks
      })
    }
  }

  render() {
    const {query, searchedBooks} = this.state
    const {myBooks, onShelfChange} = this.props
    let showBooks = '';
    if (searchedBooks.error === 'empty query' || searchedBooks === undefined) {
      showBooks = (
        <p>Sorry, no books found. Try again!</p>
      )
    } else {
      showBooks = (
        <ol className="books-grid">
          {searchedBooks.map((searchedBook) => <li key={searchedBook.id}><Book myBooks={myBooks} book={searchedBook} onShelfChange={onShelfChange}/></li>)}
        </ol>
      )
    }
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
            {showBooks}
        </div>
      </div>
    )
  }
}

export default SearchBooks
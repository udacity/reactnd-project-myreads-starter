import React, {Component} from 'react';
import './App.css'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onMoveToShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    matchedBooks: []
  }

  getCurrentCategory = (book) => {
    let { books } = this.props

    let matchedBook = books.find((b) => b.id === book.id)

    return (matchedBook ? matchedBook.shelf : 'none')
  }

  searchBooks = (query) => {
    BooksAPI.search(query)
      .then(response => {
        let books;

        response.error ? books = [] : books = response

        // Adjust category for books in my bookshelf
        books = books.map((book) => {
          book.shelf = this.getCurrentCategory(book)
          return book
        })

        this.setState({
          query: query,
          matchedBooks: books
        })
      }).catch(err => console.log(err))
  }

  render() {
    const { onMoveToShelf } = this.props
    const { matchedBooks } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.searchBooks(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {matchedBooks.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  onMoveToShelf={onMoveToShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search

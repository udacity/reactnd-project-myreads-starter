import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Search extends React.Component {
  static propTypes = {
    booksInShelf: PropTypes.array,
    onBookUpdate: PropTypes.func.isRequired
  }

  state = {
    booksFromSearch: [],
    query: ''
  }

  onSearch = (query) => {
    BooksAPI.search(query).then((books) => {
      books.map(book => (this.props.booksInShelf.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
      this.setState({query: query, booksFromSearch: books})
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(e) => this.onSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.state.booksFromSearch.map(bookInfo => (
                    <Book bookInfo={bookInfo} key={bookInfo.id} onBookUpdate={this.props.onBookUpdate}/>
                  ))
                }
              </ol>
            </div>
          </ol>
        </div>
      </div>
    )
  }
}

export default Search

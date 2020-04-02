import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

const shelves = ['Currently Reading', 'Want to Read', 'Read'];

class Library extends Component {

  filterBooks = (books, currentShelf) => {
    const formatShelfName = (name) => name.toLowerCase().replace(/\s/g, '')
    return books.filter((book) => formatShelfName(book.shelf) === formatShelfName(currentShelf))
    //books.filter((book) => formatShelfName(book.shelf) === 'read')
  }

  render() {
    console.log(this.props.books)
    // console.log(this.filterBooks(this.props.books, 'Currently Reading'))

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf, index) => (<BookShelf shelf={shelf} key={index} books={this.filterBooks(this.props.books, shelf)} />))}
        </div>

        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>
    )
  }
}

Library.proptypes = {
  books: PropTypes.array.isRequired
}

export default Library

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from '../components/BookShelf'

export default class Main extends Component {

  filterBooksByShelf = (shelf) => {
    const { books } = this.props;
    return books.filter(book => book.shelf === shelf);
  }

  render() {
    const currentlyReading = this.filterBooksByShelf('currentlyReading');
    const wantToRead = this.filterBooksByShelf('wantToRead');
    const read = this.filterBooksByShelf('read');
    const { updateBook } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf updateBook={updateBook} bookList={currentlyReading} title={'Currently Reading'} />
            <BookShelf updateBook={updateBook} bookList={wantToRead} title={'Want to Read'} />
            <BookShelf updateBook={updateBook} bookList={read} title={'Read'} />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  books: PropTypes.array,
  updateBook: PropTypes.func.isRequired
};

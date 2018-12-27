import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

export default class BookShelf extends Component {
  render() {
    const { bookList, title, updateBook } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {(bookList && bookList.length > 0) && bookList.map(book => <li key={book.id}><Book book={{ ...book }} updateBook={updateBook} /></li>)}
          </ol>
        </div>
      </div>
    );
  }
}

BookShelf.propTypes = {
  bookList: PropTypes.array,
  title: PropTypes.string,
  updateBook: PropTypes.func.isRequired
};

import React, { Component } from 'react'
import Book from './Book'

class WantToReadShelf extends Component {
  state = {
    currentShelf: 'wantToRead'
  }
  render() {
    const { books } = this.props
    books.map((book) => (
      console.log(book.shelf + ": " + book.title)))
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default WantToReadShelf

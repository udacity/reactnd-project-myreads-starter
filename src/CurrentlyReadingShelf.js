import React, { Component } from 'react'
import Book from './Book'

class CurrentlyReadingShelf extends Component {
  state = {
    currentShelf: 'currentlyReading'
  }
  render() {
    const { books, toChangeShelf } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
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

export default CurrentlyReadingShelf

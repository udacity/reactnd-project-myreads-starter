import React, { Component } from 'react'
import Book from './Book'

class CurrentlyReadingShelf extends Component {
  state = {
    currentShelf: 'currentlyReading'
  }
  render() {
    const { books } = this.props
    books.map((book) => (
      console.log(book.shelf + ": " + book.title)))
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book book={book}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default CurrentlyReadingShelf

import React, { Component } from 'react'
import Book from './Book'

class ReadShelf extends Component {
  state = {
    currentShelf: 'read'
  }
  render() {
    const { books, toChangeShelf } = this.props
    //const readBooks = books.filter((book) => (book.shelf === 'read'))
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
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

export default ReadShelf

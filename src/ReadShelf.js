import React, { Component } from 'react'
import Book from './Book'

class ReadShelf extends Component {
  state = {
    currentShelf: 'read'
  }
  render() {
    const { books } = this.props
    //const readBooks = books.filter((book) => (book.shelf === 'read'))
    books.map((book) => (
      console.log(book.shelf + ": " + book.title)))
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
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

export default ReadShelf

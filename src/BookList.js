import React, { Component } from 'react'
import BookShelf from './BookShelf'

class BookList extends Component {

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            key= "currentlyReading"
            shelfName="Currently Reading"
            books= {this.props.books.filter(book => book.shelf === "currentlyReading")}
          />
          <BookShelf
            key= "wantToRead"
            shelfName="Want to Read"
            books= {this.props.books.filter(book => book.shelf === "wantToRead")}
          />
          <BookShelf
            key= "read"
            shelfName="Read"
            books= {this.props.books.filter(book => book.shelf === "read")}
          />
        </div>
      </div>
    )
  }
}

export default BookList

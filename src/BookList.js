import React, { Component } from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from "./BooksAPI"

class BookList extends Component {
  updateShelf = (bookId: string, e: shelf) => {
    let books = this.props.books
    const book = books.filter(t => t.id === bookId)[0];
    book.shelf = e.target.value;
    BooksAPI.update(book, e.target.value).then(response => {
      this.setState({
        books: books
      });
    });
  };

  render() {
    const books = this.props.books

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            key= "currentlyReading"
            shelfName="Currently Reading"
            shelfBooks= {books.filter(book => book.shelf === "currentlyReading")}
            updateShelf={this.updateShelf}
          />
          <BookShelf
            key= "wantToRead"
            shelfName="Want to Read"
            shelfBooks= {books.filter(book => book.shelf === "wantToRead")}
            updateShelf={this.updateShelf}
          />
          <BookShelf
            key= "read"
            shelfName="Read"
            shelfBooks= {books.filter(book => book.shelf === "read")}
            updateShelf={this.updateShelf}
          />
        </div>
      </div>
    )
  }
}

export default BookList

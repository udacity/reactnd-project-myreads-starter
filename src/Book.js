import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
  render() {
    const { book, toChangeShelf } = this.props
    const bookInShelf = book.shelf ? true : false
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${(book.imageLinks || {}).smallThumbnail})` }}></div>
          <BookShelfChanger book={book} toChangeShelf={toChangeShelf} bookInShelf={bookInShelf}/>
        </div>
        <div className="book-title">{book.title}</div>
        {(book.authors || []).map((author) => (
          <div key={author} className="book-authors">{author}</div>
        ))}
      </div>
    )
  }
}

export default Book

import React, { Component } from 'react'
import BooksGrid from './BooksGrid'

class BookShelf extends Component {
  filterBooksInShelf(books, shelf) {
    return books.filter((book) => (
      book.shelf === shelf
    ))
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ this.props.title }</h2>
        <BooksGrid
          books={this.filterBooksInShelf(this.props.books, this.props.shelf)}
          onUpdateBookShelf={this.props.onUpdateBookShelf}
          removeIcon={true}
        />
      </div>
    )
  }
}

export default BookShelf

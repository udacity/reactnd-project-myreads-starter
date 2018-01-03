import React, { Component } from 'react'

class BooksGrid extends Component {

  handleChange(event, book) {
    this.props.onUpdateBookShelf(book, event.target.value)
  }
  removeBook(event, book) {
    this.props.onUpdateBookShelf(book, event)
  }

  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          { this.props.books.map((book) => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? "url(" + book.imageLinks.thumbnail + ")" : null }}></div>
                  <div className="book-shelf-changer">
                    <select value={book.shelf ? book.shelf : "none"} onChange={(event) => this.handleChange(event, book)}>
                      <option value="non" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                  <div className="remove-book-from-library" onClick={(event) => this.removeBook("none", book)}>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>

    )
  }
}

export default BooksGrid

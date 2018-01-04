import React, { Component } from 'react'

class BooksGrid extends Component {

  handleChange(book, eventValue) {
    this.props.onUpdateBookShelf(book, eventValue)
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
                    <select value={book.shelf ? book.shelf : "none"} onChange={(event) => this.handleChange(book, event.target.value)}>
                      <option value="non" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                  { this.props.removeIcon &&
                      <button className="remove-book-from-library" onClick={() => this.handleChange(book, "none")}></button>
                  }
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

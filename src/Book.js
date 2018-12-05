import React, {Component} from 'react';
import './App.css'
import PropTypes from 'prop-types';


class Book extends Component {

  getImage = (book) => (
    book.imageLinks !== undefined ? book.imageLinks.thumbnail : ''
  )

  // Get book shelf or return none.
  getBookShelf = (book) => {
    if (book.shelf !== undefined) {
      return book.shelf
    } else {
      return 'none'
    }
  }

  render() {
    return (
      <ol className="books-grid">
        {this.props.books.filter((book) => (book.shelf === this.props.bookshelf_title)).map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.getImage(book)})`}}></div>
                  <div  className="book-shelf-changer">
                    <select value={this.getBookShelf(book)} onChange={(e) => this.props.onUpdateBookshelfTitle(book, e.target.value)} >
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>

              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
        ))}
      </ol>
    )
  }
}

Book.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBookshelfTitle: PropTypes.func.isRequired
}


export default Book

import React, {Component} from 'react';
import './App.css'

class Book extends Component {
  // There are books that do not have thumbnail and their imageLinks object will be null.
  // Checking the object before using it.
  getImage = (book) => (
    book.imageLinks !== undefined ? book.imageLinks.thumbnail : ''
  )

  render() {
    const { book, onMoveToShelf } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.getImage(book)})` }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={(e) => onMoveToShelf(book, e.target.value)}>
              <option value="" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div  className="book-authors">{book.authors}</div>
      </div>
    )
  }

}
export default Book

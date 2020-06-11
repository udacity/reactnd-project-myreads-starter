import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired,
  };

  getAuthors = (authors) => {
    if (authors) {
    return authors.join(', ')
    }
    return ''
  }

  render() {
    const { book, onShelfChange } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 174,
              backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : 'https://thebookworm1305.files.wordpress.com/2013/05/classic_red_book_cover.jpg'})`,
              backgroundSize: '128px 174px'
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={book.shelf}
              onChange={(e) => onShelfChange(book, e.target.value)}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{this.getAuthors(book.authors)}</div>
      </div>
    );
  }
}

export default Book;

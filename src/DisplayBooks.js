import React, { Component } from "react";
import PropTypes from "prop-types";

class DisplayBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBooks: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="bookshelf-books">
        {this.props.books.error ? (
          <div>
            <span>No Match</span>
          </div>
        ) : (
          <ol className="books-grid">
            {this.props.books.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${book.imageLinks.thumbnail}")`
                      }}
                    ></div>
                    <div className="book-shelf-changer">
                      <select
                        value={book.shelf}
                        onChange={event => this.props.updateBooks(book, event)}
                      >
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">
                    <ul>
                      {book.authors &&
                        book.authors.map((author, i) => (
                          <li key={i}>{author}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    );
  }
}

export default DisplayBooks;
